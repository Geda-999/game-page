<script setup lang="ts">
import { useRouter } from 'vue-router'
import settings from '../settings'

const router = useRouter()

defineOptions({
	name: 'HomeView',
})
</script>

<template>
	<div
		class="home"
		:style="{ 'background-image': 'url(' + settings.backgroundImg + ' )' }"
	>
		<div class="home_logo">
			<img :src="settings.app_icon" alt="" />
		</div>
		<div class="home_join">
			<button @click="router.push('/about')">进入</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home {
	position: relative;
	top: 0;
	right: 0;
	bottom: 0;
	/* background: #258058; */
	height: 100vh;
	background-position: center center;
	background-repeat: no-repeat;

	&_logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		img {
			width: 400px;
			height: 400px;
		}
	}

	&_join {
		position: absolute;
		bottom: 100px;
		left: 50%;
		transform: translate(-50%, 0);

		button {
			padding: 8px 30px;
			background: #548e25;
			border: none;
			border-radius: 8px;
			font-size: 20px;
			color: #ddfdd3;
			cursor: pointer;

			&:hover {
				color: #eb8080;
			}
		}
	}
}
</style>
