<template>
  <div class='home'>
     <h1>Home</h1>
     <home-cmp :question="questions[qindex]"></home-cmp>
     <button type="button" value="Submit">Submit</button>
     <button v-on:click="nextClick" type="button">Next</button>
     <button v-on:click="prevClick" type="button">Prev</button>
     
  </div>
</template>
<script>
import HomeCmp from '../components/home.vue'
export default {
  name: 'Home',
  components: {
    'home-cmp': HomeCmp
  },
  data () {
    return {
      qindex: 0,
      questions: [
       {question: 'What is your favourite color? 1', answers: ['red', 'yellow', 'blue', 'Black', 'White']},
       {question: 'Which sport do you like? 2', answers: ['Ludo', 'baseball', 'basketball', 'Swimming', 'football']},
       {question: 'Which type of movies do you like? 3', answers: ['romcom', 'comedy', 'action', 'thriller']},
       {question: 'Which type of food you like? 4', answers: ['chinese', 'indian', 'xyz', 'abc', 'pqr']}
      ]
    }
  },
  methods: {
    nextClick: function () {
      if (this.qindex < this.questions.length - 1) {
        this.qindex = this.qindex + 1
      }
    },
    prevClick: function () {
      if (this.qindex > 0) {
        this.qindex = this.qindex - 1
      }
    }
  }
}
</script>
