<template>
  <div class="page">
    <h1>Map of important places</h1>
    <div class="reference">
      <p><i class="fas fa-syringe" style="color:var(--red); font-size:24px;"></i> - Conference</p>
      <p><i class="material-icons" style="color:var(--green); font-size:24px;">restaurant</i> - Food</p>
      <p><i class="material-icons" style="color:var(--blue); font-size:24px;">hotel</i> - Hotels</p>
    </div>
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

<style>
.reference p {
  display: flex;
  align-items: center;
  width: 150px;
  margin: auto;
}

.icon {
  vertical-align: middle;
  margin-right: 8px; /* Adjust the spacing between icon and text */
}
</style>