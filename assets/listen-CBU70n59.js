import{J as c,H as m,V as s,K as k}from"./VLayout-CNBKDvqZ.js";import{d as b,o as V,c as g,w as e,a as o,am as l,aq as d,b as v}from"./index-BZLuYFuO.js";const C=b({__name:"listen",setup(w){let n=0;const r=["出产","水果","月份","山坡","枝叶","展开","五光十色","好客"];function u(){n=0,i("准备好了，就点击“听写下一个”开始听写吧！")}function f(){if(n===0)return u();i(r[n-1])}function p(){let a=n<r.length?r[n++]:"真棒，已经全部听写完成啦，可以点击“重新开始”，再听一次哦！";i(a)}function i(a){a=encodeURIComponent(a),new Audio("https://nls-gateway.aliyuncs.com/stream/v1/tts?appkey=hzu1IYKCtKAgo7ko&token=3b65c22dfdee4fb493bacc966706e27b&text="+a+"&format=wav&voice=ruilin").play()}return(a,t)=>(V(),g(k,null,{default:e(()=>[o(m,{color:"teal-lighten-3",comfortable:""},{default:e(()=>[o(c,null,{default:e(()=>t[0]||(t[0]=[l("11 葡萄沟")])),_:1})]),_:1}),o(v,{class:"pa-4 mt-16","min-height":"50px"},{default:e(()=>[o(s,{block:"",stacked:"",variant:"elevated",color:"red",onClick:u},{default:e(()=>t[1]||(t[1]=[l("重新开始")])),_:1}),t[4]||(t[4]=d("br",null,null,-1)),o(s,{block:"",stacked:"",variant:"outlined",color:"warning",onClick:f},{default:e(()=>t[2]||(t[2]=[l("没听清，请再说一次")])),_:1}),t[5]||(t[5]=d("br",null,null,-1)),o(s,{block:"",stacked:"",variant:"elevated",color:"green",onClick:p},{default:e(()=>t[3]||(t[3]=[l("听写下一个")])),_:1})]),_:1})]),_:1}))}});export{C as default};