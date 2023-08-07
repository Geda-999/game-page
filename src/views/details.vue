<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'

defineOptions({
	name: 'Details',
})

const route = useRoute()
const item = ref<any>()

if (route.query) {
	item.value = JSON.parse(route.query.data as any)
}

const downloadFile = (urls: string) => {
	const u = urls.split('/')

	// const data = '这是要下载的文件内容'
	const data = urls
	const fileName = u[u.length - 1]

	const blob = new Blob([data], { type: 'text/plain' })
	const url = URL.createObjectURL(blob)

	const link = document.createElement('a')
	link.href = url
	link.download = fileName
	link.click()

	URL.revokeObjectURL(url)
}
</script>

<template>
	<div style="width: 80%; margin: auto">
		<div style="height: 100px"></div>
		<div>
			<h1>名称</h1>

			<div style="display: flex; align-items: center">
				<img
					src="https://dummyimage.com/100x100"
					alt=""
					style="border-radius: 8px"
				/>
				<div style="margin-left: 10px">
					<h3>{{ item.name }}</h3>
					<div>{{ item.decs }}</div>
				</div>
				<div class="button_down" @click="downloadFile(item.down_url)">下载</div>
			</div>
		</div>

		<section style="margin-top: 20px">
			<div class="item_img">
				<img
					v-for="(items, idx) in item.hold_img"
					:key="idx"
					:src="items"
					alt=""
					style="margin: 4px 0"
				/>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.button_down {
	padding: 6px 20px;
	background: #000;
	border-radius: 10px;
	margin-left: auto;
	color: #fff;
	cursor: pointer;
}

.item_img {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
