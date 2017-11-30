<template>
  <div class="registeration">
    <h1> Register to access our tests. </h1>
    <h2></h2>
    <p> by signing up you will have to agree with our terms and conditions</p>
    <label><b> First Name</b></label>
    <input type="text" placeholder="Enter First Name" name="fname" required>
    <label><b>Last Name</b></label>
    <input type="text" placeholder="Enter Last Name" name="lname" required>
    <label><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>
    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <label><b>Country</b></label>
    <input type="text" placeholder="Origin Country" name="country" required>
    <label><b>City</b></label>
    <input type="text" placeholder="Enter City" name="city" required>
    <label><b>Age</b></label>
    <input type="text" placeholder="Enter your age as on 01/01." name="age" size="3">
    <label><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    <input type="checkbox" checked="checked"> Remember me
    <p>By creating an account you agree to our Terms & Privacy</p>
      <button type="button"  class="cancelbtn">Cancel</button>
      <button v-on: submit.prevent="onSubmit" type="button"> Submit</button>
      //Vue will automatically prevent the default action from occurring.
     <button type="button" value="Submit">Submit</button>    
  </div>
</template>
<script>
export default {
import HomeCmp from '../components/registeration.vue'
  name: 'Registeration',
  components: {
    'registeration-cmp': Registeration-cmp,
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
