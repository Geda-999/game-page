<script setup lang="ts">
defineOptions({
	name: 'ButtonIcon',
})

interface ButtonItf {
	icon: string
	name: string
}

defineProps<ButtonItf>()

defineEmits(['change'])
</script>

<template>
	<div class="btn-link" @click="$emit('change')">
		{{ name }}
		<img :src="icon" alt="" />
	</div>
</template>

<style lang="scss" scoped>
.btn-link {
	font-size: 34px;
	line-height: 73px;
	height: 73px;
	width: 230px;
	/* padding: 0 15px; */
	background: url(https://demosc.chinaz.net/Files/DownLoad/moban/202111/moban5872/static/image/btn-bg.jpg);
	background-repeat: no-repeat;
	background-attachment: scroll;
	background-position: center center;
	background-size: cover;
	position: relative;
	z-index: 9;
	color: #ffffff;
	border: 0;
	font-weight: 700;
	text-decoration: none;
	margin-top: 30px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
}
</style>
