<template>
<div class="respondent">
	<h1>welcome to respondant Home</h1>
	<p> your selected category is {{selected}}</p>
	<div class="control">
		<button class="button is-link" position="center" type="button" v-on:click="start">Start the test</button>
	</div>
	<h3>OR</h3>
	<h4>Select from a choice below:</h4>
	<nav>
		<ul>
			<li><a href="#">category 1</a></li>
			<li><a href="#">category 3</a></li>
			<li><a href="#">category 3</a></li>
		</ul>
	</nav>

</div>
</template>

<script>
export default {
	name: 'Questioner',
	data: function() {
		return {

		}
	},
	methods: {
		onSubmit: function() {

		}
	},
	someMethod: function() {

	}

}
</script>

<style scoped>
div.respondent {
	width: 30%;
	margin-left: 15%;
	position: center,
}
</style>
