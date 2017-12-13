<template>
<div>
	<div class="page_title">WELCOME, to your test!</div>
	<div class="page_subtitles"> Get appropriate results in just a giffy </div>

	<div class="next">
		<ul id="question">
			<lable is-pr>{{question_response.title}}</lable>
			<li>{{question_response.body}}</li>
			<input v-on:click='checkIt(answer)' type="radio" name="ques" v-model="selected" :value="answer">{{question_response.answer}} <br>
		</ul>
	</div>
	<div class="button is-link">
		<!-- <home-cmp :question="questions[qindex]"></home-cmp> -->
		<button v-on:click="nextClick" type="button">Next</button>
		<button type="button" v-on:click="prevClick">Previous</button>
		<button v-on:click="reset" type="button">Reset</button>

	</div>

</div>
</template>

<script>
export default {
	name: 'NextQuestion',
	data() {
		return {
			selected: '',
			qindex: 0,
			question_request: {
				category_id: 0,
				question_id: 0,
				answer: {
					option1: false,
					option2: false,
					option3: false,
					option4: false,
					option5: false
				},
				auth_token: ''
			},
			question_response: {
				title: '',
				body: '',
				answer: {
					option1: '',
					option2: '',
					option3: '',
					option4: '',
					option5: ''
				}
			},
			questions: []
		}
	},
	methods: {
		checkIt: function(val) {
			if (val === this.selected) {
				this.selected = true
			}
		},
		reset: function() {
			this.selected = false
		},
		nextClick: function() {
			if (this.qindex < this.questions.length - 1) {
				this.qindex = this.qindex + 1
			}
		},
		prevClick: function() {
			if (this.qindex > 0) {
				this.qindex = this.qindex - 1
			}
		}
	},
	created() {
		var categoryId = this.$store.state.componentData.selectedCategory.id
		this.question_request.category_id = categoryId
		this.question_request.auth_token = this.$cookies.get('token')
		console.log(JSON.stringify(this.question_request))
		var app = this

		this.$axios.post('/get_question', JSON.stringify(this.question_request))
			.then(function(response) {
				console.log(response.data)
				if (response.data.status === 'SUCCESS') {
					app.question_response.title = response.data.title
					app.question_response.body = response.data.body
					app.question_response.answer.option1 = response.data.answer.option1
					app.question_response.answer.option2 = response.data.answer.option2
					app.question_response.answer.option3 = response.data.answer.option3
					app.question_response.answer.option4 = response.data.answer.option4
					app.question_response.answer.option5 = response.data.answer.option5
				} else {
					app.notify = true
					app.colorClass = 'failure'
					app.$store.commit('update', {
						status: response.data.status,
						message: response.data.message
					})
					app.fields = response.data.fields
				}
			})
			.catch(function(error) {
				console.log(error)
			})
	}
}
</script>

<style>
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
</style>
