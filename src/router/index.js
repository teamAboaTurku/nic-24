import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import TimetablePage from '../pages/TimetablePage.vue';
import MapPage from '../pages/MapPage.vue';
import ContactsPage from '../pages/ContactsPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/about', component: AboutPage, name: 'AboutPage' },
    { path: '/timetable', component: TimetablePage, name: 'TimetablePage' },
    { path: '/map', component: MapPage, name: 'MapPage' },
    { path: '/contacts', component: ContactsPage, name: 'ContactsPage' },
    // other routes
  ],
});

export default router;
