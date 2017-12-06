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

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" v-on:click="onSubmit">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>
    </form>
    <router-link to="/signup" class="form_nav"> register test via router link</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: function () {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit: function (e) {
        e.preventDefault()
        this.$axios.post('/login', JSON.stringify(this.user))
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
