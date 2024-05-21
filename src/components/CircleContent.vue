<template>
  <div>
    <div class="circle-wrapper">
      <div class="circle-container">
        <div class="circle">
          <slot name="content1"></slot>
        </div>
      </div>
    </div>
    <div class="circle-wrapper">
      <div class="circle-container">
        <div class="circle">
          <slot name="content2"></slot>
        </div>
      </div>
    </div>
    <div class="circle-wrapper">
      <div class="circle-container">
        <div class="circle">
          <slot name="content3"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircleContent'
};
</script>

<style>
.circle-wrapper {
  width: 50%;
  min-width: 350px;
  max-width: 600px;
  position: relative;
}

/* Alternate positioning for left and right */
.circle-wrapper:nth-child(odd) {
  margin-right: 0;
  margin-left: auto;
}

.circle-wrapper:nth-child(even) {
  margin-right: auto;
  margin-left: 0;
}

.circle-container {
  width: 100%;
  padding-top: 100%;
  /* Maintain aspect ratio of 1:1 */
  position: relative;
}

.circle {
  --d: 4deg;
  /* distance between dashes */
  --n: 30;
  /* number of dashes */
  --c: rgba(255, 255, 255, 0.5);
  /* White with 50% opacity */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  border: 5px solid transparent;
  /* Control the thickness of border */
  background: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3Ccircle%20cx='50'%20cy='50'%20r='45'%20fill='none'%20stroke='white'%20stroke-width='1.5'%20stroke-dasharray='2%204'%20stroke-linecap='round'%20opacity='0.5'/%3E%3C/svg%3E") no-repeat center center;
  background-size: cover;
  overflow: hidden;
  /* Ensure content doesn't overflow the circle */
}

.circle>* {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 500px) {
  .circle-wrapper, .circle-wrapper:nth-child(even), .circle-wrapper:nth-child(odd) {
    margin: auto;
  }
}

</style>