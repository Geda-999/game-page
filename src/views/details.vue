<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useUserStoreHook } from '@/stores/user'

defineOptions({
	name: 'Details',
})

const route = useRoute()
const user = useUserStoreHook()
const item = ref()

if (route.query) {
	item.value = user.comp(route.query.id)
}

const downloadFile = urls => {
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
			<h2>详情列表</h2>

			<div style="display: flex; align-items: center">
				<img
					:src="item?.logo_img"
					alt=""
					style="border-radius: 8px; width: 80px; height: 80px"
				/>
				<div style="margin-left: 10px">
					<h3>{{ item?.name }}</h3>
					<div>{{ item?.text }}</div>
				</div>
				<div class="button_down" @click="downloadFile(item?.down_url)">
					下载
				</div>
			</div>
		</div>

		<p style="color: #dd7545; font-size: 14px; padding: 10px 0">
			{{ item?.description }}
		</p>

		<section style="margin-top: 20px">
			<div class="item_img">
				<img
					v-for="(items, idx) in item?.hold_img"
					:key="idx"
					:src="items"
					alt=""
					style="margin: 4px 0; width: 100%"
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
