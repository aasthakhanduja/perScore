<template>
<div class="login" id="login">
	<div class="notification" v-show="notify" v-bind:class="getColorClass()">{{ message() }}</div>
	<div class="page_title">Login to PerScore</div>
	<form class="login_form">
		<div class="field">
			<label class="label">Email</label>
			<div class="control has-icons-left">
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

		<div class="field is-grouped sb_buttons">
			<div class="control has-icons-left">
				<button type="button" class="button is-link">Cancel</button>
			</div>
			<div class="control has-icons-left">
				<button class="button is-link" type="button" v-on:click="submitForm">Submit</button>
			</div>
		</div>
	</form>
	<router-link to="/signup" class="form_nav">Create Account</router-link>
</div>
</template>

<script>
export default {
	name: 'Login',
	data: function() {
		return {
			user: {
				email: '',
				password: ''
			},
			fields: [],
			notify: false,
			colorClass: ''
		}
	},
	created: function() {
		console.log('Login created ...')
		if (this.$store.state.status === 'SUCCESS') {
			this.notify = true
			return true
		} else {
			this.notify = false
			return false
		}
	},
	methods: {
		submitForm: function(e) {
			e.preventDefault()
			var app = this
			this.$axios.post('/login', JSON.stringify(this.user))
				.then(function(response) {
					console.log(response)
					if (response.data.status === 'SUCCESS') {
						app.$store.commit('update', {
							status: response.data.status,
							message: response.data.message,
							response: response.data
						})
						console.log('Status: ' + app.$store.state.status)
						app.$router.push({
							name: 'Questioner'
						})
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
		message: function() {
			return this.$store.state.message
		},
		getColorClass: function() {
			return {
				'success': (this.$store.state.status === 'SUCCESS'),
				'failure': (this.$store.state.status === 'FAILURE')
			}
		}
	}
}
</script>

<style scoped>
div.login {
	width: 95%;
	margin-left: auto;
	margin-right: auto;
}

form.login_form {
	margin-top: 3em;
	width: 30%;
	margin-left: 5%;
	/*margin-left: auto;
		margin-right: auto;*/
	text-align: left;
}

div.page_title {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	font-size: 14pt;
	font-weight: bold;
	color: #7957d5;
}

div.signup form {
	margin-bottom: 1em;
}

div.notification {
	height: 2em;
	text-align: center;
	font-size: 14pt;
	padding: 0.5rem 1.5rem 0.5rem 1.5rem;
}

div.sb_buttons {
	margin-top: 2em;
}

.success {
	color: darkgreen;
}

.failure {
	color: red;
}
</style>
