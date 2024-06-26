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
    <div class="circle-wrapper">
      <div class="circle-container">
        <div class="circle">
          <slot name="content4"></slot>
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
  min-width: 300px;
  max-width: 600px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Alternate positioning for left and right */
.circle-wrapper:nth-child(odd) {
  margin-right: 10px;
  margin-left: auto;
}

.circle-wrapper:nth-child(even) {
  margin-right: auto;
  margin-left: 10px;
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
  background: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3Ccircle%20cx='50'%20cy='50'%20r='45'%20fill='none'%20stroke='%23969f98'%20stroke-width='1.5'%20stroke-dasharray='2%204'%20stroke-linecap='round'%20opacity='0.2'/%3E%3C/svg%3E") no-repeat center center;
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

@media only screen and (max-width: 767px) {

  .circle-wrapper,
  .circle-wrapper:nth-child(even),
  .circle-wrapper:nth-child(odd) {
    width: 100%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }
}

@media only screen and (min-width: 768px) {
  .circle-wrapper,
  .circle-wrapper:nth-child(even),
  .circle-wrapper:nth-child(odd) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}

</style>