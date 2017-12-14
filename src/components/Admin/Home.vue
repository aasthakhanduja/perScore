<template>
<div class="adminHome">
	<div>
		<form>
			<div class="page_title">WELCOME, Admin!</div><br>
			<div class="page_subtitles">Click on Categories or Questions to begin</div><br>
			<router-link to="/admin/categories" class="button is-success"> Categories </router-link><br><br>
			<router-link to="/admin/questions" class="button is-link"> Questions </router-link>
		</form>
	</div>
</div>
</template>

<script>
export default {
	name: 'Admin',
	data() {
		return {
			categories: [],
			questions: []
		}
	}
}
</script>

<style>
div.page_title {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	font-size: 14pt;
	font-weight: bold;
	color: #7957d5;
}

div.page_subtitles {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	font-size: 12pt;
	font-weight: normal;
	color: #7957d5;
}
</style>
