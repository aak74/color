<template>
  <div class="which-color-hsl" :style="style1">
  </div>
</template>

<script>

export default {
  name: 'WhichColorHsl',
  props: {
    h: [String, Number],
    s: [String, Number],
    l: [String, Number],
    a: [String, Number],

    width: {
      type: [String, Number],
      default: 80
    },
    height: {
      type: [String, Number],
      default: 40
    }

  },
  computed: {
    background() {
      return `background-color: hsla(${this.h},${this.s}%,${this.l}%,${this.a});`;
    },
    size() {
      return `height: ${this.height}px;width: ${this.width}px;`;
    },
    style1() {
      return `${this.background};${this.size};`;
    },
  },
};
</script>
