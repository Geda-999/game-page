import { ref, unref } from 'vue'

type ImgType = (name: string, hos?: string) => string

const imgUrl: ImgType = name => {
	const url = ref(`/assets/image/${name}`)
	return unref(url)
}

export { imgUrl }
