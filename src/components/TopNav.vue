<template>
  <div class="topnav">
    <div class="topnavLogo">
      <img :src="require('@/assets/photos/nic_logo.png')" alt="Logo" id="Logo">
    </div>
    <div class="topnavLinks">
      <router-link to="/contacts" class="nav-item" active-class="active">Contact us</router-link>
      <router-link to="/map" class="nav-item" active-class="active">Map</router-link>
      <router-link to="/timetable" class="nav-item" active-class="active">Timetable</router-link>
      <router-link to="/" exact class="nav-item" active-class="active">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>
