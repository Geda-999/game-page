<script setup lang="ts">
import FHeader from '@/layout/FHeader.vue'
</script>

<template>
	<div>
		<FHeader style="" />

		<router-view v-slot="{ Component }">
			<transition name="fade">
				<component :is="Component"></component>
			</transition>
		</router-view>
	</div>
</template>

<style lang="scss">
.body,
html {
	background: #140e38 !important;
	color: #fff !important;
}

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

/* 滚动条 */
::-webkit-scrollbar {
	width: 4px;
	height: 6px;
}
::-webkit-scrollbar-corner {
	display: block;
}
::-webkit-scrollbar-thumb {
	border-radius: 8px;
	background-color: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
	border-right-color: transparent;
	border-left-color: transparent;
	background-color: rgba(0, 0, 0, 0.1);
}
body {
	margin: 0;
}
</style>
