<template>
  <div class="topnav">
    <router-link to="/" exact class="nav-item" active-class="active">Home</router-link>
    <router-link to="/timetable" class="nav-item" active-class="active">Timetable</router-link>
    <router-link to="/map" class="nav-item" active-class="active">Map</router-link>
    <router-link to="/about" class="nav-item" active-class="active">About NiC</router-link>
  </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

