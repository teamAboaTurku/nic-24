<template>
  <div>
    <section style="height: 100px;"></section>
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
  </div>
</template>

<script>
export default {
  name: 'CircleContent'
};
</script>

<style>
/* Include the refined styles here */
</style>
