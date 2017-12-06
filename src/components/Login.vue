<template>
  <form class="w-50 p-3">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input">
        Check me out
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
<!-- <div>
  <h1>you guys can login here</h1>
  <div class="login" id="login">
    <div class="">
      <label name="email">Email</label>
      <input name="email" type="text" placeholder="email" />
      <br><br>
    </div>
    <div>
      <label name="password">Password</label>
      <input name="password" type="password" placeholder="Password" />
      <br><br>
    </div>
    <br>
    <button type="submit">Submit</button>
  </div>
  <router-link to="/signup"> register test via router link</router-link>
</div> -->
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
      this.$http.post('/api/users', this.user, function (data) {
        this.$route.router.go()
      })
        .error(function (data) {
          if (data.errors !== 'undefined') {
            this.$set('error', data.errors)
          }
        })
    }
  }
}
</script>

<style scoped>
  form.w-50 {
    width: 50%;
  }
</style>
