<script setup lang="ts">
defineOptions({
	name: 'Test',
})

const imgList = {
	logo: 'https://demosc.chinaz.net/Files/DownLoad/moban/202111/moban5872/static/picture/logo-white.jpg',
	cover:
		'https://demosc.chinaz.net/Files/DownLoad/moban/202111/moban5872/static/picture/hero-position-img.jpg',
	btn_icon:
		'	https://demosc.chinaz.net/Files/DownLoad/moban/202111/moban5872/static/picture/arrrow-icon.jpg',
}
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
				<div class="btn-link">
					点击进入
					<img :src="imgList.btn_icon" alt="" />
				</div>
			</div>

			<div style="position: absolute; bottom: 0; right: 0">
				<img
					:src="imgList.cover"
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
	font-size: 34px;
	line-height: 73px;
	height: 73px;
	width: 230px;
	/* padding: 0 15px; */
	background: url(https://demosc.chinaz.net/Files/DownLoad/moban/202111/moban5872/static/image/btn-bg.jpg);
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
}
</style>
