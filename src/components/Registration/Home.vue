<template>
<div class="signup">
	<div class="notification" v-show="checkStatus">{{message}}</div>
	<form class="signup_form">
		<div class="field">
			<label class="label">First Name</label>
			<div class="control">
				<input ref="firstName" v-bind:class="getClass" v-model="user.firstName" type="text" placeholder="Enter First Name" required/>
			</div>
			<!-- <p class="help is-danger" v-show="checkStatus">{{validationMessage("firstName")}}</p> -->
		</div>
		<div class="field">
			<label class="label">Last Name</label>
			<div class="control has-icons-left has-icons-right">
				<input ref="lastName" v-bind:class="getClass" v-model="user.lastName" type="text" placeholder="Enter Last Name" required/>
			</div>
		</div>
		<div class="field">
			<label class="label">Email</label>
			<div class="control has-icons-left has-icons-right">
				<input ref="email" v-bind:class="getClass" v-model="user.email" type="email" placeholder="Enter Email" required/>
			</div>
			<span class="icon is-small is-left">
							<i class="fa fa-envelope"></i>
						</span>
		</div>
		<div class="field">
			<label class="label">Password</label>
			<p class="control has-icons-left has-icons-right">
				<input ref="password" v-bind:class="getClass" v-model="user.password" type="password" placeholder="Enter Password" required/>
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
				<div ref="role" v-model="user.role" class="select">
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
	data() {
		return {
			user: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: '',
				age: '',
				role: '',
				location: {
					country: '',
					city: ''
				}
			},
			status: '',
			message: ''
		}
	},
	methods: {
		submitForm: function(e) {
			e.preventDefault()
			var app = this
			this.$axios.post('/register', JSON.stringify(this.user))
				.then(function(response) {
					console.log(response)
					app.status = response.data.status
					app.message = response.data.message
					if (response.data.status === 'SUCCESS') {
						console.log('Status: ' + response.data.status)
						app.$router.push({
							name: 'Login'
						})
						// router.push({
						//   name: 'Login',
						//   params: {
						//     message: response.data.message
						//   }
						// })
					}
					// else {
					//   app.fields = response.data.fields
					// }
				})
				.catch(function(error) {
					console.log(error)
				})
		},
		checkStatus: function() {
			if (this.status === 'SUCCESS') {
				return true
			} else {
				return false
			}
		},
		getClass: function() {
			return {
				'input': true,
				'is-danger': (this.status === 'FAILURE')
			}
		},
		validationMessage: function(fieldName) {
			var fields = this.fields
			var message = ''
			for (var i = 0; i < fields.length; i++) {
				if (fields[i].Name === fieldName) {
					message = fields[i].Message
					break
				}
			}
			return message
		}
	}
}
</script>

<style scoped>
div.signup {
	width: 95%;
	margin-left: auto;
	margin-right: auto;
}

form.signup_form {
	width: 50%;
	margin-left: 15%;
	/*margin-left: auto;
		margin-right: auto;*/
}

div.signup form {
	margin-bottom: 1em;
}

div.notification {
	text-align: center;
	padding: 0.5rem 1.5rem 0.5rem 1.5rem;
}
</style>
