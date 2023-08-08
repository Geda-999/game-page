import { store } from '@/stores'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { fetchList } from '@/api/index'

interface ListItf {
	id: number
	name: string
	decs: string
	logo_img: string
	hold_img: string[]
	down_url: string
	description: string
	text: string
}

export const useUserStore = defineStore('user', () => {
	const list = ref<ListItf[]>([])

	const comp = computed(() => (id: any) => {
		if (list.value && list.value.length > 0) {
			return list.value.find((v: { id: number }) => v.id == id)
		}
		return null
	})

	const getData = async () => {
		const { data } = await fetchList()
		list.value = data
	}

	return {
		list,
		comp,
		getData,
	}
})

export function useUserStoreHook() {
	return useUserStore(store)
}
