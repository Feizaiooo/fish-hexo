import{s as $}from"./request-d21f72ef.js";import{d as T,o as J,r as g,j as o,c as i,b as l,t as L,s as oe,e as P,F as B,A as ee,k as se,n as U,a as F,E as W,u as q,f as b,w as M,v as G,O as X,i as R,_ as te,p as ie,l as ne,B as de,M as re}from"./index-0039d207.js";import{a as ce}from"./common-6765625b.js";import{f as ue}from"./filter-fe6bb204.js";const j={getHolidayList:t=>$({url:"/holiday/list",method:"get",params:t}),insertHoliday:t=>$({url:"/holiday/save",method:"post",data:t}),deleteHoliday:t=>$({url:"/holiday/delete",method:"post",data:t})},fe={uploadFile:t=>{const d=new FormData;return d.append("file",t),$({url:"/file/upload",method:"post",data:d})},uploadFilePublic:(t,d)=>{const s=new FormData;return s.append("file",t),$({url:"/public/file/upload",method:"post",data:s})}},pe={class:"w-24 flex-shrink-0"},he={class:"flex-auto ml-10 overflow-hidden overflow-x-auto text-right whitespace-nowrap"},me={key:1,class:"w-20 h-20 rounded-lg text-right inline-block border border-gray-400 relative"},_e=l("div",{class:"absolute w-full h-full bg-slate-400 opacity-60 z-10"},null,-1),ye=l("div",{class:"absolute top-1/2 left-1/2 text-white z-20 -translate-x-1/2 -translate-y-1/2"}," edit ",-1),ve=[_e,ye],ge=["src"],E=T({__name:"holiday-cell",props:{label:{type:String,default:""},value:{type:[String,Array]},isValueSlot:{type:Boolean,default:!1},border:{type:Boolean,default:!1},isValueDate:{type:Boolean,default:!1},isImg:Boolean,canUpload:Boolean,imgList:{type:Array,default:[]}},emits:["on-upload-success"],setup(t,{emit:d}){const s=t;J(()=>{});const a=g(),_=g(!1),e=u=>ue.parseTime(u,"{y}-{m}-{d}"),y=async u=>{const f=u.target.files;if(!(f!=null&&f.length))return;_.value=!0;const{data:p}=await fe.uploadFile(f[0]);p.resultCode=="01"&&d("on-upload-success",p.resultData.file.path),_.value=!1},r=()=>{a.value.click()};return(u,w)=>(o(),i("div",{class:U(["flex flex-row justify-between px-2 py-4 items-center",{"border-b-orange-200 border-b":s.border}])},[l("div",pe,L(s.label),1),l("div",he,[s.isValueSlot?oe(u.$slots,"default",{key:0}):t.isImg?(o(),i("div",me,[l("input",{class:"hidden",type:"file",onChange:y,ref_key:"dragFileRef",ref:a},null,544),t.canUpload&&t.imgList.length?(o(),i("div",{key:0,onClick:r},ve)):P("",!0),(o(!0),i(B,null,ee(t.imgList,f=>(o(),i("img",{src:f,alt:"",key:f},null,8,ge))),128))])):(o(),i(B,{key:2},[se(L((s.isValueDate?e(s.value):s.value)||"暂无"),1)],64))])],2))}}),xe={class:"flex-shrink-0"},be=["src"],we={key:1,class:"item-img"},De={class:"item-content px-2 w-full flex-auto"},ke={class:"font-bold text-lg"},Se={class:"flex flex-row text-zinc-500"},Ie={class:"flex justify-between items-center"},Ce={key:0},$e={key:1},Le={class:"text-right border-b border-b-zinc-200"},Ue=T({__name:"holiday-item",props:{itemInfo:null},emits:["on-click","onSave","on-delete"],setup(t,{expose:d,emit:s}){const a=t,_=n=>ce.getImg(n),e=F({id:0,holidayName:"",startDate:"",description:"",uploadUri:"",updatedDate:"",createdDate:""}),y=W(()=>[_(e.uploadUri)]),r=g(!1);J(()=>{c()});const u=()=>{console.log("1",a.itemInfo),r.value=!1,m.value=!1,setTimeout(()=>{h()},0)};let w=null;const f=W(()=>p.time<0?"text-red-600":"text-sky-600"),p=F({str:"",time:0}),c=()=>{h(),w&&clearInterval(w),w=setInterval(()=>{h()},60*1e3)},h=()=>{if(!a.itemInfo.startDate)p.str="",p.time=0;else{const n=+new Date,x=(+new Date(a.itemInfo.startDate)-n)/1e3;let D=Math.floor(Math.abs(x)/60/60/24),C;D<10&&D>=0?C="0"+D:C=D;let k,V=Math.floor(Math.abs(x)/60/60%24);V<10&&V>=0?k="0"+V:k=V;let z,A=Math.floor(Math.abs(x)/60%60);A<10&&A>=0?z="0"+A:z=A;let N=Math.floor(Math.abs(x)%60),O;N<10&&N>=0?O="0"+N:O=N,p.str=`${x<0?"-":""}${C}天${k}时${z}分${O}`,p.time=x}},v=()=>{Q(a.itemInfo),K(m.value?"close":"open"),s("on-click",a.itemInfo)},H=()=>{Q(a.itemInfo),r.value=!r.value},S=()=>{r.value=!1,c(),s("onSave",e)},m=g(!1),K=n=>{n==="open"?m.value=!0:m.value=!1},ae=n=>{e.uploadUri=n},le=()=>{s("on-delete",e)},Q=n=>{e.createdDate=n.createdDate,e.description=n.description,e.holidayName=n.holidayName,e.id=n.id,e.startDate=n.startDate,e.updatedDate=n.updatedDate,e.uploadUri=n.uploadUri};return d({handleDrawer:K,init:u}),(n,I)=>{const x=R("ArrowUp"),D=R("el-icon"),C=R("ArrowDown");return o(),i("div",{class:U(["flex-col flex",{"bg-slate-100":!a.itemInfo.id}])},[l("div",{class:"holiday-item flex flex-row items-center flex-0 border-b border-b-zinc-200",onClick:v},[l("div",xe,[a.itemInfo.uploadUri?(o(),i("img",{key:0,class:"item-img",src:_(a.itemInfo.uploadUri),alt:""},null,8,be)):(o(),i("div",we,"无图"))]),l("div",De,[l("div",ke,L(a.itemInfo.holidayName),1),l("div",Se,[l("div",null,"Date: "+L(a.itemInfo.startDate),1)]),l("div",Ie,[l("div",{class:U(["font-bold text-lg",q(f)])},L(p.str),3),m.value?(o(),i("div",Ce,[b(D,null,{default:M(()=>[b(x)]),_:1})])):(o(),i("div",$e,[b(D,null,{default:M(()=>[b(C)]),_:1})]))])])]),l("div",{class:U(["holiday-drawer flex-auto",{"drawer-show":m.value}])},[l("div",Le,[l("button",{class:"text-sm p-2 bg-red-300 text-white rounded-lg w-20 m-2",onClick:le}," 删除 "),r.value?(o(),i(B,{key:1},[l("button",{class:"text-sm p-2 bg-orange-300 text-white rounded-lg w-20 m-2",onClick:H}," 取消 "),l("button",{class:"text-sm p-2 bg-green-300 text-white rounded-lg w-20 m-2",onClick:S}," 保存 ")],64)):(o(),i("button",{key:0,class:"text-sm p-2 bg-orange-300 text-white rounded-lg w-20 m-2",onClick:H}," 修改 "))]),b(E,{label:"Name",value:e.holidayName,isValueSlot:r.value},{default:M(()=>[G(l("input",{type:"text","onUpdate:modelValue":I[0]||(I[0]=k=>e.holidayName=k),class:"holiday-input"},null,512),[[X,e.holidayName]])]),_:1},8,["value","isValueSlot"]),b(E,{label:"Date",value:e.startDate,isValueSlot:r.value},{default:M(()=>[G(l("input",{type:"date","onUpdate:modelValue":I[1]||(I[1]=k=>e.startDate=k),class:"holiday-input"},null,512),[[X,e.startDate]])]),_:1},8,["value","isValueSlot"]),b(E,{label:"图片",value:e.uploadUri,isImg:"",canUpload:r.value,imgList:q(y),onOnUploadSuccess:ae},null,8,["value","canUpload","imgList"])],2)],2)}}});const Y=te(Ue,[["__scopeId","data-v-d89c18cd"]]),He=t=>(ie("data-v-6f9d2ba6"),t=t(),ne(),t),Ve=He(()=>l("div",{class:"my-2 py-1 px-4 font-bold text-xl"},"Holiday",-1)),Ae=T({__name:"holiday-header",emits:["on-add"],setup(t,{expose:d,emit:s}){const a=g(!0),_=y=>{a.value=!a.value},e=()=>{s("on-add")};return d({handleHidden:_}),(y,r)=>(o(),i("div",{class:U(["w-full flex justify-between items-center holiday-header h-12",{"header-hidden":!a.value}])},[Ve,l("div",{class:"bg-slate-200 my-2 py-1 px-4 rounded-l-2xl text-sm font-bold",onClick:e}," ADD ")],2))}});const Z=te(Ae,[["__scopeId","data-v-6f9d2ba6"]]),Ne={class:"max-w-5xl h-full overflow-x-hidden"},Me=["infinite-scroll-disabled"],Be={key:0,class:"text-center p-4"},Fe={key:1,class:"text-center p-4"},je=T({__name:"index",setup(t){J(()=>{u()});const d=F({page:1,pageSize:6}),s=g(!1),a=g(!1),_=()=>{console.log(1),s.value=!0,d.page++,u()},e=F({holidayList:[]}),y=g(Y),r=g(Z),u=async()=>{const{data:c}=await j.getHolidayList(d);if(c.resultCode==="01"){const{holidayList:h,pageInfo:v}=c.resultData;e.holidayList=e.holidayList.concat(h||[]),s.value=!1,a.value=v.totalCounts===e.holidayList.length}},w=()=>{e.holidayList.unshift({id:0,holidayName:"",startDate:"",uploadUri:"",description:""}),y.value.map(c=>{c.init()})},f=(c,h)=>{j.deleteHoliday({id:c.id}),e.holidayList.splice(h,1),y.value.map(v=>{v.init()})},p=async(c,h)=>{const{data:v}=await j.insertHoliday(c);v.resultCode==="01"&&(e.holidayList[h]=c,d.page=1,e.holidayList=[],u())};return(c,h)=>{const v=re("infinite-scroll");return o(),i("div",Ne,[b(Z,{ref_key:"HolidayHeaderRef",ref:r,onOnAdd:w},null,512),G((o(),i("div",{"infinite-scroll-disabled":a.value,"infinite-scroll-immediate":!1},[(o(!0),i(B,null,ee(q(e).holidayList,(H,S)=>(o(),de(Y,{ref_for:!0,ref_key:"HolidayItemRef",ref:y,key:S,"item-info":H,onOnDelete:m=>f(m,S),onOnSave:m=>p(m,S)},null,8,["item-info","onOnDelete","onOnSave"]))),128))],8,Me)),[[v,_]]),s.value?(o(),i("p",Be,"Loading... ")):P("",!0),a.value?(o(),i("p",Fe,"没有更多了")):P("",!0)])}}});export{je as default};
