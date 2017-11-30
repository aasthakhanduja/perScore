<template id="abc">
  <div>
    <h1> Welcome to phyc test </h1>
    <h2> get appropriate results in just 5 questions</h2>
     <p>{{question.question}}</p>
<ul id="question">
  <li v-for="answer in question.answers">
    <input v-on:click='checkIt(answer)' type="radio" name="ques" v-model="selected" :value="answer"> {{answer}}<br>
  </li>
</ul>
<button v-on:click="reset" type="button">Reset</button>
  </div>
</template> 
<script>
export default {
  name: 'HomeCmp',
  props: ['question'],
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    checkIt: function (val) {
      if (val === this.selected) {
        this.selected = true
      }
    },
    reset: function () {
      this.selected = false
    }
  }
}
</script>
