import {
	createRouter,
	createWebHistory,
	createWebHashHistory,
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

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

export default router
