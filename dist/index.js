var e=require("mongoose"),o=new e.Schema({name:String,email:String}),r=e.model("Blog",o);exports.User=r,exports.hello=function(e){return void 0===e&&(e="Wilson4"),"Hello, "+e};
//# sourceMappingURL=index.js.map
