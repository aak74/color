<template>
  <div class="time">
    {{ time }}
  </div>
</template>

<script>
export default {
  name: 'MyTime',
  props: ['hours', 'minutes', 'seconds'],
  computed: {
    time() {
      return `${this.hours}:${this.minutes}:${this.seconds}`;
    },
  },
};
</script>

<style>
</style>
