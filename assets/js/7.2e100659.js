(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{431:function(t,e,i){},442:function(t,e,i){"use strict";i(431)},455:function(t,e,i){"use strict";i.r(e);var s=i(8),r=i.n(s),a={data:()=>({isPC:!0,playHistory:!1,isPlaying:!1,musicList:[],currentMusic:{musicId:"",currentTime:0,maxTime:0,duration:0,volume:.1,name:"",artist:"",url:"",cover:"https://p2.music.126.net/3MaeDnsU61e96WlH5-hoaQ==/109951163195183343.jpg",lrc:"",sort:0,brList:[]},linksWrapOffsetWidth:null,linksWrapMaxWidth:null,fixedHeight:0,pageYOffset:44,isFixed:!1,isVisible:!1}),computed:{playlistId(){return this.$themeConfig.NavPlayer.playlistId||""},autoPlay(){return this.$themeConfig.NavPlayer.autoPlay||!1},volumeStep(){return this.$themeConfig.NavPlayer.volumeStep||.1},defaultVolume(){return this.$themeConfig.NavPlayer.defaultVolume||.1},playType(){return this.$themeConfig.NavPlayer.playType||"random"}},watch:{},mounted(){/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?this.isPC=!1:(this.isPC=!0,this.getMusicList(this.playlistId)),this.handleLinksWrapWidth(),window.addEventListener("resize",this.handleLinksWrapWidth,!1),window.addEventListener("scroll",this.throttle(this.handleScroll,500))},beforeDestroy(){window.removeEventListener("scroll",this.throttle(this.handleScroll,1e3))},methods:{handleLinksWrapWidth(){let t=this,e=document.querySelector(".nav-sub")&&document.querySelector(".nav-sub").offsetWidth||1872;document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapOffsetWidth=document.querySelector(".links")&&document.querySelector(".links").offsetWidth||726,(null==t.linksWrapOffsetWidth||t.linksWrapOffsetWidth>e)&&setTimeout(()=>{this.handleLinksWrapWidth()},5e3)},handleScroll(){this.isFixed=window.pageYOffset>this.fixedHeight,this.throttle(this.handleVisible(),1e3)},handleVisible(){this.isVisible=window.pageYOffset<this.pageYOffset&&window.pageYOffset>0,this.pageYOffset=window.pageYOffset},throttle(t,e=200){let i=null,s=Date.now();return function(){const r=Date.now(),a=e-(r-s),n=this,u=arguments;clearTimeout(i),a<=0?(t.apply(n,u),s=Date.now()):i=setTimeout(t,a)}},getMusicList(t="144719593"){let e=this,i=0;r()({baseURL:e.$themeConfig.back.musicUrl,url:"/playlist/detail?id="+t,withCredentials:!0}).then((function(t){if(200===t.status&&200===t.data.code){let s=t.data.playlist.trackIds.filter(t=>t.id).map(t=>t.id).join(",");r()({baseURL:e.$themeConfig.back.musicUrl,url:"/song/detail?ids="+s,withCredentials:!0}).then((function(t){200===t.status&&200===t.data.code&&(e.musicList=t.data.songs.map(e=>{let s=t.data.privileges.filter(t=>t.id==e.id).map(t=>t.chargeInfoList.map(t=>t.rate))[0];return{musicId:e.id,name:e.name||"",artist:e.ar[0].name||"",cover:e.al.picUrl||"",brList:s,sort:i++}}),e.getCurrentMusic("first"))}),(function(t){e.currentMusic.artist=t.response.data.message,e.currentMusic.currentTime=0,console.log(t)}))}}),(function(t){e.currentMusic.artist="歌单获取失败",e.currentMusic.currentTime=0,console.log(t)}))},getCurrentMusic(t="first"){if("random"==this.playType){let t=this.musicList.filter(t=>t.musicId!=this.currentMusic.musicId);this.currentMusic=Object.assign({},this.currentMusic,t[Math.floor(Math.random()*t.length)])}else if("first"===t)this.currentMusic=Object.assign({},this.currentMusic,this.musicList[0]);else{let e="prev"==t?this.currentMusic.sort--:this.currentMusic.sort++;"next"===t&&e>this.musicList.length-1?e=0:"prev"===t&&e<0&&(e=this.musicList.length-1),this.currentMusic=Object.assign({},this.currentMusic,this.musicList[e])}this.getMusic(this.currentMusic.musicId,this.currentMusic.brList[this.currentMusic.brList.length-1],t)},getMusic(t="1868943615",e=128e3,i){let s=this;""!==t&&r()({baseURL:s.$themeConfig.back.musicUrl,url:"/check/music?id="+t+"&br="+e,withCredentials:!0}).then((function(a){200===a.status&&a.data.success&&r()({baseURL:s.$themeConfig.back.musicUrl,url:"/song/url?id="+t+"&br="+e,withCredentials:!0}).then((function(t){200===t.status&&(s.currentMusic.url=t.data.data[0].url.match("^http://")?t.data.data[0].url.replace("http://","https://"):t.data.data[0].url,s.$refs.audio.volume=s.defaultVolume,s.currentMusic.volume=s.$refs.audio.volume,("first"!=i||"first"==i&&s.autoPlay)&&s.playHistory&&setTimeout(()=>{s.$refs.audio.play()},2e3))}),(function(t){console.log(t)}))}),(function(t){s.currentMusic.artist=t.response.data.message,s.currentMusic.url="",s.currentMusic.name="",s.currentMusic.currentTime=0,setTimeout(()=>{s.next()},2e3),console.log(t)}))},onPlay(){return this.isPlaying?this.$refs.audio.pause():this.$refs.audio.play()},play(){this.playHistory=!1,this.isPlaying=!0},pause(){this.playHistory=!0,this.isPlaying=!1},next(t){this.$refs.audio.pause(),this.getCurrentMusic("next")},prev(t){this.$refs.audio.pause(),this.getCurrentMusic("prev")},transTime(t){var e=parseInt(t),i=parseInt(e/60),s=e%60+"";return 0===i?i="00":i<10&&(i="0"+i),1===s.length&&(s="0"+s),i+":"+s},onTimeupdate(t){this.currentMusic.currentTime=this.transTime(this.currentMusic.duration-t.target.currentTime)},onLoadedmetadata(t){this.currentMusic.duration=t.target.duration,this.currentMusic.maxTime=this.transTime(t.target.duration),this.currentMusic.currentTime=this.currentMusic.maxTime},onEnded(t){this.next()},onVolume(t){let e=parseInt(10*this.$refs.audio.volume),i=10*this.volumeStep;this.$refs.audio.volume="jian"===t?e-i<=0?0:(parseInt(10*this.$refs.audio.volume)-i)/10:e+i>=10?1:(parseInt(10*this.$refs.audio.volume)+i)/10,this.currentMusic.volume=this.$refs.audio.volume}}},n=(i(442),i(1)),u=Object(n.a)(a,(function(){var t=this,e=t._self._c;return t.isPC&&null!=t.linksWrapOffsetWidth?e("div",{staticClass:"nav-music",class:{pagefull:(t.$frontmatter.layout||t.$themeConfig.fullscreen&&t.$frontmatter.isFull||t.$frontmatter.home)&&!t.isFixed,fixed:t.isFixed,visible:t.isVisible},style:t.linksWrapOffsetWidth?{right:t.linksWrapOffsetWidth+"px"}:{}},[e("div",{staticClass:"img-box"},[e("img",{staticClass:"avatar",class:{playing:t.isPlaying},attrs:{src:t.currentMusic?t.currentMusic.cover:""}})]),t._v(" "),e("div",{staticClass:"actions"},[e("div",{staticClass:"title"},[0!=t.currentMusic.currentTime?e("div",{staticClass:"time"},[e("span",{staticStyle:{"margin-right":"0.1rem"}},[t._v("\n          "+t._s(0==t.currentMusic.currentTime?"":t.currentMusic.currentTime)+"\n        ")])]):t._e(),t._v(" "),e("div",{staticClass:"title-name"},[e("span",[t._v("\n          "+t._s(t.currentMusic.artist||"")+" "+t._s(t.currentMusic.name?" - ":"")+"  "+t._s(t.currentMusic.name||"")+"  \n        ")])])]),t._v(" "),e("div",{staticClass:"action-bar"},[e("i",{staticClass:"iconfont rays-prev-face",on:{click:t.prev}}),t._v(" "),t.isPlaying?t._e():e("i",{staticClass:"iconfont rays-play",on:{click:t.onPlay}}),t._v(" "),t.isPlaying?e("i",{staticClass:"iconfont rays-pause",on:{click:t.onPlay}}):t._e(),t._v(" "),e("i",{staticClass:"iconfont rays-next-face",on:{click:t.next}}),t._v(" "),t.currentMusic.volume<=0?e("i",{staticClass:"iconfont rays-mute",staticStyle:{"margin-left":"1rem"}}):t._e(),t._v(" "),t.currentMusic.volume>0?e("i",{staticClass:"iconfont rays-volume-reduce",staticStyle:{"margin-left":"1rem"},on:{click:function(e){return t.onVolume("jian")}}}):t._e(),t._v(" "),e("span",{staticClass:"volume"},[t._v(t._s(parseInt(10*t.currentMusic.volume)))]),t._v(" "),e("i",{staticClass:"iconfont rays-volume-add",on:{click:function(e){return t.onVolume("jia")}}})])]),t._v(" "),e("audio",{ref:"audio",attrs:{autoplay:!1,src:t.currentMusic.url,volume:t.currentMusic.volume},on:{play:t.play,pause:t.pause,loadedmetadata:t.onLoadedmetadata,timeupdate:t.onTimeupdate,ended:t.onEnded}})]):t._e()}),[],!1,null,"09770ab8",null);e.default=u.exports}}]);