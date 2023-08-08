<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useUserStoreHook } from '@/stores/user'

defineOptions({
	name: 'AboutView',
})

const router = useRouter()
const user = useUserStoreHook()

const handleClick = (id: number) => {
	router.push({ path: '/details', query: { id } })
}
</script>

<template>
	<div style="width: 80%; margin: auto">
		<h2>🎃游戏类型</h2>
		<hr />
		<div style="display: flex; flex-wrap: wrap">
			<div
				class="item"
				v-for="(item, index) in user.list"
				:key="index"
				@click="handleClick(item.id)"
			>
				<img :src="item.logo_img" alt="" />
				<p>{{ item.name }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.item {
	border: 1px solid #eee;
	border-radius: 10px;
	padding: 12px;
	display: flex;
	align-items: center;
	margin: 8px;
	min-width: 200px;
	cursor: pointer;
	transition: 0.4s;

	&:hover {
		transform: scale(1.1);
		transform: translate(0px, -8px);
		border: 1px solid #efe3e3;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.04),
			0px 0px 80px rgba(0, 0, 0, 0.1);
	}

	img {
		border-radius: 50%;
		width: 80px;
		height: 80px;
		margin-right: 8px;
	}
}
</style>
