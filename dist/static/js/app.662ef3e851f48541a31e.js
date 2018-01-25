webpackJsonp([1],{AvwK:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=e("7+uW"),n={name:"WhichColor",props:{r:[String,Number],g:[String,Number],b:[String,Number],width:{type:[String,Number],default:80},height:{type:[String,Number],default:40}},computed:{background:function(){return"background-color: rgb("+this.r+","+this.g+","+this.b+");"},size:function(){return"height: "+this.height+"px;width: "+this.width+"px;"},style1:function(){return this.background+";"+this.size+";"}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"which-color",style:this.style1})},staticRenderFns:[]},o=e("VU/8")(n,i,!1,null,null,null).exports,h={name:"WhichColorHsl",props:{h:[String,Number],s:[String,Number],l:[String,Number],a:[String,Number],width:{type:[String,Number],default:80},height:{type:[String,Number],default:40}},computed:{background:function(){return"background-color: hsla("+this.h+","+this.s+"%,"+this.l+"%,"+this.a+");"},size:function(){return"height: "+this.height+"px;width: "+this.width+"px;"},style1:function(){return this.background+";"+this.size+";"}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"which-color-hsl",style:this.style1})},staticRenderFns:[]},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"time"},[this._v("\n  "+this._s(this.time)+"\n")])},staticRenderFns:[]};var a={name:"App",components:{WhichColor:o,WhichColorHsl:e("VU/8")(h,u,!1,null,null,null).exports,MyTime:e("VU/8")({name:"MyTime",props:["hours","minutes","seconds"],computed:{time:function(){return this.hours+":"+this.minutes+":"+this.seconds}}},c,!1,function(t){e("vzgC")},null,null).exports},data:function(){return{dt:{hours:0,minutes:0,seconds:0},color:{h:0,s:0,l:100,a:0}}},computed:{now:function(){return this.dt},hours:function(){return this.to255(this.dt.hours,23)},minutes:function(){return this.to255(this.dt.minutes,59)},seconds:function(){return this.to255(this.dt.seconds,59)},h:function(){return this.hue2(this.dt.hours,this.dt.minutes)},s:function(){return 100},l:function(){return 50},a:function(){return(120-this.dt.seconds)/60}},created:function(){this.updateTime()},methods:{hue:function(t){var s=315-Math.floor(t/23*359);return s>0?s:s+360},hue2:function(t,s){var e=315-Math.floor((60*t+s)/1440*359);return e>0?e:e+360},to255:function(t,s){return Math.floor(parseInt(t,10)/s*255)},updateTime:function(){var t=new Date;this.dt={hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()},setTimeout(this.updateTime,1e3)},created:function(){}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("Which color is now?")]),t._v(" "),e("div",{staticClass:"app"},[e("div",{staticClass:"whole-day"},t._l(23,function(s){return e("div",{key:s,staticClass:"one-hour"},[e("my-time",{attrs:{hours:s,minutes:"0",seconds:"0"}}),t._v(" "),e("which-color-hsl",{attrs:{h:t.hue(s),s:"100",l:"60",a:"0.8"}}),t._v(" "),e("which-color-hsl",{attrs:{h:t.hue2(s,0),s:"100",l:"60",a:"0.8"}}),t._v(" "),e("which-color",{attrs:{r:t.to255(1,12),g:t.to255(1,31),b:t.to255(s,23)}}),t._v(" "),e("which-color",{attrs:{r:t.to255(1,12),g:t.to255(10,31),b:t.to255(s,23)}}),t._v(" "),e("which-color",{attrs:{r:t.to255(1,12),g:t.to255(25,31),b:t.to255(s,23)}}),t._v(" "),e("which-color",{attrs:{r:t.to255(1,12),g:t.to255(31,31),b:t.to255(s,23)}})],1)})),t._v(" "),e("div",{staticClass:"whole-day"},t._l(23,function(s){return e("div",{key:s,staticClass:"one-hour"},[e("my-time",{attrs:{hours:s,minutes:"0",seconds:"0"}}),t._v(" "),e("which-color",{attrs:{r:t.to255(5,31),g:t.to255(s,23),b:"0"}})],1)})),t._v(" "),e("div",{staticClass:"just-now"},[e("my-time",{attrs:{hours:t.now.hours,minutes:t.now.minutes,seconds:t.now.seconds}}),t._v(" "),e("my-time",{attrs:{hours:t.hours,minutes:t.minutes,seconds:t.seconds}}),t._v(" "),e("div",{staticClass:"clean"},[e("which-color",{attrs:{r:t.hours,g:"0",b:"0"}}),t._v(" "),e("which-color",{attrs:{r:"0",g:t.minutes,b:"0"}}),t._v(" "),e("which-color",{attrs:{r:"0",g:"0",b:t.seconds}})],1),t._v(" "),e("div",{staticClass:"clean"},[e("which-color",{attrs:{r:t.hours,g:t.minutes,b:"0"}}),t._v(" "),e("which-color",{attrs:{r:t.hours,g:t.minutes,b:t.seconds,width:"160"}})],1),t._v(" "),e("div",{staticClass:"clean"},[e("which-color-hsl",{attrs:{h:t.h,s:t.s,l:t.l,a:t.a,width:"240"}}),t._v(" "),e("which-color-hsl",{attrs:{h:t.h,s:t.s,l:"100",a:"0.5",width:"240"}})],1)],1)])])},staticRenderFns:[]};var d=e("VU/8")(a,l,!1,function(t){e("AvwK")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:d},template:"<App/>"})},vzgC:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.662ef3e851f48541a31e.js.map