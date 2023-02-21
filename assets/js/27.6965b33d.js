(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{478:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Boxx"),t._v(" "),s("h2",{attrs:{id:"节流和防抖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节流和防抖"}},[t._v("#")]),t._v(" 节流和防抖")]),t._v(" "),s("p",[t._v("节流和防抖在浏览器性能的优化手段中非常常见，像一些鼠标重复点击、页面滚动、鼠标拖拽、Input框自动填充以及文档编辑保存等场景。\n"),t._v("\n虽然都是防止事件的重复发生，但是它们还是有一些区别。")]),t._v(" "),s("p",[t._v("本篇文章主要是记录节流防抖的实现以及如何区分使用节流还是使用防抖，已防自己在开发的过程当中被领导骂个狗血喷头。")]),t._v(" "),s("h2",{attrs:{id:"防抖-deounce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防抖-deounce"}},[t._v("#")]),t._v(" 防抖（deounce）")]),t._v(" "),s("ul",[s("li",[t._v("定义")])]),t._v(" "),s("p",[s("strong",[t._v("等一个有效指令：")]),t._v(" 给一个固定时间，如果你开始触发动作，并且在这个固定时间内不再有任何动作，我就执行一次，否则我每次都会重新开始计时。")]),t._v(" "),s("ul",[s("li",[t._v("实现")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @description: Add by RayShine \n     * @param {Fn} func\n     * @param {int} delay\n     * @return {*}\n     */")]),t._v("    \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deounce")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除上次还未发生的事件")]),t._v("\n        timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置一个新的定时器")]),t._v("\n        timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("svg",{staticClass:"svgIcon",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"}},[s("g",{attrs:{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"12",cy:"12",r:"9"}}),s("path",{attrs:{d:"M12 8v4"}}),s("path",{attrs:{d:"M12 16h.01"}})])]),s("p",{staticClass:"title"},[t._v("使用场景")]),s("ol",[s("li",[t._v("登录、提交或短信验证时，避免用户重复点击")]),t._v(" "),s("li",[t._v("Input框自动填充，避免服务器压力过大")]),t._v(" "),s("li",[t._v("窗口自适应，避免渲染时闪屏")]),t._v(" "),s("li",[t._v("文档编辑时实时保存，避免更改次数过多")])])]),s("h2",{attrs:{id:"节流-throttle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节流-throttle"}},[t._v("#")]),t._v(" 节流（throttle）")]),t._v(" "),s("ul",[s("li",[t._v("定义")])]),t._v(" "),s("p",[s("strong",[t._v("按时执行一个有效指令：")]),t._v(" 用户会反复触发一些操作，比如鼠标移动事件，此时只需要指定一个“巡视”的间隔时间，不管用户期间触发多少次，只会在间隔点上执行给定的回调函数。")]),t._v(" "),s("ul",[s("li",[t._v("实现")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @description: Add by RayShine \n     * @param {Fn} func\n     * @param {int} delay\n     * @return {*}\n     */")]),t._v("    \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始时间")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" startTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发时间")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" curTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算上次事件到本次事件的时间间隔点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" remaining "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" delay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" startTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除上次还未发生的事件")]),t._v("\n        timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果到了delay间隔时间，执行一次回调函数，并重新计时")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remaining "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          startTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curTime\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果没到delay间隔时间，设置一个定时器，保证事件不再发生时能最终执行一次")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" remaining"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("svg",{staticClass:"svgIcon",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"}},[s("g",{attrs:{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"12",cy:"12",r:"9"}}),s("path",{attrs:{d:"M12 8v4"}}),s("path",{attrs:{d:"M12 16h.01"}})])]),s("p",{staticClass:"title"},[t._v("使用场景")]),s("ol",[s("li",[t._v("鼠标滚动事件，避免触发次数过多，页面过渡不够平滑，影响用户体验。（例如本站的导航栏，向下滚动时隐藏，向上滚动时显示，如触发次数过多，emmmm~，可以想象得到。）")]),t._v(" "),s("li",[t._v("Input框自动填充，避免服务器压力过大")]),t._v(" "),s("li",[t._v("下拉加载时，避免服务器压力过大")]),t._v(" "),s("li",[t._v("拖拽动画，避免计算次数过多，影响浏览器性能")])])]),s("h2",{attrs:{id:"关于节流和防抖的区别与联系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于节流和防抖的区别与联系"}},[t._v("#")]),t._v(" 关于节流和防抖的区别与联系")]),t._v(" "),s("div",{staticClass:"custom-block theorem"},[s("p",{staticClass:"title"},[t._v("联系")]),s("ol",[s("li",[t._v("都是利用 "),s("RouterLink",{attrs:{to:"/blogs/每日一题/2022年/6月/10日.html"}},[t._v("闭包")]),t._v(" 的优点，通过私有化变量来实现的。")],1),t._v(" "),s("li",[t._v("都是用于应用的性能优化")]),t._v(" "),s("li",[t._v("都是用来抑制事件的重复执行")])])]),s("div",{staticClass:"custom-block theorem"},[s("p",{staticClass:"title"},[t._v("区别")]),s("p",[t._v("防抖是为了事件最终只执行一次，避免浏览器认为是多次事件。\n"),s("br"),t._v("\n节流是为了控制事件执行的速率，即每隔多长事件执行一次。")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);