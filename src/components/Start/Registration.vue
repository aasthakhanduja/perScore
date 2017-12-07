<template>
	<div class="signup">
		<form class="signup_form">
			<div class="field">
				<label class="label">First Name</label>
				<div class="control">
					<input ref="firstName" class="input is-success" v-model="user.firstName" type="text" placeholder="Enter First Name" required/>
				</div>
			</div>
			<div class="field">
				<label class="label">Last Name</label>
				<div class="control has-icons-left has-icons-right">
					<input ref="lastName" class="input is-success" v-model="user.lastName" type="text" placeholder="Enter Last Name" required/>
				</div>
			</div>
			<div class="field">
				<label class="label">Email</label>
				<div class="control has-icons-left has-icons-right">
					<input ref="email" class="input is-success" v-model="user.email" type="email" placeholder="Enter Email" required/>
				</div>
				<span class="icon is-small is-left">
					<i class="fa fa-envelope"></i>
				</span>
			</div>
			<div class="field">
				<label class="label">Password</label>
				<p class="control has-icons-left has-icons-right">
					<input ref="password" class="input is-success" v-model="user.password" type="password" placeholder="Enter Password" required/>
					<span class="icon is-small is-left">
						<i class="fa fa-lock"></i>
					</span>
				</p>
			</div>
			<div class="field">
				<label class="label"> Confirm Password</label>
				<div class="control has-icons-left has-icons-right">
					<input ref="password" class="input is-success" v-model="user.password" type="password" placeholder="Re-enter Password" required/>
					<span class="icon is-small is-left">
						<i class="fa fa-lock"></i>
					</span>
				</div>
			</div>
			<div class="field">
				<label class="label">Country</label>
				<div class="control">
					<input ref="country" class="input is-success" v-model="user.country" type="text" placeholder="Enter Country" required/>
				</div>
			</div>
			<div class="field">
				<label class="label">City</label>
				<div class="control">
					<input ref="city" class="input is-success" v-model="user.city" type="text" placeholder="Enter City" required/>
				</div>
			</div>
			<div class="field">
				<label class="label"> Age </label>
				<div class="control">
					<input ref="age" class="input is-success" v-model="user.age" type="text" placeholder="Enter your age" required/>
				</div>
			</div>
			<div class="field">
  <label class="label">Signup as</label>
  <div class="control">
    <div class="select">
      <select>
        <option>--select--</option>
        <option>Administrator</option>
				<option>Questioner</option>
				<option>Respondant</option>
      </select>
    </div>
  </div>
</div>
			<div class="field is-grouped">
				<div class="control">
					<button v-on:click="cancelForm" type="button" class="button is-link">Cancel</button>
				</div>
				<div class="control">
					<button class="button is-link" type="button" v-on:click="submitForm">Submit</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
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
      // this.user.firstName = this.$refs.firstName.value
	    //   this.user.lastName = this.$refs.lastName.value
	    //   this.user.email = this.$refs.email.value
	    //   this.user.password = this.$refs.password.value
	    //   this.user.password = this.$refs.password.value
	    //   this.user.country = this.$refs.country.value
	    //   this.user.city = this.$refs.city.value
	    //   this.user.age = this.$refs.age.value
	      this.$axios.create({
	        baseURL: 'http://192.168.100.66:6040/',
	        timeout: 1000,
	        headers: {
	          'Access-Control-Allow-Origin': '*',
	          'Content-Type': 'application/json'
	        }
	      })

	      this.$axios.post('http://192.168.100.66:6040/register', {
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

<style scoped>
  div.signup {
    width: 50%;
    margin-left: 15%;
    /*margin-left: auto;
    margin-right: auto;*/
  }

  div.signup form {
    margin-bottom: 1em;
  }
</style>
