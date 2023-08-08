import {
	createRouter,
	createWebHistory,
	createWebHashHistory,
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import settings from '@/settings'
import { useUserStoreHook } from '@/stores/user'

const user = useUserStoreHook()

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/details',
			name: 'details',
			component: () => import('../views/details.vue'),
		},
	],
})

let hasGetInfo = false

router.beforeEach(async (to, from, next) => {
	document.title = settings.title || '游戏页面'

	if (!hasGetInfo && to.name !== 'home') {
		await user.getData()
		hasGetInfo = true
	}
	next()
})

export default router
