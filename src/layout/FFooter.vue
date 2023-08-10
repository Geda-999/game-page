<script setup lang="ts">
import { useRouter } from 'vue-router'
import settings from '@/settings'
defineOptions({
	name: 'FFooter',
})
const router = useRouter()
</script>

<template>
	<div class="f-footer">
		Copyright © 2019-2023 &nbsp;
		<span
			style="font-weight: bold; cursor: pointer"
			@click="router.push('/')"
			>{{ settings.title }}</span
		>
	</div>
</template>

<style lang="scss" scoped>
.f-footer {
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 2px solid #96969649;
	padding: 20px;
	width: 100%;
	box-sizing: border-box;
	font-size: 13px;
}
</style>
