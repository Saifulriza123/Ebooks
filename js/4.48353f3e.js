(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"row search"},[e("q-input",{attrs:{filled:"",type:"search",label:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),e("div",{staticClass:"row"},t._l(t.filteredList,(function(a,s){return e("q-card",{key:a.isbn,staticClass:"card-name"},[e("q-card-section",{staticClass:"bg-primary text-white"},[e("div",{staticClass:"text-h6"},[t._v(t._s(a.name))]),e("div",{staticClass:"text-subtitle2"},[t._v(t._s(a.publisher))]),t._l(a.authors,(function(a){return e("div",{key:a,staticClass:"text-subtitle2"},[t._v(t._s(a))])}))],2),e("q-separator"),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{attrs:{to:"/details/"+(s+1),outline:"",color:"white","text-color":"primary",round:"",icon:"fa fa-bars"}})],1)],1)})),1)])])},n=[],i=(e("386d"),e("6762"),e("2fdb"),e("7f7f"),e("fc74"),{data:function(){return{search:"",data:[]}},beforeMount:function(){this.$q.loadingBar.start()},mounted:function(){this.load(),this.$q.loadingBar.stop()},methods:{load:function(){var t=this;this.$axios.get("https://www.anapioficeandfire.com/api/books").then((function(a){t.data=a.data,console.log(t.data)})).catch((function(t){console.log(t)}))}},computed:{filteredList:function(){var t=this;return this.data.filter((function(a){return a.name.toLowerCase().includes(t.search.toLowerCase())}))}}}),r=i,o=(e("c34e"),e("2877")),c=e("eebe"),l=e.n(c),u=e("9989"),d=e("27f9"),f=e("0016"),h=e("f09f"),p=e("a370"),b=e("eb85"),v=e("4b7e"),w=e("9c40"),m=Object(o["a"])(r,s,n,!1,null,"1b16568c",null);a["default"]=m.exports;l()(m,"components",{QPage:u["a"],QInput:d["a"],QIcon:f["a"],QCard:h["a"],QCardSection:p["a"],QSeparator:b["a"],QCardActions:v["a"],QBtn:w["a"]})},c34e:function(t,a,e){"use strict";var s=e("e224"),n=e.n(s);n.a},e224:function(t,a,e){}}]);