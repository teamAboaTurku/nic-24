import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import TimetablePage from '../pages/TimetablePage.vue';
import MapPage from '../pages/MapPage.vue';
import CommitteePage from '../pages/CommitteePage.vue'
import ContactsPage from '../pages/ContactsPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage, name: 'HomePage', meta: { bannerClass: 'home-banner' }},
    { path: '/timetable', component: TimetablePage, name: 'TimetablePage', meta: { bannerClass: 'timetable-banner' }},
    { path: '/map', component: MapPage, name: 'MapPage', meta: { bannerClass: 'map-banner' } },
    { path: '/committee', component: CommitteePage, name: 'CommitteePage', meta: { bannerClass: 'committee-banner'}},
    { path: '/contacts', component: ContactsPage, name: 'ContactsPage', meta: { bannerClass: 'contacts-banner' }},
    // other routes
  ],
});

export default router;
