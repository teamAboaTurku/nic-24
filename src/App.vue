<template>
  <div>
    <TopNav />
    <FlagLine />
    <PageBanner :bannerClass="bannerClass" />
    <FlagLine />
    <router-view />
    <FlagLine />
    <BottomFooter />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import TopNav from './components/TopNav.vue'
import FlagLine from './components/FlagLine.vue'
import PageBanner from './components/PageBanner.vue'
import BottomFooter from './components/BottomFooter.vue'

export default {
  name: 'App',
  components: {
    TopNav,
    FlagLine,
    PageBanner,
    BottomFooter
  },
  setup() {
    const route = useRoute();
    const bannerClass = computed(() => route.meta.bannerClass || '');

    return { bannerClass };
  }
}
</script>
