import{d as E,B as m,o as k,c as C,w as o,a as e,z as n,C as A,A as u,b as g}from"./index-WtRN_LGj.js";import{f as b,g as r,i as v,V as y,h as V}from"./VLayout-DDORu5QI.js";const K=E({__name:"listen",setup(w){const p=m();let l=0;const s=["山脚","当作","前面","毛手毛脚","晴朗","枯草","正好","头头是道","清早","现在","将来","风清月朗","大雪纷飞","枝头","脚尖","知道","道路","报道","跑道","朗朗上口","阵地","阵雨","阵脚","明朗","干枯","枯树","了却","将心比心","冷却","第一","门第","将要","难过","难道","纷纷","一言难尽"];function d(){l=0,i("准备好了，就点击“听写下一个”开始听写吧！")}function c(){if(l===0)return d();i(s[l-1])}function B(){let a=l<s.length?s[l++]:"真棒，已经全部听写完成啦，可以点击“重新开始”，再听一次哦！";i(a)}function i(a){console.log("play: "+a),a=encodeURIComponent(a),new Audio("https://nls-gateway.aliyuncs.com/stream/v1/tts?appkey=hzu1IYKCtKAgo7ko&token=c4afc79391c64b429e651feaccb1f644&text="+a+"&format=wav&voice=ruilin").play().catch(f=>{alert("audio.play() err: "+f.message)})}return(a,t)=>(k(),C(V,null,{default:o(()=>[e(y,{color:"teal-lighten-3",comfortable:""},{default:o(()=>[e(b,null,{default:o(()=>t[1]||(t[1]=[n("11 葡萄沟")])),_:1}),e(r,{icon:""},{default:o(()=>[e(v,{onClick:t[0]||(t[0]=f=>A(p).push("/"))},{default:o(()=>t[2]||(t[2]=[n("mdi-home")])),_:1})]),_:1})]),_:1}),e(g,{class:"pa-4 mt-16","min-height":"50px"},{default:o(()=>[t[6]||(t[6]=u("audio",{controls:"",src:"https://nls-gateway.aliyuncs.com/stream/v1/tts?appkey=hzu1IYKCtKAgo7ko&token=c4afc79391c64b429e651feaccb1f644&text=%E5%87%86%E5%A4%87%E5%A5%BD%E4%BA%86%EF%BC%8C%E5%B0%B1%E7%82%B9%E5%87%BB%E2%80%9C%E5%90%AC%E5%86%99%E4%B8%8B%E4%B8%80%E4%B8%AA%E2%80%9D%E5%BC%80%E5%A7%8B%E5%90%AC%E5%86%99%E5%90%A7%EF%BC%81&format=wav&voice=ruilin"},null,-1)),e(r,{block:"",stacked:"",variant:"elevated",color:"red",onClick:d},{default:o(()=>t[3]||(t[3]=[n("重新开始")])),_:1}),t[7]||(t[7]=u("br",null,null,-1)),e(r,{block:"",stacked:"",variant:"outlined",color:"warning",onClick:c},{default:o(()=>t[4]||(t[4]=[n("没听清，请再说一次")])),_:1}),t[8]||(t[8]=u("br",null,null,-1)),e(r,{block:"",stacked:"",variant:"elevated",color:"green",onClick:B},{default:o(()=>t[5]||(t[5]=[n("听写下一个")])),_:1})]),_:1})]),_:1}))}});export{K as default};
