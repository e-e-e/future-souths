webpackJsonp([2,0],{0:function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}r(113);var s=r(40),o=i(s),n=r(146),a=i(n),u=r(66),c=i(u),l=r(67),d=i(l);new o.default({el:"#app",template:"<App/>",components:{App:a.default},router:c.default,store:d.default})},21:function(t,e){"use strict";function r(t){return"dialogue"===t.type?"/"+t.uid:"/"}function i(t){if(!t)return[];if(!Array.isArray(t.results))return[];var e=t.results.map(function(t,e){var i=t.getStructuredText("dialogue.author"),s=t.getGroup("dialogue.participants"),o=t.getStructuredText("dialogue.title"),n=t.getTimestamp("dialogue.time"),a=t.getStructuredText("dialogue.blurb"),u=t.getImage("dialogue.feature-image"),c=t.getStructuredText("dialogue.feature-image-caption"),d=t.getGroup("dialogue.footnotes");return{title:o?o.asText():"Untitled",author:i?i.asText():"Anonymous",time:new Date(n),footnotes:d?d.toArray().map(function(t){return{content:t.getStructuredText("footnote").asHtml(),relativeTo:void 0,show:!1}}).filter(function(t){return!!t}):[],participants:s?s.toArray().map(function(t){var e=t.getStructuredText("participant");return e?e.asText():null}).filter(function(t){return!!t}):[],image:u?u.asHtml(r,l()):null,caption:c?c.asHtml(r):"",blurb:a?a.asHtml(r,l(e)):""}});return e}function s(t){return t&&Array.isArray(t.results)?t.results.map(function(t){var e=t.getStructuredText("contributor.name"),i=t.getStructuredText("contributor.biography");return{name:e?e.asText(r):"",biography:i?i.asHtml(r):""}}):[]}function o(t){if(!t)return{};if(!Array.isArray(t.results))return{};if(0===t.results.length)return{};var e=t.results[0].getStructuredText("about.heading"),i=t.results[0].getStructuredText("about.content");return{heading:e?e.asText():"",content:i?i.asHtml(r):""}}function n(t){if(!t)return"";if(!Array.isArray(t.results))return"";if(0===t.results.length)return"";var e=t.results[0].getStructuredText("footer.footer-description");return e?e.asHtml(r):""}function a(t){if(!t)return{};if(!Array.isArray(t.results))return{};if(0===t.results.length)return{};var e=t.results[0].getStructuredText("schedule.title"),i=t.results[0].getStructuredText("schedule.subtitle"),s=t.results[0].getStructuredText("schedule.description");return{title:e?e.asText():"",subtitle:i?i.asText():"",description:s?s.asHtml(r):""}}function u(t){if(!t)return{};if(!Array.isArray(t.results))return{};if(0===t.results.length)return{};var e=t.results[0].getStructuredText("live-discussions.title"),i=t.results[0].getStructuredText("live-discussions.content");return{title:e?e.asText():"",content:i?i.asHtml(r):""}}Object.defineProperty(e,"__esModule",{value:!0}),e.processDialogues=i,e.processContributors=s,e.processAbout=o,e.processFooter=n,e.processSchedule=a,e.processLiveDialogues=u;var c=["January","February","March","April","June","July","August","September","November","December"],l=(e.date=function(t){return t?t.getDate()+" "+c[t.getMonth()]+" "+t.getFullYear():""},e.dateHeader=function(t){return t?c[t.getMonth()]+" "+t.getDate()+", "+t.getFullYear():""},e.time=function(t){if(!t)return"";var e=t.getMinutes();return t.getHours()+1+":"+e+(e<10?"0":"")},function(t){var e=0;return function(r,i){if("image"===r.type){var s=r.dimensions,o=s.width,n=s.height;if(!o)return"";var a=n/o*100;return'<img src="'+r.url+'" alt="'+r.alt+'" style="height:'+a.toFixed(0)+'%">'}if("hyperlink"===r.type)return'<a target="__blank" href="'+r.url+'">'+i+"</a>";if("paragraph"===r.type){var u=i.split(/\[\*\]/g).reduce(function(r,i,s){return 0===s?i:(e+=1,r+'<span id="footnote-'+e+"-"+(t||"n")+'" class="footnote">'+e+"</span>"+i)},"");return">"===r.text[0]?'<div class="caption">'+u.replace("&gt;","")+"</div>":"<p>"+u+"</p>"}return null}})},56:function(t,e){t.exports={_args:[[{raw:"prismic.io@^3.5.6",scope:null,escapedName:"prismic.io",name:"prismic.io",rawSpec:"^3.5.6",spec:">=3.5.6 <4.0.0",type:"range"},"/Users/benjamin/Documents/artlife/projects/83.FutureSouths/future-souths"]],_from:"prismic.io@>=3.5.6 <4.0.0",_id:"prismic.io@3.5.6",_inCache:!0,_location:"/prismic.io",_nodeVersion:"7.2.0",_npmOperationalInternal:{host:"packages-12-west.internal.npmjs.com",tmp:"tmp/prismic.io-3.5.6.tgz_1493393399781_0.9675158697646111"},_npmUser:{name:"sre",email:"srenault.contact@gmail.com"},_npmVersion:"4.4.4",_phantomChildren:{},_requested:{raw:"prismic.io@^3.5.6",scope:null,escapedName:"prismic.io",name:"prismic.io",rawSpec:"^3.5.6",spec:">=3.5.6 <4.0.0",type:"range"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/prismic.io/-/prismic.io-3.5.6.tgz",_shasum:"a29c04874363bd26427d3df8686310adac0faac4",_shrinkwrap:null,_spec:"prismic.io@^3.5.6",_where:"/Users/benjamin/Documents/artlife/projects/83.FutureSouths/future-souths",bugs:{url:"https://github.com/prismicio/javascript-kit/issues"},dependencies:{},description:"JavaScript development kit for prismic.io",devDependencies:{"babel-preset-es2015":"~6.24.0",babelify:"~7.3.0",browserify:"~14.1.0",chai:"~3.5.0","codeclimate-test-reporter":"~0.4.1","es6-promise":"~4.1.0",eslint:"~3.18.0",istanbul:"~0.4.5",jsdoc:"~3.4.3",mocha:"~3.2.0",rimraf:"~2.6.1","uglify-js":"~2.8.16","vinyl-buffer":"~1.0.0","vinyl-source-stream":"~1.1.0"},directories:{},dist:{shasum:"a29c04874363bd26427d3df8686310adac0faac4",tarball:"https://registry.npmjs.org/prismic.io/-/prismic.io-3.5.6.tgz"},engines:{node:">=4.8.1",npm:">=2.15.11"},gitHead:"6a3ca58129f63431a3e0968f518face3a9cc9a4a",homepage:"https://github.com/prismicio/javascript-kit#readme",keywords:["prismic","prismic.io","cms","content","api"],license:"Apache-2.0",main:"lib/prismic.js",maintainers:[{name:"sre",email:"srenault.contact@gmail.com"}],name:"prismic.io",optionalDependencies:{},readme:"ERROR: No README data found!",repository:{type:"git",url:"git+ssh://git@github.com/prismicio/javascript-kit.git"},scripts:{build:"scripts/browser.js",docs:"jsdoc lib/*.js README.md -d docs",lint:"eslint lib",postbuild:"npm run docs",posttest:"eslint lib",predocs:"rimraf ./docs",prepublish:"npm run uglify",preuglify:"npm run build",test:"istanbul cover _mocha -- -t 3000 test/",uglify:"uglifyjs -c -o=dist/prismic.io.min.js dist/prismic.io.js"},url:"https://github.com/prismicio/javascript-kit",version:"3.5.6"}},65:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.INITIAL_STATE={loading:!1,data:null,dialogues:[],contributors:[],about:null,footer:null,schedule:null,live:null,focused:-1,error:null},e.PRISMIC_ENDPOINT="https://future-souths.prismic.io/api",e.PRISMIC_DEFAULT_OPTIONS={pageSize:30,orderings:"[my.info.lastPublicationDate]"}},66:function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(40),o=i(s),n=r(158),a=i(n);o.default.use(a.default);var u=[];e.default=new a.default({routes:u})},67:function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(22),o=i(s),n=r(75),a=i(n),u=r(40),c=i(u),l=r(41),d=i(l),p=r(128),f=i(p),m=r(65),v=r(21);c.default.use(d.default);var _=[{name:"about",action:"setAbout",query:f.default.Predicates.at("document.type","about"),opts:{},transform:v.processAbout},{name:"footer",action:"setFooter",query:f.default.Predicates.at("document.type","footer"),opts:{},transform:v.processFooter},{name:"schedule",action:"setSchedule",query:f.default.Predicates.at("document.type","schedule"),opts:{},transform:v.processSchedule},{name:"liveDialogues",action:"setLiveDialogues",query:f.default.Predicates.at("document.type","live-discussions"),opts:{},transform:v.processLiveDialogues},{name:"dialogues",action:"setDialogues",query:f.default.Predicates.at("document.type","dialogue"),opts:{orderings:"[my.dialogue.time]"},transform:v.processDialogues},{name:"contributors",action:"setContributors",query:f.default.Predicates.at("document.type","contributor"),opts:{orderings:"[my.contributor.name]"},transform:v.processContributors}],g=new d.default.Store({state:m.INITIAL_STATE,mutations:{setLoading:function(t,e){t.loading=e},setData:function(t,e){t.data=e},setDialogues:function(t,e){t.dialogues=e},setAbout:function(t,e){t.about=e},setFooter:function(t,e){t.footer=e},setContributors:function(t,e){t.contributors=e},setSchedule:function(t,e){t.schedule=e},setLiveDialogues:function(t,e){t.live=e},setFocused:function(t,e){t.focused=e},setError:function(t,e){t.error=e}},actions:{getData:function(t){var e=t.commit;e("setLoading",!0),f.default.api(m.PRISMIC_ENDPOINT).then(function(t){return a.default.all(_.map(function(e){return t.query(e.query,(0,o.default)({},m.PRISMIC_DEFAULT_OPTIONS,e.opts))}))}).then(function(t){t.forEach(function(t,r){var i=_[r];e(i.action,i.transform(t))}),e("setLoading",!1)}).catch(function(t){console.log("error",t),e("setError",t),e("setLoading",!1)})}}});e.default=g},68:function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(22),o=i(s),n=r(41),a=r(150),u=i(a),c=r(149),l=i(c),d=r(147),p=i(d),f=r(151),m=i(f);e.default={name:"app",components:{loader:u.default,keynote:l.default,contributor:p.default,schedule:m.default},created:function(){this.getData()},computed:(0,o.default)({},(0,n.mapState)(["loading","about","footer","dialogues","contributors","live","schedule","focused"])),methods:(0,o.default)({},(0,n.mapActions)(["getData"]))}},69:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"keynote",components:{},props:{name:{type:String,default:""},biography:{type:String,default:""}},data:function(){return{expanded:!1}},methods:{toggle:function(){this.expanded=!this.expanded}}}},70:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footnote",props:{index:{type:Number,required:!0},content:{type:String,required:!0},show:{type:Boolean,default:!1},relativeTo:{type:String}},beforeUpdate:function(){var t=document.getElementById(this.relativeTo);if(t){var e=t.getBoundingClientRect();this.position.top=e.top+window.scrollY+"px"}},data:function(){return{position:{position:"absolute",top:0}}}}},71:function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(22),o=i(s),n=r(41),a=r(21),u=r(148),c=i(u);e.default={name:"keynote",components:{footnote:c.default},props:{article:{type:Object,required:!0},focus:{type:Boolean,default:!1},index:{type:Number,required:!0}},mounted:function(){this.footnotes=this.$el.getElementsByClassName("footnote"),console.log(this.footnotes);for(var t=0;t<this.footnotes.length;t++){var e=this.footnotes[t];this.article.footnotes[t].relativeTo=e.id,e.addEventListener("mouseover",this.revealFootnote(t)),e.addEventListener("touchstart",this.revealFootnote(t))}},beforeDestroy:function(){for(var t=this.$el.getElementsByClassName("footnote"),e=0;e<t.length;e++)t[e].removeEventListener("mouseover",this.revealFootnote(e)),t[e].addEventListener("touchstart",this.revealFootnote(e))},data:function(){return{footnotes:[]}},methods:(0,o.default)({},(0,n.mapMutations)(["setFocused"]),{time:a.time,date:function(t){return"Dialogue: "+(0,a.dateHeader)(t)},revealFootnote:function(t){var e=this;return function(){console.log(t),e.article.footnotes.map(function(e,r){return e.show=r===t,e})}}})}},72:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loader",props:{loading:{type:Boolean,required:!0}},data:function(){return{}},computed:{}}},73:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(21);e.default={name:"keynote",components:{},props:{title:{type:String,default:""},subtitle:{type:String,default:""},description:{type:String,default:""},dialogues:{type:Array,default:[]}},data:function(){return{}},methods:{date:i.date,time:i.time}}},115:function(t,e){},116:function(t,e){},117:function(t,e){},118:function(t,e){},119:function(t,e){},120:function(t,e){},121:function(t,e){t.exports={body:"_2jCXiW-YAassyaELRihUaX_0"}},146:function(t,e,r){r(116),r(117);var i=r(11)(r(68),r(153),null,null);t.exports=i.exports},147:function(t,e,r){var i=r(11)(r(69),r(156),null,null);t.exports=i.exports},148:function(t,e,r){r(119);var i=r(11)(r(70),r(155),"data-v-6ebd3d3c",null);t.exports=i.exports},149:function(t,e,r){var i={};i.styles=r(121),r(120);var s=r(11)(r(71),r(157),null,i);t.exports=s.exports},150:function(t,e,r){r(115);var i=r(11)(r(72),r(152),"data-v-0dcf7d15",null);t.exports=i.exports},151:function(t,e,r){r(118);var i=r(11)(r(73),r(154),"data-v-1646a9ce",null);t.exports=i.exports},152:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loader"},[r("div",{staticClass:"contentsWrapper"},[r("transition",{attrs:{name:"fade"}},[r("header",[r("div",{staticClass:"column left"},[r("h1",{staticStyle:{color:"white"}},[t._v("Future"),r("br"),t._v("Souths")])])])])],1)])])},staticRenderFns:[]}},153:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("loader",{attrs:{loading:t.loading}}),t._v(" "),r("div",{staticClass:"contentsWrapper"},[t._m(0),t._v(" "),r("main",[r("div",{staticClass:"column right"},[t.schedule?r("schedule",{attrs:{title:t.schedule.title,subtitle:t.schedule.subtitle,description:t.schedule.description,dialogues:t.dialogues}}):t._e(),t._v(" "),t._l(t.dialogues,function(e,i){return r("keynote",{attrs:{article:e,index:i,focus:i===t.focused}})})],2),t._v(" "),r("div",{staticClass:"column left"},[t.about?r("section",[r("h1",[t._v(t._s(t.about.heading))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.about.content)}})]):t._e(),t._v(" "),r("section",[r("h1",[t._v("Contributors")]),t._v(" "),t._l(t.contributors,function(t){return r("contributor",{attrs:{name:t.name,biography:t.biography}})})],2),t._v(" "),t.live?r("section",[r("h1",[t._v(t._s(t.live&&t.live.title))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.live.content)}})]):t._e()])])]),t._v(" "),r("div",{staticClass:"contentsWrapper"},[r("footer",[r("div",{staticClass:"column left"},[r("section",{attrs:{id:"SiteDetail"}},[r("h2",{staticClass:"marginalia"},[t._v("Site Detail")]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.footer)}})])]),t._v(" "),t._m(1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"column left"},[r("h1",[t._v("Future"),r("br"),t._v("Souths")])]),t._v(" "),r("div",{staticClass:"column right"},[r("h2",[t._v("Aesthetics and Vocabularies"),r("br"),t._v("of the Global Souths")]),t._v(" "),r("nav",[r("a",{attrs:{href:"mailto:info@futuresouths.org"}},[t._v("Contact")]),t._v(" "),r("a",{attrs:{href:"https://www.facebook.com/futuresouths/",target:"__blank"}},[t._v("Follow")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column right"},[r("section",{attrs:{id:"Others"}},[r("h2",{staticClass:"marginalia"},[t._v("Colophon")]),t._v(" "),r("p",[t._v("Design: "),r("a",{attrs:{href:"http://ellasutherland.design/",target:"__blank"}},[t._v("Ella Sutherland")]),r("br"),t._v("\n          Programming: "),r("a",{attrs:{href:"https://github.com/e-e-e",target:"__blank"}},[t._v("Benjamin Forster")]),r("br"),t._v("\n          Source code: "),r("a",{attrs:{href:"https://github.com/e-e-e/future-souths",target:"__blank"}},[t._v("Github")]),r("br"),t._v("\n          Opensource content: "),r("a",{attrs:{href:"https://future-souths.prismic.io/api",target:"__blank"}},[t._v("prismic.io")])])])])}]}},154:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v(t._s(t.title))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.description)}}),t._v(" "),r("h2",{staticClass:"marginalia"},[t._v(t._s(t.subtitle))]),t._v(" "),t._l(t.dialogues,function(e){return r("div",{staticClass:"schedule"},[r("div",{staticClass:"times"},[r("div",[t._v(t._s(t.date(e.time)))]),t._v(" "),r("div",[t._v(t._s(t.time(e.time)))])]),t._v(" "),r("div",{staticClass:"names"},[r("div",[t._v(t._s(e.author))]),t._v(" "),r("div",[t._v(t._s(e.title))])])])})],2)},staticRenderFns:[]}},155:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[t.show?r("div",{style:t.position},[r("div",{staticClass:"fn"},[r("h2",[t._v(t._s(t.index+1))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.content)}})])]):t._e()])},staticRenderFns:[]}},156:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{on:{click:t.toggle}},[t._v(t._s(t.name))]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"expanded"}],domProps:{innerHTML:t._s(t.biography)}})])},staticRenderFns:[]}},157:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"dialogue"},[r("div",{staticClass:"displayDate"},[r("div",{staticClass:"marginalia"},[t._v(t._s(t.time(t.article.time)))]),t._v(" "),r("div",[t._v(t._s(t.date(t.article.time)))])]),t._v(" "),r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"marginalia-block"},[r("h2",{staticClass:"top"},[t._v(t._s(t.article.author))])]),t._v(" "),r("h2",{staticClass:"marginalia black"},t._l(t.article.participants,function(e){return r("span",[t._v(t._s(e)),r("br")])})),t._v(" "),r("div",{class:[t.styles.body,"article-body"],domProps:{innerHTML:t._s(t.article.image)}}),t._v(" "),t.article.caption?r("div",{staticClass:"caption",domProps:{innerHTML:t._s(t.article.caption)}}):t._e(),t._v(" "),t.focus?t._e():r("a",{on:{click:function(e){t.setFocused(t.index)}}},[t._v("Continue Reading...")]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],class:[t.styles.body,"article-body"],domProps:{innerHTML:t._s(t.article.blurb)}}),t._v(" "),t._l(t.article.footnotes,function(e,i){return r("footnote",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],key:i,attrs:{index:i,show:e.show,relativeTo:e.relativeTo,content:e.content}})})],2)},staticRenderFns:[]}},162:function(t,e){},163:function(t,e){}});
//# sourceMappingURL=app.9f0b53500403d198691e.js.map