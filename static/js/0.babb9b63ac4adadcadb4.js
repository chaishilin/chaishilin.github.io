webpackJsonp([0],{"Aj/d":function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=r("BO1k"),o=r.n(a),s=r("Lkus");console.log(s.b);var i="ws://"+s.b+":8080/story",l={data:function(){return{websock:null,count:0,testRate:0,msgList:[],labelList:[],choosedLabel:[],setAttr:!0,setLabel:!1,storyContent:!1,userId:"",reloadPet:!1,userCount:0,attributeSet:{left:20,sumNum:20,maxNum:10},attribute:{body:{weight:0,hanger:0,friendly:0,clean:0},mod:{happy:0,angry:0,terrified:0},health:{totalHealth:0,headHealth:0,bodyHealth:0,footHealth:0,tailHealth:0},born:{lucky:0,intelligence:0,strength:0,charm:0}}}},created:function(){this.getUserCount()},updated:function(){var t=document.getElementById("storyLines");t.scrollTop=t.scrollHeight},methods:{load:function(){var t=this;this.msgList=[],this.testRate+=1;var e={},n=[],r=!0,a=!1,s=void 0;try{for(var i,l=o()(this.choosedLabel);!(r=(i=l.next()).done);r=!0){var c=i.value;n.push(c.labelId)}}catch(t){a=!0,s=t}finally{try{!r&&l.return&&l.return()}finally{if(a)throw s}}e.labels=n,e.attribute=this.attribute,e.userId=this.userId,this.$store.dispatch("NewPet",e).then(function(e){200==e.data.code?console.log(e.data.data):t.$message.error("调用失败 "+e.data.msg)}).catch(function(t){return console.log(t),!1}).finally(function(){t.storyContent=!0,t.setAttr=!1,t.setLabel=!1,t.loadStory()})},getUserCount:function(){var t=this;this.$store.dispatch("GetUserCount").then(function(e){200==e.data.code?t.userCount=e.data.data:t.$message.error("调用失败 "+e.data.msg)}).catch(function(t){return console.log(t),!1}).finally(function(){})},initWs:function(){var t=this;this.$store.dispatch("NewUserId",this.attribute).then(function(e){200==e.data.code?t.userId=e.data.data:t.$message.error("调用失败 "+e.data.msg)}).catch(function(t){return!1}).finally(function(){t.websock=new WebSocket(i+"/"+t.userId),t.websock.onopen=function(){console.log("webSocket连接创建。。。")},t.websock.onmessage=t.wsOnMessage,t.websock.onclose=t.wsOnclose,t.load()})},wsOnMessage:function(t){var e=t.data;this.msgList.push(e)},wsOnclose:function(){this.reloadPet=!0,console.log("关闭连接"+e)},changeBornAttribute:function(){this.attributeSet.left=this.attributeSet.sumNum-(this.attribute.born.lucky+this.attribute.born.intelligence+this.attribute.born.strength+this.attribute.born.charm)},loadStory:function(){this.websock.send("")},chooseLabel:function(){var t=this;this.storyContent=!1,this.setAttr=!1,this.setLabel=!0,this.$store.dispatch("GetLabel",{}).then(function(e){if(200==e.data.code){t.labelList=[];var n=!0,r=!1,a=void 0;try{for(var s,i=o()(e.data.data);!(n=(s=i.next()).done);n=!0){var l=s.value;l.chooesd=!1,t.labelList.push(l)}}catch(t){r=!0,a=t}finally{try{!n&&i.return&&i.return()}finally{if(r)throw a}}}else t.$message.error("调用失败 "+e.data.msg)}).catch(function(t){return console.log(t),!1}).finally(function(){})},useLabel:function(t){if(0==t.chooesd){if(this.choosedLabel.length+1>4)return void this.$message.error("最多选择4个属性！");t.chooesd=!0}else t.chooesd=!1;this.choosedLabel=[];var e=!0,n=!1,r=void 0;try{for(var a,s=o()(this.labelList);!(e=(a=s.next()).done);e=!0){var i=a.value;1==i.chooesd&&this.choosedLabel.push(i)}}catch(t){n=!0,r=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw r}}},isUseLabel:function(t){var e=!0,n=!1,r=void 0;try{for(var a,s=o()(this.choosedLabel);!(e=(a=s.next()).done);e=!0){if(t==a.value)return"primary"}}catch(t){n=!0,r=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw r}}return"info"},reload:function(){this.storyContent=!1,this.setAttr=!0,this.setLabel=!1,this.reloadPet=!1,this.getUserCount()}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("猫猫生存模拟器")]),t._v(" "),1==t.setAttr?n("div",{staticClass:"attrbuteSet"},[n("h1",[t._v("请分配属性")]),t._v(" "),n("div",[t._v("幸运值")]),t._v(" "),n("el-input-number",{attrs:{min:0,max:t.attribute.born.lucky+t.attributeSet.left,label:"幸运值"},on:{change:t.changeBornAttribute},model:{value:t.attribute.born.lucky,callback:function(e){t.$set(t.attribute.born,"lucky",e)},expression:"attribute.born.lucky"}}),t._v(" "),n("div",[t._v("智力")]),t._v(" "),n("el-input-number",{attrs:{min:0,max:t.attribute.born.intelligence+t.attributeSet.left,label:"智力"},on:{change:t.changeBornAttribute},model:{value:t.attribute.born.intelligence,callback:function(e){t.$set(t.attribute.born,"intelligence",e)},expression:"attribute.born.intelligence"}}),t._v(" "),n("div",[t._v("体力")]),t._v(" "),n("el-input-number",{attrs:{min:0,max:t.attribute.born.strength+t.attributeSet.left,label:"体力"},on:{change:t.changeBornAttribute},model:{value:t.attribute.born.strength,callback:function(e){t.$set(t.attribute.born,"strength",e)},expression:"attribute.born.strength"}}),t._v(" "),n("div",[t._v("魅力")]),t._v(" "),n("el-input-number",{attrs:{min:0,max:t.attribute.born.charm+t.attributeSet.left,label:"魅力"},on:{change:t.changeBornAttribute},model:{value:t.attribute.born.charm,callback:function(e){t.$set(t.attribute.born,"charm",e)},expression:"attribute.born.charm"}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-tag",[t._v("你将是今天的第"+t._s(t.userCount)+"只小猫咪")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.chooseLabel}},[t._v("选择天赋")])],1):t._e(),t._v(" "),1==t.setLabel?n("div",{staticClass:"selectLabel"},[t._l(t.labelList,function(e,r){return n("el-card",{key:r,staticClass:"box-card",attrs:{label:r,name:r}},[n("el-tag",{attrs:{type:t.isUseLabel(e)},on:{click:function(n){return t.useLabel(e)}}},[t._v(t._s(e.content))])],1)}),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.reload}},[t._v("返回选择属性")]),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.initWs}},[t._v("开始猫生")])],2):t._e(),t._v(" "),1==t.storyContent?n("div",{staticClass:"storyContent"},[n("br"),t._v(" "),n("br"),t._v(" "),n("div",{on:{click:function(e){return t.loadStory()}}},[n("el-card",{staticClass:"storyLines",attrs:{id:"storyLines"}},t._l(t.msgList,function(e){return n("div",{staticClass:"infinite-list-item"},[n("div",{staticClass:"line"},[t._v(t._s(e))]),t._v(" "),n("br")])}),0)],1),t._v(" "),1==t.reloadPet?n("el-button",{attrs:{type:"info"},on:{click:t.reload}},[t._v("重新开始")]):t._e()],1):t._e()])},staticRenderFns:[]};var u=r("VU/8")(l,c,!1,function(t){r("hw/x")},null,null);n.default=u.exports},BO1k:function(t,e,n){t.exports={default:n("fxRn"),__esModule:!0}},fxRn:function(t,e,n){n("+tPU"),n("zQR9"),t.exports=n("g8Ux")},g8Ux:function(t,e,n){var r=n("77Pl"),a=n("3fs2");t.exports=n("FeBl").getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},"hw/x":function(t,e){}});
//# sourceMappingURL=0.babb9b63ac4adadcadb4.js.map