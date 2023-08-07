<script setup lang="ts">
import FHeader from './FHeader.vue'
// import { RouterView } from 'vue-router'
defineOptions({
	name: 'Layout',
})
</script>

<template>
	<div>
		<FHeader />

		<router-view v-slot="{ Component }">
			<transition name="fade">
				<keep-alive :max="10">
					<component :is="Component"></component>
				</keep-alive>
			</transition>
		</router-view>
	</div>
</template>

<style lang="scss" scoped>
// 进入之前
.fade-enter-from {
	opacity: 0;
}
// 进入之后
.fade-enter-to {
	opacity: 1;
}
// 离开之前的动画
.fade-leave-from {
	opacity: 1;
}
// 离开之后的动画
.fade-leave-to {
	opacity: 0;
}

// 过渡动画的时长
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s;
}
// 进入过渡动画的时候，就延迟0.3秒
.fade-enter-active {
	transition-delay: 0.3s;
}
</style>
