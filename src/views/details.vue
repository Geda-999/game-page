<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useUserStoreHook } from '@/stores/user'
import { imgUrl } from '@/utils'

defineOptions({
	name: 'Details',
})

const route = useRoute()
const user = useUserStoreHook()
const item = ref()

if (route.query) {
	item.value = user.comp(route.query.id)
}

console.log(item.value, 11)

const downloadFile = (urls: string) => {
	window.open(urls)
}
</script>

<template>
	<div style="width: 80%; margin: auto">
		<template v-if="item == undefined">
			<div>空空如也~~</div>
		</template>

		<template v-else>
			<div>
				<h2>🎊详情列表</h2>

				<div style="display: flex; align-items: center">
					<img
						:src="imgUrl(item?.logo_img)"
						alt=""
						style="border-radius: 8px; width: 80px; height: 80px"
					/>
					<div style="margin-left: 10px">
						<h3>{{ item?.name }}</h3>
						<div>{{ item?.text }}</div>
					</div>
					<div class="btn-link" @click="downloadFile(item?.down_url)">
						点击下载
						<img src="../assets/arrrow-icon.jpg" alt="" />
					</div>
				</div>
			</div>

			<p
				style="color: #c27bf2; font-size: 14px; padding: 10px 0"
				v-if="item?.description"
			>
				{{ item?.description }}
			</p>

			<div class="item_img" style="margin-top: 20px">
				<img
					v-for="(items, idx) in item?.hold_img"
					:key="idx"
					:src="imgUrl(items)"
					alt=""
					style="margin: 4px 0; width: 100%"
				/>
			</div>
		</template>

		<div style="height: 100px"></div>
	</div>
</template>

<style lang="scss" scoped>
.item_img {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.btn-link {
	font-size: 16px;
	width: 157px;
	height: 50px;
	line-height: 50px;
	// padding: 0 15px;
	// background: url(https://demosc.chinaz.net/Files/DownLoad/moban/202111/moban5872/static/image/btn-bg.jpg);
	background: url(../assets/btn-bg.jpg);
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
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	cursor: pointer;
	text-indent: 16px;

	&:hover {
		font-size: 17px;
		color: rgba(250, 149, 149, 0.874);
		box-shadow: 0px 22px 50px rgba(160, 65, 65, 0.57);
	}
}
</style>
