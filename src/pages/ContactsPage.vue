<template>
  <div class="page">
    <h1>Contact us</h1>
    <ContactsBox />
  </div>
</template>

<script>
import ContactsBox from '../components/ContactsBox.vue'

export default {
  name: 'ContactsPage',
  components: {
    ContactsBox
  }
};
</script>