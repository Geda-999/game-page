interface ListItf {
	name: string
	decs: string
	logo: string
	hold_img: string[]
	down_url: string
}

const list: Array<ListItf> = [
	{
		name: '1名称',
		decs: '描述1',
		logo: 'https://dummyimage.com/100x100',
		hold_img: [
			'https://dummyimage.com/1000x500',
			'https://dummyimage.com/1000x500',
			'https://dummyimage.com/1000x500',
		],
		down_url: 'http://alita.ashun01.eu.org/picgo/2022/ashun-10.png',
	},
	{
		name: '2名称',
		decs: '描述2',
		logo: 'https://dummyimage.com/100x100',
		hold_img: [
			'https://dummyimage.com/1000x500',
			'https://dummyimage.com/1000x500',
			'https://dummyimage.com/1000x500',
		],
		down_url: 'http://alita.ashun01.eu.org/picgo/2022/ashun-10.png',
	},
	{
		name: '3名称',
		decs: '描述3',
		logo: 'https://dummyimage.com/100x100',
		hold_img: [
			'https://dummyimage.com/1000x500',
			'https://dummyimage.com/1000x500',
			'https://dummyimage.com/1000x500',
		],
		down_url: 'http://alita.ashun01.eu.org/picgo/2022/ashun-10.png',
	},
]

export default list
