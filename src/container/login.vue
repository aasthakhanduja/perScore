<template>
<div class="login" id="login">
  <fieldset>
    <label for="username">Username</label>
    <input id="username" v-model="user.username" type="text" placeholder="Username">

    <label for="password">Password</label>
    <input id="password" v-model="user.password" type="password" placeholder="Password">
    <button type="submit">Submit</button>
  </fieldset>
</div>
</template>
<script>
export  default { 
  mounted () {
    this . getUserInfo ();
  }
    };
  data: {
    user: {
      'user.username': 'username',
      'user.password': 'password',
      username: null,
      password: null,
    },
    submitData: null
  },
  methods: {
    doLogin: function() {
      this.submitData = this.user;
    },
    getUserInfo () {
       this . userInfo  = {
      }
  }
}
</script>
