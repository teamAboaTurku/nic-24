<template>
  <div class="page">
    <h1>Timetable</h1>
    <TimeTable />
  </div>
</template>

<script>
import TimeTable from '../components/TimeTable.vue'

export default {
  name: 'TimetablePage',
  components: {
    TimeTable
  }
};
</script>