<template>
<div class="questioner">
	<h1>welcome to questioner Home</label></h1><br>
	<h2>Choose your Categories from the following list:</h2><br><br>
	<div class="">
		<ul class="tree" id="categories">
			<li class="tree__item hasChildren" v-for="category in categoriesToShow">
				<a href="javascript:void(0)" :data-level="category.level" v-on:click="nextlevel">{{ category.name }}</a>
			</li>
		</ul>
		<div class="control has-icons-center">
			<button type="button" class="button is-link" v-on:click="goBack">Go back</button>
		</div>
	</div>
	<div class="field is-grouped sb_buttons">
		<div class="control has-icons-left">
			<button class="button is-link" type="button is-link" v-on:click="newQuestion">New Question</button>
		</div>
	</div>

</div>
</template>

<script>
export default {
	name: 'Questioner',
	data() {
		return {
			currentLevel: 1,
			categories: [{
					id: 1,
					name: 'sport',
					level: 1,
					parent: 0
				},
				{
					id: 2,
					name: 'football',
					level: 2,
					parent: 1

				},
				{
					id: 3,
					name: 'banana',
					level: 2,
					parent: 1
				},
				{
					id: 4,
					name: 'movie',
					level: 3,
					parent: 2
				}
			],
			categoriesToShow: []
		}
	},
	created: function() {
		console.log('Questioner created ...')
		for (var i = 0; i < this.categories.length; i++) {
			if (this.categories[i].level === 1) {
				this.categoriesToShow.push(this.categories[i])
			}
		}
	},
	methods: {
		goBack: function() {
			var categoriesToShow = this.categoriesToShow
			this.categoriesToShow = []
			for (var i = 0; i < this.categories.length; i++) {
				if (parseInt(this.categories[i].level) === (this.currentLevel - 1)) {
					this.categoriesToShow.push(this.categories[i])
				}
			}
			if (this.categoriesToShow.length === 0) {
				this.categoriesToShow = categoriesToShow
			} else {
				this.currentLevel = (this.currentLevel - 1)
			}
		},
		nextlevel: function(e) {
			var categoriesToShow = this.categoriesToShow
			this.categoriesToShow = []
			for (var i = 0; i < this.categories.length; i++) {
				if (parseInt(this.categories[i].level) === (parseInt(e.target.getAttribute('data-level')) + 1)) {
					this.categoriesToShow.push(this.categories[i])
				}
			}
			if (this.categoriesToShow.length === 0) {
				this.categoriesToShow = categoriesToShow
			} else {
				this.currentLevel = (parseInt(e.target.getAttribute('data-level')) + 1)
			}
		},
		newQuestion: function(e) {
			console.log('test')
			e.preventDefault()
			// var app = this store
			// this.$axios.post('/questioner/question/new', JSON.stringify(this.category))
			// 	.then(function(response) {
			// 			console.log(response) {
			// 				app.$router.push({
			// 					name: 'NewQuestion'
			// 				})
			// 			}
			// 		}
		}
	}

}
</script>

<style scoped>
div.questioner {
	/*width: 30%;
	margin-left: 5%;*/
	margin-left: auto;
	margin-right: auto;
}
</style>
