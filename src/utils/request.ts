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
		
		const err = error.response.data.apifoxError
		if (err.code !== 200) {
			alert('报错啦！' + err.message)
		}

		return Promise.reject(error)
	}
)

export default service
