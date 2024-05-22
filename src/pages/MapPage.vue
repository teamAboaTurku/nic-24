<template>
  <div class="page">
    <h1>Map of important places</h1>
    <MapComponent />
  </div>
</template>

<script>
import MapComponent from '../components/MapComponent'

export default {
  name: 'MapPage',
  components: {
    MapComponent
  }
};
</script>