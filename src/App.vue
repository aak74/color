<template>
<div id="app">
  <h1>Which color is now?</h1>
  <div class="app">
    <div class="whole-day">
      <div class="one-hour" v-for="hour in 23" :key="hour">
        <my-time :hours="hour" minutes="0" seconds="0" />
        <which-color-hsl :h="hue(hour)" s="100" l="60" a="0.8" />
        <which-color-hsl :h="hue2(hour, 0)" s="100" l="60" a="0.8" />
        <which-color :r="to255(1, 12)" :g="to255(1, 31)" :b="to255(hour, 23)" />
        <which-color :r="to255(1, 12)" :g="to255(10, 31)" :b="to255(hour, 23)" />
        <which-color :r="to255(1, 12)" :g="to255(25, 31)" :b="to255(hour, 23)" />
        <which-color :r="to255(1, 12)" :g="to255(31, 31)" :b="to255(hour, 23)" />
      </div>
    </div>
    <div class="whole-day">
      <div class="one-hour" v-for="hour in 23" :key="hour">
        <my-time :hours="hour" minutes="0" seconds="0" />
        <which-color :r="to255(5, 31)" :g="to255(hour, 23)" b="0" />
      </div>
    </div>
    <div class="just-now">
      <my-time :hours="now.hours" :minutes="now.minutes" :seconds="now.seconds" />
      <my-time :hours="hours" :minutes="minutes" :seconds="seconds" />
      <div class="clean">
        <which-color :r="hours" g="0" b="0" />
        <which-color r="0" :g="minutes" b="0" />
        <which-color r="0" g="0" :b="seconds" />
      </div>
      <div class="clean">
        <which-color :r="hours" :g="minutes" b="0" />
        <which-color :r="hours" :g="minutes" :b="seconds" width="160" />
      </div>
      <div class="clean">
        <which-color-hsl :h="h" :s="s" :l="l" :a="a" width="240" />
        <which-color-hsl :h="h" :s="s" l="100" a="0.5" width="240" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import WhichColor from './components/WhichColor';
import WhichColorHsl from './components/WhichColorHsl';
import MyTime from './components/Time';


export default {
  name: 'App',
  components: {
    WhichColor,
    WhichColorHsl,
    MyTime,
  },
  data() {
    return {
      dt: {
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      color: {
        h: 0,
        s: 0,
        l: 100,
        a: 0
      }
    }
  },
  computed: {
    now() {
      return this.dt;
    },
    hours() {
      return this.to255(this.dt.hours, 23);
    },
    minutes() {
      return this.to255(this.dt.minutes, 59);
    },
    seconds() {
      return this.to255(this.dt.seconds, 59);
    },
    h() {
      return this.hue2(this.dt.hours, this.dt.minutes)
    },
    s() {
      return 100
    },
    l() {
      return 50;
    },
    a() {
      return (120 - this.dt.seconds) / 60
    },
  },
  created() {
    this.updateTime()
  },
  methods: {
    hue(hour) {
      const hue = 315 - Math.floor(hour / 23 * 359)
      return (hue > 0)
        ? hue
        : hue + 360
    },
    hue2(hour, minute) {
      const hue = 315 - Math.floor((hour * 60 + minute) / 1440 * 359)
      return (hue > 0)
        ? hue
        : hue + 360
    },
    to255(number, max) {
      return Math.floor(parseInt(number, 10) / max * 255)
    },
    updateTime() {
      const self = this;
      const dt = new Date
      self.dt = {
        hours: dt.getHours(),
        minutes: dt.getMinutes(),
        seconds: dt.getSeconds()
      }
      setTimeout(self.updateTime, 1000);
    },
    created() {
      // this.
    }
  }
};
</script>

<style>
.app,
.whole-day .one-hour,
.clean {
  display: flex;
}

.time {
  width: 60px;
}
</style>
