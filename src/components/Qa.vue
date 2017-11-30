<template>
  <div>
    <h1> Welcome as a questionarre </h1>
<h2> you can enter your questions and answers here</h2>

<p>{{msg1}}</p>
<p>{{msg2}}</p>
 </div>
</template> 
<script>
export default {
  name: 'QaCmp',
  props: [''],
  data () {
    return {
      selected: ''
    }
  }
}
</script>
