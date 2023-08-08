<script setup lang="ts">
import { useRouter } from 'vue-router'
import settings from '../settings'
defineOptions({
	name: 'FHeader',
})

const router = useRouter()
</script>

<template>
	<div class="f-header">
		<img @click="router.push('/')" :src="settings.logo" alt="" class="logo" />
	</div>
</template>

<style lang="scss" scoped>
.f-header {
	width: 100%;
	display: flex;
	align-items: center;
	padding: 20px;
	margin-left: 80px;
}
</style>
