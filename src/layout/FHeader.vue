<script setup lang="ts">
import { useRouter } from 'vue-router'
import settings from '../settings'
defineOptions({
	name: 'FHeader',
})

const router = useRouter()
</script>

<template>
	<div>
		<div class="a"></div>
		<div class="f-header">
			<div @click="router.push('/')" class="f-header__title">
				<img :src="settings.logo" alt="" class="f-header__title-icon" />
				<h1>{{ settings.title }}</h1>
			</div>

			<div>
				<!-- <router-link to="/">首页</router-link>
				<router-link to="/about" style="margin-left: 8px">关于</router-link> -->
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.a {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	height: 82px;
	background: rgb(198 99 70 / 13%);
}
.f-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 50%;
	z-index: 100;
	width: 80%;
	transform: translate(-50%, 0);

	&__title {
		display: flex;
		align-items: center;
		cursor: pointer;

		&-icon {
			border-radius: 10px;
			/* width: 80px; */
			height: 80px;
			margin-right: 10px;
		}
		h1 {
			color: #303030;
		}
	}
}
</style>
