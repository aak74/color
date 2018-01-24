<template>
  <div class="which-color" :style="style1">
  </div>
</template>

<script>

export default {
  name: 'WhichColor',
  props: {
    r: [String, Number],
    g: [String, Number],
    b: [String, Number],

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
      return `background-color: rgb(${this.r},${this.g},${this.b});`;
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
