import axios from 'axios'

const service = axios.create({
	// baseURL: import.meta.env.VITE_APP_BASE_API,
	baseURL: 'https://mock.apifox.cn/m1/3122670-0-default',
	// baseURL:'/api',
})

// 添加请求拦截器
service.interceptors.request.use(
	config => {
		// 往header头自动添加token

		return config
	},
	error => {
		// 对请求错误做些什么

		// 隐藏顶部加载进度条方法

		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	response => {
		// 隐藏顶部加载进度条方法

		// 对响应数据做点什么
		return response.data
	},
	error => {
		// const msg = error.response.data.msg || '请求失败'

		// // 实现点击刷新方法
		// const handleRefresh = () => location.reload()

		// if (msg == '非法token，请先登录！') {
		// 	// 调用pinia
		// 	useMainStore().logout()

		// 	handleRefresh()

		// 	// store.dispatch("logout").finally(()=>location.reload())
		// }

		// toast(msg, 'error')

		// // 隐藏顶部加载进度条方法
		// hideFullLoading()
		return Promise.reject(error)
	}
)

export default service
