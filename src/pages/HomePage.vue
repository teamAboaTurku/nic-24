<template>
  <div class="page">
    <CircleContent>
      <template #content1>
        <div class="text_bubble">
          <h2>What is Nic?</h2>
          <p>
            The Nordic iGEM Conference is an annual international synthetic biology conference held in different
            Nordic cities each year. It aims to build networks among professionals in the synthetic biology field.
            Participants can meet colleagues, hear inspiring career stories, and learn about synthetic biology in
            practice. NiC 2024 is an opportunity to boost your career and share insights on how synthetic biology can
            change the world. The event combines intellectual growth with fun, new friendships, and the experience of
            endless summer nights.
          </p>
        </div>
      </template>
      <template #content2>
        <div class="text_bubble">
          <h2>Why join NiC?</h2>
          <p>
            Joining NiC 2024 offers a unique chance to elevate your knowledge, expand your professional network, and
            ignite your passion for impactful discovery in synthetic biology. It's a platform to meet like-minded
            individuals, gain intellectual capital, and have fun while making new friends. The conference is not just
            about learning but also about enjoying the vibrant community and inspiring environment. Secure your place in
            this Nordic synbio hub and be part of the movement towards a better future.
          </p>
        </div>
      </template>
      <template #content3>
        <div class="text_bubble">
          <h2>When and Where is NiC 2024 Held?</h2>
          <p>
            NiC 2024 will be held in Turku, Finland, from Friday 26.7. till 28.7. The event will feature lectures,
            workshops, networking opportunities, and a gala dinner. Participants will also practice their presentation
            skills and receive valuable feedback on their projects. Enjoy the endless summer nights in Finland’s oldest
            city while engaging in a collaborative and innovative environment.
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


<style>
.text_bubble {
  width: 80%
}
</style>