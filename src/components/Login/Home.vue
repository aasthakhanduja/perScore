<template>
<div class="login" id="login">
	<form>
		<div class="field">
			<label class="label">Email</label>
			<div class="control has-icons-left has-icons-right">
				<input class="input" id="login_email" v-model="user.email" type="email" placeholder="Enter email">
				<span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
				<span class="icon is-small is-right">
              <i class="fa fa-warning"></i>
            </span>
			</div>
		</div>

		<div class="field">
			<label class="label">Password</label>
			<p class="control has-icons-left">
				<input class="input" id="login_password" v-model="user.password" type="password" placeholder="Password">
				<span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
			</p>
		</div>
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

		<div class="field is-grouped">
			<div class="control">
				<button class="button is-link" v-on:click="submitForm">Submit</button>
			</div>
			<div class="control">
				<button class="button is-text">Cancel</button>
			</div>
		</div>
	</form>
	<router-link to="/signup" class="form_nav">Create Account</router-link>
</div>
</template>

<script>
// import loginService from './loginService.js';
export default {
	name: 'Login',
	data: function() {
		return {
			user: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		onSubmit: function(e) {
			e.preventDefault()
			this.$axios.post('/login', JSON.stringify(this.user))
				.then(function(response) {
					console.log(response)
				})
				.catch(function(error) {
					console.log(error)
				})
		},
		methods: {
			loginUser: function() {
				const authUser = {}
				var app = this
				login(this.user).then(function(e) {
						if (e.status === 'success') {
							authUser.data = e.data
							authUser.token = e.token
							app.$store.state.isLoggedIn = true
							window.localStorage.setItem('lbUser', JSON.stringify(authUser))
							if (authUser.data.role_id === 'Admin') {
								app.$router.push('/admin')
							} else {
								app.$router.push('/signup')
							}
							if (authUser.data.role_id === 'Questioner') {
								app.$router.push('/submit/question')
							} else {
								app.$router.push('/signup')
							}
							if (authUser.data.role_id === 'Respondant') {
								app.$router.push('/home')
							}
						}
					})
					.catch(function(err) {
						console.log(err.data)
					})
			},
			loginAuth: function() {
				var app = this
				const status = JSON.parse(window.localStorage.getItem('lbUser'))
				if (status === null || status === undefined) {
					app.$router.push('/login')
				} else if (status.data.role_id === 'admin') {
					app.$router.push('/admin')
				} else {
					app.$router.push('/home')
				}
				// else {
				//   app.$router.push('/submit/question');
				// }
			}
		},
		created: function() {
			this.loginAuth()
		}
	}
}
</script>

<style scoped>
div.login {
	width: 30%;
	margin-left: 5%;
	/*margin-left: auto;
      margin-right: auto;*/
}

div.login form {
	margin-bottom: 1em;
}
</style>
