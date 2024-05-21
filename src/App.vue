<template>
  <div>
    <TopNav /> 
    <FlagLine />
    <router-view/>
    <FlagLine />
    <BottomFooter />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import FlagLine from './components/FlagLine.vue'
import BottomFooter from './components/BottomFooter.vue'

export default {
  name: 'App',
  components: {
    TopNav,
    FlagLine,
    BottomFooter
  }
}
</script>
