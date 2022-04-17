!function(){var e,t={93:function(e,t,n){"use strict";var r=window.wp.blocks,o=window.wp.element,i=n(184),l=n.n(i),s=window.wp.blockEditor,a=window.wp.components,u=window.wp.i18n,c=window.wp.primitives,p=(0,o.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(c.Path,{d:"M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"})),m=(0,o.createElement)((function(e){let{icon:t,size:n=24,...r}=e;return(0,o.cloneElement)(t,{width:n,height:n,...r})}),{icon:p}),f=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"x3p0/comments-title","version":"1.0.0-alpha","title":"X3P0 - Comments Title","category":"theme","icon":"comments","description":"Displays the comments query title.","parent":["core/comments-query-loop"],"usesContext":["postId"],"attributes":{"showPostTitle":{"type":"boolean","default":true},"textAlign":{"type":"string"}},"supports":{"anchor":false,"align":true,"html":false,"__experimentalBorder":{"radius":true,"color":true,"width":true,"style":true,"__experimentalDefaultControls":{"width":true,"color":true}},"color":{"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"margin":true,"padding":true,"__experimentalDefaultControls":{"padding":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalFontFamily":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true,"__experimentalFontFamily":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true}}},"textdomain":"x3p0-comments-title","editorScript":"file:./index.js","style":"file:./style-index.css"}');const h={icon:m,edit:function(e){let{attributes:{textAlign:t,showPostTitle:n},setAttributes:r}=e;const i=(0,s.useBlockProps)({className:l()({[`has-text-align-${t}`]:t})}),c=(0,o.createElement)(s.BlockControls,{group:"block"},(0,o.createElement)(s.AlignmentControl,{value:t,onChange:e=>r({textAlign:e})})),p=(0,o.createElement)(s.InspectorControls,null,(0,o.createElement)(a.PanelBody,{title:(0,u.__)("Title settings","x3p0-comments-title")},(0,o.createElement)(a.ToggleControl,{label:(0,u.__)("Show post title","x3p0-comments-title"),checked:n,onChange:e=>r({showPostTitle:e})})));return(0,o.createElement)(o.Fragment,null,c,p,(0,o.createElement)("h2",i,(0,u.sprintf)(n?(0,u.__)('%s replies to "Post Title"',"x3p0-comments-title"):(0,u.__)("%s replies","x3p0-comments-title"),3)))},save:function(){return null}};(0,r.registerBlockType)(f,h)},184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,a=0;a<n.length;a++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(s=!1,i<l&&(l=i));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,l=n[0],s=n[1],a=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(a)var c=a(r)}for(t&&t(n);u<l.length;u++)i=l[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunkx3p0_comments_title=self.webpackChunkx3p0_comments_title||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(93)}));o=r.O(o)}();