<template>
<div>
	<div class="page_title">WELCOME, Admin!</div><br>
	<div class="logout_top">
		<a class="is-link" type="button" v-on:click="logout">Logout</a>
	</div>
	<div class="page_subtitles">Approve Questions</div>
	<div v-for="question in questions" class="question_show">
		<p class="question">{{ question.title }} </p>
		<p>{{ question.answer }}</p>
		<p>{{ question.body}}</p>
		<button class="button is-text" v-model="question.id" :data-id="question.id" v-on:click="approve">Approve</button>
	</div>

</div>
</template>

<script>
export default {
	name: 'AdminsQuestions',
	data() {
		return {
			questions: [],
			list_questions: {
				questions: []
			}
		}
	},
	created() {
		console.log(this.$store.state.response)
		var questions = this.$store.state.response.questions
		// var answer = this.$store.state.response.answers
		// console.log(this.$store.state.response)
		// console.log('#########' + this.$store.state.response.questions)
		// console.log(questions)
		// console.log(this.$store.state.response.questions)
		// console.log(this.$store.state.response.answers)
		this.questions = questions
		// this.list_answer = answer
		// this.category.categories = categories
		//
	},
	methods: {
		approve: function(e) {
			this.list_questions.questions.push({
				id: parseInt(e.target.getAttribute('data-id')),
				approved: true
			})
			//
			console.log(JSON.stringify(this.list_questions))
			//
			var app = this

			this.$axios.post('/approve_entries', JSON.stringify(this.list_questions))
				.then(function(response) {
					console.log(response.data)
					if (response.data.status === 'SUCCESS') {
						app.questions = response.data.questions
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
		},
		logout: function() {
			var result = this.$cookies.remove('token')
			this.$store.commit('update', {
				status: '',
				message: '',
				response: ''
			})
			if (result === true) {
			this.$router.push({
				name: 'Login'
			})
		}
		}
	}
}
</script>

<style>
body {
	line-height: 2.5;
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

.question_show {
	display: flow-root;
	margin-bottom: 5%;
	border: 1px solid black;
}

.button {
	float: right;
	margin-right: 50px;
	transform: translate(-330%);
}

.logout_top {
	position: absolute;
	text-align: right;
	padding-right: 2em;
	width: 100%;
	font-size: large;
}

.question {}

.question_button {}
</style>
