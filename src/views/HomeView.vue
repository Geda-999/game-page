<script setup lang="ts">
import { useRouter } from 'vue-router'

defineOptions({
	name: 'Home',
})

const router = useRouter()
</script>

<template>
	<div style="height: 70vh; position: relative">
		<div style="">
			<div
				style="
					position: relative;
					z-index: 100;
					padding: 0 20px;
					margin-left: 80px;
				"
			>
				<h1>BEST GAME PLAYING TODAY.</h1>
				<small>Simply text of the printing and typesetting industry.</small>
				<div class="btn-link" @click="router.push('/about')">
					点击进入
					<img src="../assets/arrrow-icon.jpg" alt="" />
				</div>
			</div>

			<div style="position: absolute; bottom: 0; right: 0">
				<img
					src="../assets/hero-position-img.jpg"
					alt=""
					style="width: 600px; padding: 0 30px"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.logo {
	cursor: pointer;
}
h1 {
	margin-bottom: 41px;
	font-family: 'Metal Mania', cursive;
	text-shadow: 3px 3px 0px #b154f0;
	font-size: 94px;
	line-height: 90px;
	width: 50%;
}
small {
	font-size: 25px;
	font-weight: 600;
	margin-bottom: 47px;
}
.btn-link {
	font-size: 32px;
	line-height: 73px;
	height: 73px;
	width: 230px;
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
	margin-top: 30px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
	justify-content: space-evenly;
	text-indent: 16px;

	&:hover {
		font-size: 30px;
		color: rgba(216, 229, 255, 0.874);
		box-shadow: 2.4px 2.6px 10px rgba(99, 152, 203, 0.255),
			19px 21px 80px rgba(41, 89, 161, 0.51);
	}
}
</style>
