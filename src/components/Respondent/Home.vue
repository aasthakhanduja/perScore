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
			<li v-for="category in list_categories"><a href="javascript:void(0)"> {{category.name}} </a></li>
		</ul>
	</nav>

</div>
</template>

<script>
export default {
	name: 'Respondent',
	data: function() {
		return {
			list_categories: []

		}
	},
	methods: {
		start: function() {

		}
	},

	created() {
		var categories = this.$store.state.response.categories
		console.log(this.$store.state.response.categories)
		this.list_categories = categories
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
