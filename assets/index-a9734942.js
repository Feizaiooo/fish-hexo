import{d as P,c as x,b as e,f as i,w as r,g as C,i as w,j as y,k as u,t as f,n as S,r as b,a as V,o as j,F as H,A as R,N as U,p as Y,l as q,_ as G}from"./index-0039d207.js";import{a as $}from"./common-6765625b.js";import{s as k}from"./request-d21f72ef.js";import{f as J}from"./filter-fe6bb204.js";const E={getBikeList:o=>k({url:"/bike/list",method:"get",params:o}),insertBikeAmout:o=>k({url:"/bike/insert",method:"post",data:o}),updateBike:o=>k({url:"/bike/update",method:"post",data:o}),deleteBike:o=>k({url:"/bike/delete",method:"post",data:o})},K={class:"p-4 h-full flex flex-col"},O={class:"grid grid-cols-3 gap-4 flex-0 text-center"},Q=e("div",{class:"font-bold py-4 flex-none"},"历史记录",-1),Z={class:"flex-auto overflow-hidden"},tt=P({__name:"bike-report",props:{bikeList:{type:Array,default:()=>[]}},emits:["insert-bike-amount"],setup(o,{emit:I}){const _=o,v=a=>I("insert-bike-amount",a),g=a=>J.parseTime(parseInt(a),"{y}-{m}-{d} {h}:{i}:{s}");return(a,c)=>{const d=w("el-button"),l=w("el-table-column"),h=w("el-table");return y(),x("div",K,[e("div",O,[i(d,{class:"bike-button bg-purple-400 text-white",onClick:c[0]||(c[0]=C(n=>v(10),["stop","prevent"]))},{default:r(()=>[u(" add 10 ")]),_:1}),i(d,{class:"bike-button bg-black text-white",onClick:c[1]||(c[1]=C(()=>v(-10),["stop","prevent"]))},{default:r(()=>[u(" reduce 10 ")]),_:1}),i(d,{class:"bike-button bg-yellow-300"},{default:r(()=>[u("3")]),_:1})]),Q,e("div",Z,[i(h,{data:_.bikeList,class:"w-full h-full rounded-xl"},{default:r(()=>[i(l,{prop:"date",label:"Date",width:"230"},{default:r(n=>[u(f(g(n.row.date))+"（"+f(n.row.week)+"） ",1)]),_:1}),i(l,{prop:"amount",label:"Amount","header-align":"right",align:"right"},{default:r(n=>[e("div",{class:S(["font-bold",n.row.amount>0?"text-green-500":"text-red-500"])},f(n.row.amount>0?"+":"")+f(n.row.amount),3)]),_:1})]),_:1},8,["data"])])])}}}),A=o=>(Y("data-v-8d085b84"),o=o(),q(),o),et={class:"tab-slider flex flex-col bg-gray-100"},st={class:"flex-0 flex justify-center items-center my-2"},ot=["onClick"],nt={class:"bike-tab bike-content py-4 px-8"},at={class:"bike-amount"},lt=A(()=>e("span",{class:"text-5xl"},"￥",-1)),it=A(()=>e("div",{class:"text-2xl font-bold"},[e("div",null,"Expand Your"),e("div",null,"Stock Portfolio.")],-1)),rt=A(()=>e("div",{class:"text-base"},[e("div",null,"Invest in companies and ETFs without purchasing a whole share.")],-1)),ct={class:"text-center"},dt=["src"],ut={class:"bike-tab"},_t=P({__name:"index",setup(o){const I=t=>$.getImg(t),_=b(!1),v=b(0),g=b([]),a=V({totalCounts:0,curPage:1,totalPages:10}),c=async()=>{const t={startDate:"",endDate:"",page:a.curPage,pageSize:10},{data:s}=await E.getBikeList(t);s.resultCode==="01"&&(g.value=s.resultData.bikeList||[],a.curPage=s.resultData.pageInfo.curPage,a.totalCounts=s.resultData.pageInfo.totalCounts,a.totalPages=s.resultData.pageInfo.totalPages,v.value=s.resultData.sumCount)},d=async t=>{if(!t)return;_.value=!0;const s={date:new Date,amount:t,week:$.getWeekCharacter(new Date)},{data:p}=await E.insertBikeAmout(s);p.resultCode==="01"&&c(),_.value=!1},l=b(),h=b(0),n=b(0),N=.2,M=window.innerWidth*N;let B=0,T=0,X=0;const W=t=>{T=t.touches[0].clientX,B=t.touches[0].clientX},z=t=>{const s=t.touches[0].clientX,p=s-B;l.value.scrollLeft-=p,B=s,X=t.touches[0].clientX},F=()=>{const t=X-T;l.value.scrollLeft=0,Math.abs(t)>=M&&(t>0?L(n.value-1):L(n.value+1))},L=t=>{t>=0&&t<h.value&&(n.value=t)},D=t=>{t.stopPropagation()};return j(()=>{c(),l.value.addEventListener("touchstart",W),l.value.addEventListener("touchmove",z),l.value.addEventListener("touchend",F),h.value=document.getElementsByClassName("bike-tab").length}),(t,s)=>{const p=w("el-button");return y(),x("div",et,[e("div",st,[(y(!0),x(H,null,R(h.value,m=>(y(),x("div",{key:m,class:S(["h-1 w-16 rounded-lg mx-2 transition-colors",n.value+1===m?"bg-black":"bg-white "]),onClick:bt=>L(m-1)},null,10,ot))),128))]),e("div",{class:"tab-slider-container flex-auto",style:U({transform:`translateX(-${n.value*100}%)`}),ref_key:"slider",ref:l},[e("div",nt,[e("div",at,[e("div",null,[u(f(v.value),1),lt]),it,rt,e("div",ct,[e("img",{class:"bike-img",width:"120",src:I("自動販売機.png "),alt:"自動販売機"},null,8,dt)])]),e("div",{class:"bike-insert",onTouchmove:D,onTouchstart:D,onTouchend:D},[i(p,{class:"bike-button bg-black text-white",onClick:s[0]||(s[0]=C(m=>d(-2),["stop","prevent"])),loading:_.value},{default:r(()=>[u("reduce")]),_:1},8,["loading"]),i(p,{class:"bike-button bg-gray-200",onClick:s[1]||(s[1]=C(m=>d(2),["stop","prevent"])),loading:_.value},{default:r(()=>[u("add")]),_:1},8,["loading"])],32)]),e("div",ut,[i(tt,{"bike-list":g.value,onInsertBikeAmount:d},null,8,["bike-list"])])],4)])}}});const gt=G(_t,[["__scopeId","data-v-8d085b84"]]);export{gt as default};