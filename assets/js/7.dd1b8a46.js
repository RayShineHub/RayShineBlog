(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{437:function(t,s,i){},448:function(t,s,i){"use strict";i(437)},461:function(t,s,i){"use strict";i.r(s);var e=i(8),r=i.n(e);const a=function(t,s=200){let i=null;return function(){let e=this,r=arguments;i&&clearTimeout(i),i=setTimeout(()=>{t.apply(e,r)},s)}};var n={components:{DropdownTransition:i(43).a},data(){return{open:!1,scollbar:!1,time:0,loading:!0,isPC:!0,search:{isRuning:!1,placeholder:"搜索",resultList:[]},focused:!1,playHistory:!1,isPlaying:!1,playType:this.defaultPlayType,musicList:[],currentMusic:{playListId:"144719593",musicId:"",currentTime:0,maxTime:0,duration:0,volume:.3,name:"",artist:"",url:"",cover:"https://p2.music.126.net/3MaeDnsU61e96WlH5-hoaQ==/109951163195183343.jpg",timestemp:0,lrc:"",lrcList:[],sort:0,brList:[]},lineNo:1,isArrow:!0,linksWrapOffsetWidth:null,linksWrapMaxWidth:null,fixedHeight:0,pageYOffset:44,isFixed:!1,isVisible:!1,isListRefresh:!1,searchFlag:!1}},computed:{playlistId(){return this.$themeConfig.NavPlayer.playlistId||""},catgList(){return this.$themeConfig.NavPlayer.catgList||[]},autoPlay(){return this.$themeConfig.NavPlayer.autoPlay||!1},volumeStep(){return this.$themeConfig.NavPlayer.volumeStep||.1},defaultVolume(){return this.$themeConfig.NavPlayer.defaultVolume||.3},defaultPlayType(){return this.$themeConfig.NavPlayer.playType||"playloop"},songsList(){return this.searchFlag?this.search.resultList:this.musicList}},watch:{},mounted(){this.keyDown(),/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?this.isPC=!1:(this.playType=this.defaultPlayType,this.isPC=!0,this.getMusicList("first",this.playlistId)),this.handleLinksWrapWidth(),window.addEventListener("resize",this.handleLinksWrapWidth,!1),window.addEventListener("scroll",this.throttle(this.handleScroll,500))},beforeDestroy(){window.removeEventListener("scroll",this.throttle(this.handleScroll,1e3))},methods:{keyDown(){let t=this;document.onkeyup=function(s){var i=s||window.event,e=i.keyCode||i.which;if(t.open){switch(i.returnValue=!1,e){case 32:t.focused||t.onPlay();break;case 27:t.immerse();break;case 37:i.ctrlKey&&t.prev();break;case 39:i.ctrlKey&&t.next();break;case 38:t.onVolume("jia");break;case 40:t.onVolume("jian")}i&&i.preventDefault&&i.preventDefault()}}},handleLinksWrapWidth(){let t=this,s=document.querySelector(".nav-sub")&&document.querySelector(".nav-sub").offsetWidth||1872;document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapOffsetWidth=document.querySelector(".links")&&document.querySelector(".links").offsetWidth||726,(null==t.linksWrapOffsetWidth||t.linksWrapOffsetWidth>s)&&setTimeout(()=>{this.handleLinksWrapWidth()},5e3)},handleScroll(){this.isFixed=window.pageYOffset>this.fixedHeight,this.throttle(this.handleVisible(),1e3)},handleVisible(){this.isVisible=window.pageYOffset<this.pageYOffset&&window.pageYOffset>0,this.pageYOffset=window.pageYOffset},throttle(t,s=200){let i=null,e=Date.now();return function(){const r=Date.now(),a=s-(r-e),n=arguments,c=this;clearTimeout(i),a<=0?(t.apply(c,n),e=Date.now()):i=setTimeout(t,a)}},playTypeHandle(){switch(this.playType){case"playsingle":this.playType="playloop";break;case"playloop":this.playType="playorder";break;case"playorder":this.playType="playrandom";break;default:this.playType="playsingle"}},getMusicList(t="first",s="144719593"){let i=this,e=0;i.searchFlag=!1,i.search.query="",i.isListRefresh=!0,"refresh"==t&&(s=i.currentMusic.playListId),r()({baseURL:i.$themeConfig.back.musicUrl,url:"/playlist/detail?id="+s,withCredentials:!0}).then((function(a){if(200===a.status&&200===a.data.code){let n=a.data.playlist.trackIds.filter(t=>t.id).map(t=>t.id).join(",");r()({baseURL:i.$themeConfig.back.musicUrl,url:"/song/detail?ids="+n,withCredentials:!0}).then((function(r){200===r.status&&200===r.data.code&&(i.musicList=r.data.songs.map(t=>{let s=r.data.privileges.filter(s=>s.id==t.id).map(t=>t.chargeInfoList.map(t=>t.rate))[0];return{musicId:t.id,name:t.name||"",artist:t.ar.map(t=>t.name).join("，")||"",cover:t.al.picUrl||"",brList:s,sort:e++}}),setTimeout(()=>{i.isListRefresh=!1},2e3),"first"==t&&(i.getCurrentMusic(t),i.$refs.audio.volume=i.defaultVolume,i.currentMusic.volume=i.$refs.audio.volume),i.currentMusic.playListId=s,setTimeout(()=>{i.scrollToCurrentMusic("music_",i.currentMusic.musicId)},1500))}),(function(t){i.loading=!1,i.isListRefresh=!1,i.currentMusic.artist=t.response.data.message,i.currentMusic.currentTime=0,console.log(t)}))}}),(function(t){i.loading=!1,i.isListRefresh=!1,i.currentMusic.artist="歌单获取失败",i.currentMusic.currentTime=0,console.log(t)}))},getCurrentMusic:a((function(t="first",s={}){if(!s||s.musicId!=this.currentMusic.musicId){if(setTimeout(()=>{this.scrollToCurrentMusic("music_",this.currentMusic.musicId)},1500),this.$refs.audio.pause(),this.currentMusic.lrc="",this.currentMusic.lrcList=[],"playrandom"==this.playType&&"change"!==t){let t=this.songsList.filter(t=>t.musicId!=this.currentMusic.musicId);this.currentMusic=Object.assign({},this.currentMusic,t[Math.floor(Math.random()*t.length)])}else if("first"===t)this.currentMusic=Object.assign({},this.currentMusic,this.songsList[0]);else if("change"===t)this.currentMusic=Object.assign({},this.currentMusic,s);else{let s="prev"==t?--this.currentMusic.sort:++this.currentMusic.sort;if("next"===t&&s>this.songsList.length-1){if(s=0,"playorder"==this.playType)return}else"prev"===t&&s<0&&(s=this.songsList.length-1);this.currentMusic.sort=s,this.currentMusic=Object.assign({},this.currentMusic,this.songsList[s])}this.getMusic(this.currentMusic.musicId,this.currentMusic.brList[this.currentMusic.brList.length-1],t)}}),500),getMusic(t="1868943615",s=128e3,i){let e=this;""!==t&&(e.loading=!0,r()({baseURL:e.$themeConfig.back.musicUrl,url:"/check/music?id="+t+"&br="+s,withCredentials:!0}).then((function(a){200===a.status&&a.data.success&&(e.getMusicLrc(t),r()({baseURL:e.$themeConfig.back.musicUrl,url:"/song/url?id="+t+"&br="+s,withCredentials:!0}).then((function(t){200===t.status&&(e.loading=!1,e.currentMusic.url=t.data.data[0].url.match("^http://")?t.data.data[0].url.replace("http://","https://"):t.data.data[0].url,("first"!=i||"first"==i&&e.autoPlay)&&setTimeout(()=>{e.$refs.audio.play()},2e3))}),(function(t){e.loading=!1,console.log(t)})))}),(function(t){e.loading=!1,e.currentMusic.artist=t.response.data.message,e.currentMusic.url="",e.currentMusic.name="",e.currentMusic.currentTime=0,console.log(t)})))},getMusicLrc(t="1868943615"){let s=this;t&&r()({baseURL:s.$themeConfig.back.musicUrl,url:"/lyric?id="+t,withCredentials:!0}).then((function(t){if(200===t.status){let i=t.data.lrc.lyric,e=1;s.currentMusic.lrcList=i.split("\n").map(t=>{let s=t.substring(t.indexOf("[")+1,t.indexOf("]")+0).split(":");return{timestemp:parseInt(Math.floor(60*s[0])+Math.floor(s[1])),str:t.substring(t.indexOf("]")+1),lineNo:t.substring(t.indexOf("]")+1)&&e++}}).filter(t=>t.str),s.isArrow=!0,s.currentMusic.lrcList.length>0&&!s.currentMusic.lrcList[1].timestemp&&0!=s.currentMusic.lrcList[1].timestemp&&(s.isArrow=!1)}}),(function(t){console.log(t)}))},transformLrc:function(t,s=200){let i=Date.now();return function(){const e=Date.now(),r=s-(e-i),a=arguments,n=this;clearTimeout(null),r<=0&&(t.apply(n,a),i=Date.now())}}((function(t){let s=this;if(!s.isArrow)return;let i=s.currentMusic&&s.currentMusic.lrcList.filter(s=>s.timestemp<=t),e=i.filter(s=>s.timestemp==parseInt(t)).map(t=>t.str).join(",");e&&s.currentMusic.lrc!=e&&(s.currentMusic.lrc=e);let r=Math.max.apply(null,i.map(t=>t.lineNo)),a=parseInt(s.$refs.lyric&&.12*s.$refs.lyric.offsetHeight)||85,n=parseInt(s.$refs.lrcLine&&0!=s.$refs.lrcLine.length&&s.$refs.lrcLine[0].offsetHeight)||45;r&&isFinite(r)&&(s.$refs.lyric.scrollTop=n*r-a)}),500),onPlay:a((function(){return this.isPlaying?this.$refs.audio.pause():this.$refs.audio.play()}),500),play(){this.playHistory=!0,this.isPlaying=!0},pause(){this.playHistory=!1,this.isPlaying=!1},next(t){this.getCurrentMusic("next")},prev(t){this.getCurrentMusic("prev")},transTime(t){var s=parseInt(t),i=parseInt(s/60),e=s%60+"";return 0===i?i="00":i<10&&(i="0"+i),1===e.length&&(e="0"+e),i+":"+e},onTimeupdate(t){this.currentMusic.currentTime=this.transTime(this.currentMusic.duration-t.target.currentTime),this.currentMusic.timestemp=parseInt(Math.floor(100*t.target.currentTime)/100),this.transformLrc(this.currentMusic.timestemp)},onLoadedmetadata(t){this.currentMusic.duration=t.target.duration,this.currentMusic.maxTime=this.transTime(t.target.duration),this.currentMusic.currentTime=this.currentMusic.maxTime},onEnded(t){this.next()},onVolume:a((function(t){let s=parseInt(10*this.$refs.audio.volume),i=10*this.volumeStep;"string"==typeof t&&(this.$refs.audio.volume="jian"===t?s-i<=0?0:(parseInt(10*this.$refs.audio.volume)-i)/10:s+i>=10?1:(parseInt(10*this.$refs.audio.volume)+i)/10),this.currentMusic.volume=this.$refs.audio.volume}),200),immerse(t){this.open=!this.open,this.open&&setTimeout(()=>{this.scrollToCurrentMusic("music_",this.currentMusic.musicId,{behavior:"auto"})},1500)},getScoll(t="music_"){this.scrollToCurrentMusic(t,this.currentMusic.musicId,{behavior:"auto"})},scrollToCurrentMusic(t="music_",s="",i={behavior:"smooth",block:"center"}){s&&this.$nextTick(()=>{document.querySelector("#"+t+s)&&document.querySelector("#"+t+s).scrollIntoView({behavior:i.behavior||"auto",block:i.block||"center"})})},inputChange(t){this.search.query=t,this.searchHandle(t)},searchHandle:a((function(t){let s=this,i=0;t.trim()||(s.searchFlag=!1,s.search.isRuning=!1),s.search.resultList=[],t.trim()&&(s.search.isRuning=!0,r()({baseURL:s.$themeConfig.back.musicUrl,url:"/cloudsearch?keywords="+t,withCredentials:!0}).then((function(t){200===t.status&&(s.search.resultList=t.data.result.songs.map(t=>{let s=[];return s.push(t.privilege.maxbr),{musicId:t.id,name:t.name||"",artist:t.ar.map(t=>t.name).join("，")||"",cover:t.al.picUrl||"",brList:s,sort:i++}}),s.searchFlag=!0,setTimeout(()=>{s.search.isRuning=!1},1e3))}),(function(t){s.search.isRuning=!1,console.log(t)})))}),1500)}},c=(i(448),i(1)),l=Object(c.a)(n,(function(){var t=this,s=t._self._c;return t.isPC&&null!=t.linksWrapOffsetWidth?s("div",{staticClass:"nav-music",class:{pagefull:(t.$frontmatter.layout||t.$themeConfig.fullscreen&&t.$frontmatter.isFull||t.$frontmatter.home)&&!t.isFixed,fixed:t.isFixed,visible:t.isVisible},style:[{right:t.linksWrapOffsetWidth?parseInt(t.linksWrapOffsetWidth)/16+"rem":""}]},[s("div",{staticClass:"img-box"},[s("a",{staticClass:"point_box",on:{click:t.immerse}},[s("div",{staticClass:"point_1"}),t._v(" "),s("div",{staticClass:"point_2"})]),t._v(" "),s("img",{staticClass:"avatar",class:{playing:t.isPlaying},attrs:{src:t.currentMusic?t.currentMusic.cover:""}})]),t._v(" "),s("div",{staticClass:"actions"},[s("div",{staticClass:"title"},[0==t.currentMusic.currentTime||t.loading?t._e():s("div",{staticClass:"time"},[s("span",{staticStyle:{"margin-right":"0.1rem"}},[t._v("\n          "+t._s(0==t.currentMusic.currentTime?"":t.currentMusic.currentTime)+"\n        ")])]),t._v(" "),t.loading?s("div",{staticClass:"loading"},[s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span")]):t._e(),t._v(" "),s("div",{staticClass:"title-name"},[s("span",[t._v("\n          "+t._s(t.isPlaying&&t.currentMusic.lrc?t.currentMusic.lrc:(t.currentMusic.artist||"")+(t.currentMusic.name?" - ":"")+(t.currentMusic.name||""))+"  \n        ")])])]),t._v(" "),s("div",{staticClass:"action-bar"},[s("i",{staticClass:"iconfont rays-prev-face",on:{click:t.prev}}),t._v(" "),t.isPlaying?t._e():s("i",{staticClass:"iconfont rays-play",on:{click:t.onPlay}}),t._v(" "),t.isPlaying?s("i",{staticClass:"iconfont rays-pause",on:{click:t.onPlay}}):t._e(),t._v(" "),s("i",{staticClass:"iconfont rays-next-face",on:{click:t.next}}),t._v(" "),t.currentMusic.volume<=0?s("i",{staticClass:"iconfont rays-mute",staticStyle:{"margin-left":".5rem"}}):t._e(),t._v(" "),t.currentMusic.volume>0?s("i",{staticClass:"iconfont rays-volume-reduce",staticStyle:{"margin-left":"1rem"},on:{click:function(s){return t.onVolume("jian")}}}):t._e(),t._v(" "),s("span",{staticClass:"volume"},[t._v(t._s(parseInt(10*t.currentMusic.volume)))]),t._v(" "),s("i",{staticClass:"iconfont rays-volume-add",on:{click:function(s){return t.onVolume("jia")}}}),t._v(" "),s("i",{staticClass:"iconfont palylist",class:"rays-"+t.playType,staticStyle:{"font-size":"1.2rem"},on:{click:t.playTypeHandle}}),t._v(" "),s("div",{staticClass:"dropdown-wrapper"},[s("a",{staticClass:"dropdown-box"},[s("i",{staticClass:"iconfont rays-songlist palylist",on:{mouseenter:function(s){return t.scrollToCurrentMusic("dropdown_",t.currentMusic.musicId,{behavior:"auto",block:"center"})}}})]),t._v(" "),s("DropdownTransition",[s("ul",{staticClass:"music-dropdown"},t._l(t.musicList,(function(i,e){return s("li",{key:i.musicId||e,staticClass:"music-dropdown-item"},[s("div",{staticClass:"music-info",attrs:{id:"dropdown_"+i.musicId},on:{click:function(s){return t.getCurrentMusic("change",i)}}},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("img",{staticClass:"avatar",attrs:{src:i?i.cover:""}}),t._v(" "),s("div",{staticClass:"detail"},[s("div",{staticClass:"title-name",class:{"current-music":i.musicId==t.currentMusic.musicId}},[s("span",[t._v("\n                        "+t._s(i.name||"")+"  \n                      ")])]),t._v(" "),s("div",{staticClass:"title-name-sub"},[s("span",[t._v("\n                        "+t._s(i.artist||"")+"\n                      ")])])])]),t._v(" "),t.isPlaying&&i.musicId==t.currentMusic.musicId?s("div",{staticClass:"heart-hot"},[s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span")]):t._e()])])})),0)])],1)])]),t._v(" "),s("div",{staticClass:"immerse-wapper",style:t.open?"height: 100%;":"height: 0;"},[s("div",{staticClass:"immerse-action"},[s("span",{staticClass:"immerse-close",attrs:{title:"ESC"},on:{click:t.immerse}})]),t._v(" "),s("div",{staticClass:"immerse-main"},[s("div",{staticClass:"immerse-avtar"},[s("img",{staticClass:"avatar",class:{playing:t.isPlaying},staticStyle:{width:"20rem",height:"20rem","border-radius":"500px"},attrs:{src:t.currentMusic?t.currentMusic.cover:""},on:{click:t.onPlay}})]),t._v(" "),s("div",{staticClass:"immerse-cover"},[s("div",{staticClass:"immerse-title"},[s("span",[t._v("\n            "+t._s(t.currentMusic.name||t.currentMusic.artist||"")+"  \n          ")])]),t._v(" "),s("ul",{ref:"lyric",staticClass:"immerse-lrc"},[s("div",{staticStyle:{"max-width":"60rem"},style:{margin:t.isArrow?"30% 0":"10% 0"}},t._l(t.currentMusic.lrcList,(function(i,e){return i.str?s("li",{key:e,ref:"lrcLine",refInFor:!0,staticClass:"lrc",class:{active:t.isPlaying&&i.timestemp<=t.currentMusic.timestemp&&e!=t.currentMusic.lrcList.length-1&&t.currentMusic.timestemp<parseInt(t.currentMusic.lrcList[e+1].timestemp),lrcFlag:0===e}},[t._v(t._s(i.str))]):t._e()})),0)])]),t._v(" "),s("div",{staticClass:"immerse-musicList",class:{scollbarActive:t.scollbar,scollbarDisplay:!t.scollbar},on:{mouseenter:function(s){t.scollbar=!0},mouseleave:function(s){t.scollbar=!1}}},[s("div",{staticStyle:{display:"flex",padding:"0.5rem 1rem"}},[s("div",{staticClass:"catgBtns"},t._l(t.catgList,(function(i,e){return s("div",{staticClass:"listBtn",class:{listBtn_1:0==e,listBtn_2:0!=e&&e==t.catgList.length-1,selected:!t.searchFlag&&i.id==t.currentMusic.playListId},on:{click:function(s){return t.getMusicList(i.index,i.id)}}},[s("span",[t._v("\n                "+t._s(i.name)+"\n              ")])])})),0),t._v(" "),s("div",{staticClass:"refreshBtn",class:t.isListRefresh?"refreshing":""},[s("i",{staticClass:"iconfont rays-shuaxin1",on:{click:function(s){return t.getMusicList("refresh",t.playlistId)}}})]),t._v(" "),s("div",{staticClass:"locationBtn",staticStyle:{"margin-left":"-.8rem"}},[s("i",{staticClass:"iconfont rays-dingwei",on:{click:function(s){return t.getScoll("music_")}}})]),t._v(" "),s("div",{staticClass:"searchBox"},[s("i",{staticClass:"iconfont",class:{"reco-search":!t.search.isRuning,"rays-shuaxin":t.search.isRuning,refreshing:t.search.isRuning}}),t._v(" "),s("input",{class:{focused:t.searchFlag},style:{width:t.search.query?"60%":"0"},attrs:{"aria-label":"Search",placeholder:"搜索",autocomplete:"off",spellcheck:"false"},domProps:{value:t.search.query},on:{input:function(s){return t.inputChange(s.target.value)},focus:function(s){t.focused=!0},blur:function(s){t.focused=!1}}})])]),t._v(" "),s("div",{staticStyle:{width:"99%",height:"calc(100% - 2.5rem)"}},[s("ul",{ref:"musicList",staticClass:"immerse-musicList-wapper"},t._l(t.songsList,(function(i,e){return s("li",{key:i.musicId||e,staticClass:"music-dropdown-item"},[s("div",{staticClass:"music-info",attrs:{id:"music_"+i.musicId},on:{click:function(s){return t.getCurrentMusic("change",i)}}},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("img",{staticClass:"avatar",attrs:{src:i?i.cover:""}}),t._v(" "),s("div",{staticClass:"detail"},[s("div",{staticClass:"title-name",class:{"current-music":i.musicId==t.currentMusic.musicId}},[s("span",[t._v("\n                        "+t._s(i.name||"")+"  \n                      ")])]),t._v(" "),s("div",{staticClass:"title-name-sub"},[s("span",[t._v("\n                        "+t._s(i.artist||"")+"\n                      ")])])])]),t._v(" "),t.isPlaying&&i.musicId==t.currentMusic.musicId?s("div",{staticClass:"heart-hot"},[s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span")]):t._e()])])})),0)])])]),t._v(" "),s("div",{staticClass:"immerse-footer"},[s("div",{staticClass:"action-bar"},[s("i",{staticClass:"iconfont rays-prev-face",attrs:{title:"Ctrl + ←"},on:{click:t.prev}}),t._v(" "),t.isPlaying?t._e():s("i",{staticClass:"iconfont rays-play",staticStyle:{"font-size":"3rem"},attrs:{title:"Space"},on:{click:t.onPlay}}),t._v(" "),t.isPlaying?s("i",{staticClass:"iconfont rays-pause",staticStyle:{"font-size":"3rem"},attrs:{title:"Space"},on:{click:t.onPlay}}):t._e(),t._v(" "),s("i",{staticClass:"iconfont rays-next-face",attrs:{title:"Ctrl + →"},on:{click:t.next}}),t._v(" "),s("audio",{ref:"audio",attrs:{controls:"",loop:"playsingle"==t.playType,autoplay:!1,src:t.currentMusic.url,volume:.3},on:{volumechange:t.onVolume,play:t.play,pause:t.pause,loadedmetadata:t.onLoadedmetadata,timeupdate:t.onTimeupdate,ended:t.onEnded}}),t._v(" "),t.currentMusic.volume<=0?s("i",{staticClass:"iconfont rays-mute",staticStyle:{"margin-left":"1rem"}}):t._e(),t._v(" "),t.currentMusic.volume>0?s("i",{staticClass:"iconfont rays-volume-reduce",staticStyle:{"margin-left":"1rem"},attrs:{title:"↓"},on:{click:function(s){return t.onVolume("jian")}}}):t._e(),t._v(" "),s("span",{staticClass:"volume"},[t._v(t._s(parseInt(10*t.currentMusic.volume)))]),t._v(" "),s("i",{staticClass:"iconfont rays-volume-add",attrs:{title:"↑"},on:{click:function(s){return t.onVolume("jia")}}}),t._v(" "),s("i",{staticClass:"iconfont palylist",class:"rays-"+t.playType,on:{click:t.playTypeHandle}})])])])]):t._e()}),[],!1,null,"7371e1d8",null);s.default=l.exports}}]);