<template>
<div class="respondent">
	<div class="notification" v-show="notify" v-bind:class="getColorClass()">{{ message() }}</div>
	<div class="page_title">Welcome Respondent!</div>

	<div class="respondent-functions columns">
		<div class="categories-section column is-one-third">
			<div class="c-label">
				Choose your interest:
			</div>
			<ul class="categories">
				<li v-for="category in categoriesToShow">
					<a href="javascript:void(0)" :data-level="currentLevel" v-on:click="nextlevel">{{ category.name }}</a>
				</li>
			</ul>
			<div class="control align-center">
				<a class="button is-text" v-show="hasPrevious" v-on:click="goBack">← Previous List</a>
			</div>
		</div>
		<div class="column">
			<div class="q-actions" v-show="isSelected">
				<div class="c-label">
					Interest selected: <span class="c-scn">{{ selectedCategoryName }}</span>
				</div>
				<div class="control">
					<a class="button is-success" type="button" v-on:click="start">Start The Challenge</a>
				</div>
			</div>
			<div class="logout_top">
				<button class="button is-link" type="button" v-on:click="logout">LOGOUT</button>
			</div>
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
		logout: function() {
			this.$cookies.remove('token')
			this.$router.push({
				name: 'Login'
			})
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
		},
		message: function() {
			return this.$store.state.message
		},
		getColorClass: function() {
			return {
				'success': (this.$store.state.status === 'SUCCESS'),
				'failure': (this.$store.state.status === 'FAILURE')
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
	/*width: 30%;*/
}

div.page_title {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	font-size: 14pt;
	font-weight: bold;
	color: #7957d5;
}

div.respondent-functions {
	margin-left: 15%;
	margin-top: 2em;
}

div.notification {
	height: 2em;
	text-align: center;
	font-size: 14pt;
	padding: 0.5rem 1.5rem 0.5rem 1.5rem;
}

ul.categories {
	margin-top: 2em;
	max-height: 50vh;
	margin-bottom: 1em;
}

div.q-actions div.control {
	position: absolute;
	top: 20em;
}

div.q-actions div.control button {
	margin-right: 4em;
}

div.q-actions div.control span.fr-1 {
	position: absolute;
	top: 0.5em;
	left: -4em;
}

div.q-actions div.control span.fr-2 {
	position: absolute;
	top: 0.5em;
	left: 9em;
}

div.q-actions div.control span.fr-3 {
	position: absolute;
	top: 6px;
	left: 10.5em;
	font-size: 14pt;
	font-weight: bold;
	text-decoration: underline;
	color: crimson;
}

.c-label {
	font-size: 14pt;
	font-weight: bold;
}

span.c-scn {
	text-decoration: underline;
	color: crimson;
}

.success {
	color: darkgreen;
}

.failure {
	color: red;
}

.align-center {
	text-align: center;
}

.logout_top {}
</style>
