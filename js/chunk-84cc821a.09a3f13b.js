(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84cc821a"],{"12b2":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isLoading?r("Spinner"):r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:t.restaurant.name},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"categoryId"}},[t._v("Category")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.restaurant,"categoryId",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("--請選擇--")]),t._l(t.categories,function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tel"}},[t._v("Tel")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:t.restaurant.tel},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"tel",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:t.restaurant.address},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"address",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"opening-hours"}},[t._v("Opening Hours")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:t.restaurant.openingHours},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"openingHours",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:t.restaurant.description},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),t.restaurant.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.restaurant.image,width:"200",height:"200"}}):t._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(t._s(t.isProcessing?"處理中...":"送出"))])])},n=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("96cf"),r("3b8d")),i=r("bd86"),o=r("be6c"),u=r("2fa3"),c=r("2375");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach(function(e){Object(i["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var m={components:{Spinner:c["a"]},props:{initialRestaurant:{type:Object,default:function(){return{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{restaurant:{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},categories:[],isLoading:!0}},watch:{initialRestaurant:function(t){this.restaurant=d({},this.restaurant,{},t)}},created:function(){this.fetchCategories(),this.restaurant=d({},this.restaurant,{},this.initialRestaurant)},methods:{fetchCategories:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].categories.get();case 3:if(e=t.sent,r=e.data,a=e.statusText,"OK"===a){t.next=8;break}throw new Error(a);case 8:this.categories=r.categories,this.isLoading=!1,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),u["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"});case 15:case"end":return t.stop()}},t,this,[[0,12]])}));function e(){return t.apply(this,arguments)}return e}(),handleFileChange:function(t){var e=t.target.files;if(e.length){var r=window.URL.createObjectURL(e[0]);this.restaurant.image=r}},handleSubmit:function(t){if(this.restaurant.name)if(this.restaurant.categoryId){var e=t.target,r=new FormData(e);this.$emit("after-submit",r)}else u["a"].fire({type:"warning",title:"請選擇餐廳類別"});else u["a"].fire({icon:"warning",title:"請填寫餐廳名稱"})}}},p=m,g=r("2877"),f=Object(g["a"])(p,a,n,!1,null,null,null);e["a"]=f.exports},2743:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminRestaurantForm",{attrs:{"is-processing":t.isProcessing},on:{"after-submit":t.handleAfterSubmit}})],1)},n=[],s=(r("96cf"),r("3b8d")),i=r("12b2"),o=r("be6c"),u=r("2fa3"),c={components:{AdminRestaurantForm:i["a"]},data:function(){return{isProcessing:!1}},methods:{handleAfterSubmit:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var r,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isProcessing=!0,t.next=4,o["a"].restaurants.create({formData:e});case 4:if(r=t.sent,a=r.data,n=r.statusText,"OK"===n&&"success"===a.status){t.next=9;break}throw new Error(n);case 9:this.$router.push({name:"admin-restaurants"}),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),this.isProcessing=!1,u["a"].fire({icon:"error",title:"無法建立餐廳，請稍後再試"});case 16:case"end":return t.stop()}},t,this,[[0,12]])}));function e(e){return t.apply(this,arguments)}return e}()}},l=c,d=r("2877"),m=Object(d["a"])(l,a,n,!1,null,null,null);e["default"]=m.exports},be6c:function(t,e,r){"use strict";r("7f7f");var a=r("2fa3");e["a"]={categories:{get:function(){return a["b"].get("/admin/categories")},getSingle:function(t){var e=t.categoryId;return a["b"].get("/admin/categories/".concat(e))},create:function(t){var e=t.newCategoryName;return a["b"].post("/admin/categories",{name:e})},delete:function(t){var e=t.categoryId;return a["b"].delete("/admin/categories/".concat(e))},update:function(t){var e=t.categoryId,r=t.name;return a["b"].put("/admin/categories/".concat(e),{name:r})}},restaurants:{getDetail:function(t){var e=t.restaurantId;return a["b"].get("/admin/restaurants/".concat(e))},create:function(t){var e=t.formData;return a["b"].post("/admin/restaurants",e)},get:function(){return a["b"].get("/admin/restaurants")},delete:function(t){var e=t.restaurantId;return a["b"].delete("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,r=t.formData;return a["b"].put("/admin/restaurants/".concat(e),r)}},users:{get:function(){return a["b"].get("/admin/users")},changeRole:function(t){var e=t.userId,r=t.isAdmin;return a["b"].put("/admin/users/".concat(e),{isAdmin:r})}}}}}]);
//# sourceMappingURL=chunk-84cc821a.09a3f13b.js.map