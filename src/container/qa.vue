<template>
  <div class='qa'>
  <h1>write the questions</h1>
  <p>
    <label for="msg1">question and body</label>
    <input type="text" v-model="msg1">
    {{msg1}}
  </p>
  <p>
    <label for="msg2">answer options</label>
    <input type="text" v-model="msg2">
    {{msg2}}
  </p>
  <button type="button" value="Submit">Submit</button>
  <button v-on:click="nextClick" type="button">Next</button>
  </div>
</template>
<script>
import QaCmp from '../components/qa.vue'
var axios = require('axios')
// var value = '763587268746578234'
export default {
  beforeMount () {
    this.vgetval()
  },
  name: 'Qa',
  components: {
    'qa-cmp': QaCmp
  },
  data () {
    return {
      qaindex: 0,
      msg: ''
    }
  },
  methods: {
    vgetval () {
      let self = this
      axios.get('http://ipinfo.io/111.93.246.114/json')
        .then(function (response) {
          var data = response.data.ip
          console.log(response.data)
          self.msg = data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  nextClick: function () {
    if (this.qaindex < 6) {
      this.qaindex = this.qaindex + 1
    }
  }
}
</script>
