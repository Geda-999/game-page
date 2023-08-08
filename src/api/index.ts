import request from '@/utils/request'

interface ReqItf {
	code: number
	msg: string
	data: any
}

type QueType = {
	id: number | string
}

export function fetchList(query?: QueType) {
	return request<any>({
		url: '/list',
		method: 'get',
		params: query,
	})
}
