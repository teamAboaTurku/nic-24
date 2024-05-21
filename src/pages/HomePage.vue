<template>
  <div class="page">
    <section style="height: 100px;"></section>
    <CircleContent>
      <template #content1>
        <div>
          <h2>What is Nic?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem eos, aut voluptate eveniet
            molestias ipsa asperiores fuga officia dolor nesciunt. Dolor illo quidem, impedit doloremque sed nostrum?
            Cumque, nesciunt.
          </p>
        </div>
      </template>
      <template #content2>
        <div>
          <h2>When and where?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, minus sit velit vero fugiat quibusdam
            consequuntur natus amet maxime animi nobis delectus eos? Suscipit quidem, amet aperiam inventore quo id?
          </p>
        </div>
      </template>
    </CircleContent>
  </div>
</template>

<script>
import CircleContent from '../components/CircleContent.vue';

export default {
  name: 'HomePage',
  components: {
    CircleContent
  }
};
</script>
