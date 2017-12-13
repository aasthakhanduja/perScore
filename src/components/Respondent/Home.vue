<template>
<div>
	<div class="page_title">WELCOME, respondent!</div>
	<div class="page_subtitles">
		<p>your selected category is {{selectedCategoryName}}</p>
		<h3>OR</h3>
		<h4>Select from a choice below:</h4>
	</div>
	<nav>
		<ul>
			<li v-for="category in categoriesToShow">
				<a href="javascript:void(0)" :data-level="category.level" v-on:click="nextlevel"> {{category.name}} </a></li>
		</ul>
	</nav>
	<div class="button_group">
		<div class="control go-back">
			<button class="button is-link" type="button" v-show="isSelected" v-on:click="goBack">← Previous List</button>
		</div>
		<div class="control">
			<button class="button is-success" type="button" v-on:click="start">Start the test</button>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'Respondent',
	data: function() {
		return {
			notify: false,
			currentLevel: 1,
			categoriesToShow: [],
			isSelected: false,
			selectedCategoryName: '',
			categoryLastSelcted: []

		}
	},
	methods: {
		start: function(e) {
			e.preventDefault()
			var category
			var categories = this.$store.state.response.categories
			for (var i = 0; i < categories.length; i++) {
				if (this.selectedCategoryName === categories[i].name) {
					category = categories[i]
					category.categories = []
					break
				}
			}
			console.log(category)
			this.$store.commit('update', {
				componentData: {
					selectedCategoryName: this.selectedCategoryName,
					selectedCategory: category
				}
			})
			this.$router.push({
				name: 'NextQuestion'
			})
		},
		nextlevel: function(e) {
			var categories = this.$store.state.response.categories
			var categoriesToShow = this.categoriesToShow
			this.categoriesToShow = []
			for (var i = 0; i < categories.length; i++) {
				if (parseInt(categories[i].level) === (parseInt(e.target.getAttribute('data-level')) + 1)) {
					this.categoriesToShow.push(categories[i])
				}
			}
			if (this.categoriesToShow.length === 0) {
				this.categoriesToShow = categoriesToShow
			} else {
				this.isSelected = true
				this.categoryLastSelcted.push(this.selectedCategoryName)
				this.selectedCategoryName = e.target.innerText
				this.currentLevel = (parseInt(e.target.getAttribute('data-level')) + 1)
			}
		},
		goBack: function(e) {
			var categories = this.$store.state.response.categories
			var categoriesToShow = this.categoriesToShow
			this.categoriesToShow = []
			for (var i = 0; i < categories.length; i++) {
				if (parseInt(categories[i].level) === (this.currentLevel - 1)) {
					this.categoriesToShow.push(categories[i])
				}
			}
			if (this.categoriesToShow.length === 0) {
				this.isSelected = false
				this.categoriesToShow = categoriesToShow
			} else {
				this.isSelected = true
				this.selectedCategoryName = this.categoryLastSelcted.pop()
				this.currentLevel = (this.currentLevel - 1)
				if (this.categoryLastSelcted.length === 0) {
					this.isSelected = false
				}
			}
		}
	},

	created() {
		var categories = this.$store.state.response.categories
		console.log(this.$store.state.response)
		if (categories !== undefined) {
			for (var i = 0; i < categories.length; i++) {
				if (parseInt(categories[i].level) === 1) {
					this.categoriesToShow.push(categories[i])
				}
			}
		}
	}

}
</script>

<style scoped>
div.respondent {
	width: 30%;
	margin-left: 15%;
	position: center,
}

div.page_title {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	font-size: 14pt;
	font-weight: bold;
	color: #7957d5;
}

div.page_subtitles {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	font-size: 12pt;
	font-weight: normal;
	color: #7957d5;
}

.control {
	font-size: 1rem;
	position: relative;
	text-align: center;
	margin: 20px;
}

.button_group {
	display: -webkit-inline-box;
}
</style>
