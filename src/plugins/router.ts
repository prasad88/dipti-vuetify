import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
        },
        {
            path: '/about',
            component: AboutView,
        },
        {
            path: '/services',
            component: ServicesView,
        },
        {
            path: '/blog',
            component: BlogView,
        },
        {
            path: '/contactus',
            component: ContactView,
        }
    
    ]
})
export default router
