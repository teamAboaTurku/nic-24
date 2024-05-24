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
          <h2>When and Where is<br>NiC 2024 Held?</h2>
          <p>
            NiC 2024 will be held in Turku, Finland, from Friday 26.7. till 28.7. The event will feature lectures,
            workshops, networking opportunities, and a gala dinner. Participants will also practice their presentation
            skills and receive valuable feedback on their projects. Enjoy the endless summer nights in Finland’s oldest
            city while engaging in a collaborative and innovative environment.
          </p>
        </div>
      </template>
      <template #content4>
        <div class="text_bubble">
          <h2>NiC 2024 values:</h2>
          <p>
            <b>collaboration</b> – encouraging the sharing of ideas, resources, and expertise to collectively advance
            synthetic
            biology research and innovation in the Nordic and Baltic countries.
            <br><br>
            <b>innovation</b> – inspiring teams to explore novel approaches, technologies, and applications within the
            field of
            synthetic biology, while promoting responsible and ethical practices.
            <br><br>
            <b>community</b> – bringing together people from Nordic and Baltic countries, united by synthetic biology
            and the
            aim to make our world a better place together.
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
  width: 80%;
}

.text_bubble h2 {
  margin-top: 0px;
}

.text_bubble p {
  text-align: justify;
  text-align-last: center;
}

@media only screen and (max-width: 1023px) {
  .text_bubble {
    width: 90%;
  }

  .text_bubble h2 {
    margin-bottom: 0px;
  }

  .text_bubble p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px
  }
}
</style>