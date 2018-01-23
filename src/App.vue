<template>
  <div id="app">
    <h1>Which color is it?</h1>

    <my-time :hours="hours" :minutes="minutes" :seconds="seconds" />
    <which-color :r="hours" :g="minutes" :b="seconds"/>
    <which-color :r="hours" :g="seconds" :b="minutes"/>
    <which-color :r="seconds" :g="seconds" :b="minutes" />
  </div>
</template>

<script>
import WhichColor from './components/WhichColor';
import MyTime from './components/Time';

const to255 = (number) => {
  return Math.floor(parseInt(number) * 2.55)
}

export default {
  name: 'App',
  components: {
    WhichColor,
    MyTime,
  },
  data () {
    return {
      dt: '123456'
      // r: 'f',
      // r: this.r1,
      // g: this.g1,
      // b: this.b1,
    }
  },
  computed: {
    date () {
      return this.dt ? this.dt : '123456';
      // const now = Date.now();
      // return now.toString().slice(-6);
    },
    hours() {
      return to255(this.date.slice(0, 2));
      // return this.date.getHours();
    },
    minutes() {
      return to255(this.date.slice(2, 4));
      // return this.date.getMinutes();
    },
    seconds() {
      // const dt = new Date();
      return to255(this.date.slice(-2));
      // return Date.now();
      // return Date.getSeconds();
    },
  },
  created () {
    this.dt = Date.now().toString().slice(-6);
    this.updateTime()
  },
  // ready () {
  //   // setTimeout(self.updateDateTime, 1000);
  //   // this.dt = Date.now().toString().slice(-6);
  //   // // return;
  //   // const this1 = this;
  //   // this.interval = setInterval(() => {
  //   //   this1.dt = Date.now().toString().slice(-6);
  //   //   // this1.dt = new Date();
  //   // }, 1000);
  //   this.updateTime()
  // },
  // beforeDestroy () {
  //   clearInterval(this.interval)
  // },
  methods: {
    updateTime () {
      var self = this;
      self.dt = Date.now().toString().slice(-6);
      // console.log('self.dt', self.dt);
      setTimeout(self.updateTime, 1000);
    }
  }
};
</script>

<style>
</style>
