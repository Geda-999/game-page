<script setup lang="ts">
import { useRouter } from 'vue-router'

import list from './list'

defineOptions({
	name: 'AboutView',
})

const router = useRouter()

interface ListItf {
	name: string
	decs: string
	logo: string
	hold_img: string[]
	down_url: string
}

const handleClick = (item: ListItf, index: number) => {
	router.push({ path: '/details', query: { data: JSON.stringify(item) } })
}
</script>

<template>
	<div style="width: 80%; margin: auto">
		<div style="height: 100px"></div>
		<h2>名称</h2>
		<hr />
		<div style="display: flex; flex-wrap: wrap">
			<div
				class="item"
				v-for="(item, index) in list"
				:key="index"
				@click="handleClick(item, index)"
			>
				<img :src="item.logo" alt="" />
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

	&:hover {
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
