(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c27939a"],{"4ee0":function(e,t,i){"use strict";i("ff57")},d504:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"wrapper"},[i("h1",[e._v("List To do")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.item,expression:"item"}],attrs:{type:"text",placeholder:"Enter Your Work"},domProps:{value:e.item},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addItems.apply(null,arguments)},input:function(t){t.target.composing||(e.item=t.target.value)}}}),i("br"),e._l(e.items,(function(t,n){return i("div",{key:n},[e._v(" "+e._s(t)+" ")])}))],2)])},s=[],o={name:"Index",data:function(){return{items:[],item:""}},methods:{addItems:function(){this.item.length&&(this.items.push(this.item),this.item="")}},watch:{items:{handler:function(){localStorage.setItem(JSON.stringify("items",this.items))}}},mounted:function(){this.items.length&&(this.items=JSON.parse(localStorage.getItem("items")))}},a=o,r=(i("4ee0"),i("2877")),u=Object(r["a"])(a,n,s,!1,null,"0cecaaf5",null);t["default"]=u.exports},ff57:function(e,t,i){}}]);
//# sourceMappingURL=chunk-0c27939a.d4f3b819.js.map