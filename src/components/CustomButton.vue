<template>
  <div class="custom-button rounded-pill d-flex align-center justify-center px-6 py-2"
    :class="{ 'large': large, 'dark': isDark }">
    {{ text }}
  </div>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  isDark: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss">
@import '@/styles/mixins.scss';
.custom-button {
  background: none;
  border: 1px white solid;
  color: white;
  cursor: pointer;
  transition: transform 0.6s ease, background-color 0.6s ease;
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  z-index: 100;

  @include respond-to(xs) {
    font-size: 14px;
  }

  @include respond-to(md) {
    font-size: 14px;
  }

  @include respond-to(xl) {
    font-size: 18px;
  }

  &.dark {
    background: #0b0b0c;
    border: 1px #0b0b0c solid;
    color: white;
  }

  &.large {
    padding: 40px 0;
  }

  &:hover {
    background-color: white;
    color: black;
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
