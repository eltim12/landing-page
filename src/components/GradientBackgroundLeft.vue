<template>
  <div class="gradient-wrapper">
    <div class="gradient"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.gradient-wrapper {
  position: absolute;
  left: -500px;
  top: 100px;
}
@keyframes rotate {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.gradient {
  --size: 1000px;
  --speed: 10s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 10));
  background-image: linear-gradient(#9f60ff, #14053b);
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 0;
}
</style>
