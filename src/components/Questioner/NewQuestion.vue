<template lang="html">
  <div class="New">
    <label class="label is-large">Add your new question HERE!</label>
    <!-- <div class="notification" v-show="checkStatus">{{message}}</div> -->
    <div class="field has-addons is-horizontal">

      <!-- <div class="field has-addons">
  <p class="control">
    <input class="input" type="text" placeholder="">
  </p>
  <p class="control">
    <a class="button is-static">
      @gmail.com
    </a>
  </p>
</div> -->
  <label class="label is-horizontal">Add new Question</label>
  <div class="control">
    <p class="control">
      <input ref="categories" v-bind:class="getClass" v-model="question.categories" class="input" type="text" placeholder="Category">
    </p>
    <p class="control">
      <a class="button is-primary">
        sub-category
      </a>
    </p>
    <input ref="title" v-bind:class="getClass" v-model="question.title" class="input" type="text" placeholder="Add Title">
    <textarea class="textarea" type="text" placeholder="body"></textarea>
    <div class="field-label has-addons is-horizontal">
  <label class="label is-horizontal">Add Answers</label>
  <div class="control">
    <input  class="input" type="text" placeholder="Option 1"><p class="control"><a class="button is-static">weight=10</a></p>
    <input  class="input" type="text" placeholder="Option 2"><p class="control"><a class="button is-static">weight=15</a></p>
    <input  class="input" type="text" placeholder="Option 3"><p class="control"><a class="button is-static">weight=20</a></p>
    <input  class="input" type="text" placeholder="Option 4"><p class="control"><a class="button is-static">weight=25</a></p>
    <input  class="input" type="text" placeholder="Option 5"><p class="control"><a class="button is-static">weight=30</a></p>
    <input  class="input" type="text" placeholder="Answer's Category">
    <!-- <input ref="option1" v-bind:class="getClass" v-model="question.answer.option1" class="input" type="text" placeholder="Option 1">
    <input ref="option2" v-bind:class="getClass" v-model="question.answer.option2" class="input" type="text" placeholder="Option 2">
    <input ref="option3" v-bind:class="getClass" v-model="question.answer.option3" class="input" type="text" placeholder="Option 3">
    <input ref="option4" v-bind:class="getClass" v-model="question.answer.option4" class="input" type="text" placeholder="Option 4">
    <input ref="option5" v-bind:class="getClass" v-model="question.answer.option5" class="input" type="text" placeholder="Option 5">
    <input ref="categories" v-bind:class="getClass" v-model="question.answer.categories" class="input" type="text" placeholder="Answer's Category"> -->
  </div>
</div>
<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" type="button" v-on:click="submitQuestion">Submit Question</button>
  </div>
  <div class="control">
    <button class="button is-link" type="button" v-on:click="cancelQuestion">Cancel</button>
  </div>
</div>
  </div>
</div>
  </div>
</template>

<script>
export default {
	name: 'NewQuestion',
	data() {
		return {
			question: {
				title: '',
				body: '',
				category: {
					id: '',
					name: '',
					option: '',
					parent: '',
					categories: []
				},
				answer: {
					option1: '',
					option2: '',
					option3: '',
					option4: '',
					option5: '',
					category: {
						id: '',
						name: '',
						option: '',
						parent: '',
						categories: []
					}
					// weights: []
				},
				// weight: {
				// 	option: '',
				// 	value: ''
				// },
				status: '',
				message: ''
			}
			// },
			// methods: {
			// 	submitQuestion: function(e) {
			// 		e.preventDefault()
			// 		var app = this
			// 		this.$axios.post('/questioner', JSON.stringify(this.question))
			// 			.then(function(response) {
			// 				console.log(response)
			// 				app.status = response.data.status
			// 				app.message = response.data.message
			// 				if (response.data.status === 'SUCCESS') {
			// 					console.log('Status: ' + response.data.status)
			// 					app.$router.push({
			// 						name: 'Questioner'
			// 					})
			// 				}
			// 			})
			// 			.catch(function(error) {
			// 				console.log(error)
			// 			})
			// 	},
			// 	getClass: function() {
			// 		return {
			// 			'input': true,
			// 			'is-danger': (this.status === 'FAILURE')
			// 		}
			// 	}
		}
	}
}
</script>

<style scoped>
div.New {
	width: 75%;
	margin-left: auto;
	margin-right: auto;
}

div.New form {
	margin-bottom: 2em;
}
</style>
