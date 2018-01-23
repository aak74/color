<template>
  <div class="which-color" :style="style1">
  </div>
</template>

<script>
const pad = (num, size) => {
  let s = `${num}`;
  while (s.length < size) s = `0${s}`;
  return s;
}

export default {
  name: 'WhichColor',
  props: ['r', 'g', 'b', 'width', 'height'],
  computed: {
    style1() {
      return `background-color: rgb(${this.r},${this.g},${this.b})`;
    },
  },
};
</script>

<style>
.which-color {
  height: 100px;
  width: 100px;
}

</style>
