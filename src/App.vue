<template>
  <div id="app">
    <h1>Which color is now?</h1>

    <my-time :hours="now.hours" :minutes="now.minutes" :seconds="now.seconds" />
    <my-time :hours="hours" :minutes="minutes" :seconds="seconds" />
    <div class="clean">
      <which-color :r="hours" g="0" b="0"/>
      <which-color r="0" :g="minutes" b="0"/>
      <which-color r="0" g="0" :b="seconds"/>
    </div>
    <div class="clean">
      <which-color :r="hours" :g="minutes" b="0"/>
      <which-color :r="hours" :g="minutes" :b="seconds" width="160"/>
    </div>
  </div>
</template>

<script>
import WhichColor from './components/WhichColor';
import MyTime from './components/Time';

const to255 = (number, max) => Math.floor(parseInt(number, 10) / max * 255)

export default {
  name: 'App',
  components: {
    WhichColor,
    MyTime,
  },
  data () {
    return {
      dt: {
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  },
  computed: {
    now() {
      return this.dt;
    },
    hours() {
      return to255(this.dt.hours, 23);
    },
    minutes() {
      return to255(this.dt.minutes, 59);
    },
    seconds() {
      return to255(this.dt.seconds, 59);
    },
  },
  created () {
    this.updateTime()
  },
  methods: {
    updateTime () {
      const self = this;
      const dt = new Date
      self.dt = {
        hours: dt.getHours(),
        minutes: dt.getMinutes(),
        seconds: dt.getSeconds()
      }
      setTimeout(self.updateTime, 1000);
    }
  }
};
</script>

<style>
.clean {
  display: flex;
}
</style>
