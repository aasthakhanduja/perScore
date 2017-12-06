<template>
  <div>
    <h1>Sign up Page</h1>
    <h1>Sign up for our awesome app!</h1>
    <h2> helllooo guyssss wassssuppp!!</h2>
    <p> by signing up you will have to agree with our terms and conditions</p>
    <label>First Name</label>
    <input ref="firstName" type="text" placeholder="Enter First Name" name="first-name" required/>
    <label>Last Name</label>
    <input ref="lastName" type="text" placeholder="Enter Last Name" name="last-name" required/>
    <label>Email</label>
    <input ref="email" type="text" placeholder="Enter Email" name="email" required/>
    <label>Password</label>
    <input ref="password" type="password" placeholder="Enter Password" name="psw" required/>
    <label>Confirm Password</label>
    <input ref="password" type="password" placeholder="Confirm Password" name="psw-confirm" required/>
    <label>Country</label>
    <input ref="country" type="text" placeholder="Origin Country" name="country" required/>
    <label>City</label>
    <input  ref="city" type="text" placeholder="Enter City" name="city" required/>
    <label>Age</label>
    <input ref="age" type="text" placeholder="Enter your age as on 01/01." name="age" size="3"/>
    <!-- <input type="checkbox" checked="checked"> Remember me -->

    <button v-on:click="cancelForm" type="button"  class="cancelbtn">Cancel</button>
    <button v-on:click="submitForm" type="button"> Submit</button>

    <p>{{user}}</p>
  </div>
</template>

<script>
var axios = require('axios')
// import Registration from '../components/Registration.vue'
export default{
  name: 'Registration',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
        city: '',
        age: ''
      }
    }
  },
  methods: {
    submitForm: function (event) {
      console.log(this.$refs.firstName.value)
      this.user.firstName = this.$refs.firstName.value
      this.user.lastName = this.$refs.lastName.value
      this.user.email = this.$refs.email.value
      this.user.password = this.$refs.password.value
      this.user.password = this.$refs.password.value
      this.user.country = this.$refs.country.value
      this.user.city = this.$refs.city.value
      this.user.age = this.$refs.age.value

      axios.create({
        baseURL: 'http://192.168.100.66:6040/',
        timeout: 1000,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
      // POST /someUrl
      // instance.request({
      //   method: 'post',
      //   url: 'register',
      //   params: {
      //     name: "NAME"
      //   },
      //   data: {
      //     age: '21',
      //     email: 'jhjaascasdaa@gmail.com',
      //     password: '12345',
      //     location: {
      //       city: 'dehradun',
      //       country: 'india'
      //     },
      //     role: 'admin'
      //   }
      // })
      axios.post('http://192.168.100.66:6040/register', {
        age: '21',
        email: 'jhjaascasdaa@gmail.com',
        password: '12345',
        location: {
          city: 'dehradun',
          country: 'india'
        },
        role: 'admin'
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
