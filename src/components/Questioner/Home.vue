<template>
<div class="questioner">
	<div class="notification" v-show="notify" v-bind:class="getColorClass()">{{ message() }}</div>
	<div class="page_title">Welcome Questioner!</div>

	<div class="questioner-functions columns">
		<div class="categories-section column is-one-third">
			<h2><b>Choose a category:</b></h2>
			<ul class="categories">
				<li v-for="category in categoriesToShow">
					<a href="javascript:void(0)" :data-level="category.level" v-on:click="nextlevel">{{ category.name }}</a>
				</li>
			</ul>
			<div class="control align-center">
				<a class="button is-text" v-show="isSelected" v-on:click="goBack">← Previous List</a>
			</div>
		</div>
		<div class="column">
			<div class="q-actions" v-show="isSelected">
				<div class="control">
					<span class="fr-1">Create </span>
					<a class="button is-link" v-on:click="newQuestion">New Question</a>
					<span class="fr-2">under</span>
					<span class="fr-3">{{ categorySelcted }}</span>
				</div>
			</div>
		</div>
	</div>

</div>
</template>

<script>
export default {
	name: 'Questioner',
	data() {
		return {
			notify: false,
			currentLevel: 1,
			categoriesToShow: [],
			isSelected: false,
			categorySelcted: '',
			categoryLastSelcted: []
		}
	},
	created: function() {
		if (this.$store.state.status === 'SUCCESS') {
			this.notify = true
			var categories = this.$store.state.response.categories
			if (categories !== undefined) {
				for (var i = 0; i < categories.length; i++) {
					if (parseInt(categories[i].level) === 1) {
						this.categoriesToShow.push(categories[i])
					}
				}
			}
			return true
		} else {
			this.notify = false
			return false
		}
	},
	methods: {
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
				this.categoryLastSelcted.push(this.categorySelcted)
				this.categorySelcted = e.target.innerText
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
				this.categorySelcted = this.categoryLastSelcted.pop()
				this.currentLevel = (this.currentLevel - 1)
				if (this.categoryLastSelcted.length === 0) {
					this.isSelected = false
				}
			}
		},
		newQuestion: function(e) {
			e.preventDefault()
			this.$router.push({
				name: 'NewQuestion'
			})
			// var app = this store
			// this.$axios.post('/questioner/question/new', JSON.stringify(this.category))
			// 	.then(function(response) {
			// 			console.log(response) {
			// 				app.$router.push({
			// 					name: 'NewQuestion'
			// 				})
			// 			}
			// 		}
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
	}

}
</script>

<style scoped>
div.questioner {
	/*width: 30%;*/
}

div.page_title {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	font-size: 14pt;
	font-weight: bold;
	color: #7957d5;
}

div.questioner-functions {
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

.success {
	color: darkgreen;
}

.failure {
	color: red;
}

.align-center {
	text-align: center;
}
</style>
