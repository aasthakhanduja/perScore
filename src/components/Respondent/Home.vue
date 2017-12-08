<template>
<div>
	<h1> Welcome to phyc test </h1>
	<h2> get appropriate results in just 5 questions</h2>
	<div class="field is-grouped">
		<div class="home">
			<home-cmp :question="questions[qindex]"></home-cmp>
			<button v-on:click="nextClick" type="button" class="button is-link">Next</button>
		</div>
		<div class="control">
			<button class="button is-link" type="button" v-on:click="prevClick">Previous</button>
		</div>
	</div>
	<ul id="question">
		<li v-for="answer in questions.answers">
			<input v-on:click='checkIt(answer)' type="radio" name="ques" v-model="selected" :value="answer"> {{answer}}<br>
		</li>
	</ul>
	<button v-on:click="reset" class="button is-link" type="button">Reset</button>
</div>
</template>

<script>
export default {
	data() {
		return {
			selected: '',
			qindex: 0,
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
	}
}
</script>
