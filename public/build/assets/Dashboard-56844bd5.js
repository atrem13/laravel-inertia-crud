import{B as L}from"./ApplicationLogo-45ebe313.js";import{l as D,s as B,i as v,r as C,o as d,g,d as e,m as u,j as w,x as k,a as n,w as o,n as c,b as r,T as M,c as x,L as b,e as f,t as _,h as N,F as j,H as z}from"./app-eb3f32b2.js";import"./plugin-vue_export-helper-c27b6911.js";const E={class:"relative"},S={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(a){const s=a,t=p=>{l.value&&p.key==="Escape"&&(l.value=!1)};D(()=>document.addEventListener("keydown",t)),B(()=>document.removeEventListener("keydown",t));const i=v(()=>({48:"w-48"})[s.width.toString()]),m=v(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),l=C(!1);return(p,h)=>(d(),g("div",E,[e("div",{onClick:h[0]||(h[0]=y=>l.value=!l.value)},[u(p.$slots,"trigger")]),w(e("div",{class:"fixed inset-0 z-40",onClick:h[1]||(h[1]=y=>l.value=!1)},null,512),[[k,l.value]]),n(M,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o(()=>[w(e("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[r(i),r(m)]]),style:{display:"none"},onClick:h[2]||(h[2]=y=>l.value=!1)},[e("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",a.contentClasses])},[u(p.$slots,"content")],2)],2),[[k,l.value]])]),_:3})]))}},V={__name:"DropdownLink",setup(a){return(s,t)=>(d(),x(r(b),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[u(s.$slots,"default")]),_:3}))}},O={__name:"NavLink",props:["href","active"],setup(a){const s=a,t=v(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(i,m)=>(d(),x(r(b),{href:a.href,class:c(r(t))},{default:o(()=>[u(i.$slots,"default")]),_:3},8,["href","class"]))}},$={__name:"ResponsiveNavLink",props:["href","active"],setup(a){const s=a,t=v(()=>s.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(i,m)=>(d(),x(r(b),{href:a.href,class:c(r(t))},{default:o(()=>[u(i.$slots,"default")]),_:3},8,["href","class"]))}},T={class:"min-h-screen bg-gray-100"},A={class:"bg-white border-b border-gray-100"},F={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},H={class:"flex justify-between h-16"},R={class:"flex"},U={class:"shrink-0 flex items-center"},Y={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},q={class:"hidden sm:flex sm:items-center sm:ml-6"},G={class:"ml-3 relative"},I={class:"inline-flex rounded-md"},J={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},K=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),P={class:"-mr-2 flex items-center sm:hidden"},Q={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},W={class:"pt-2 pb-3 space-y-1"},X={class:"pt-4 pb-1 border-t border-gray-200"},Z={class:"px-4"},ee={class:"font-medium text-base text-gray-800"},te={class:"font-medium text-sm text-gray-500"},se={class:"mt-3 space-y-1"},oe={key:0,class:"bg-white shadow"},ae={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ne={__name:"Authenticated",setup(a){const s=C(!1);return(t,i)=>(d(),g("div",null,[e("div",T,[e("nav",A,[e("div",F,[e("div",H,[e("div",R,[e("div",U,[n(r(b),{href:t.route("dashboard")},{default:o(()=>[n(L,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",Y,[n(O,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[f(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",q,[e("div",G,[n(S,{align:"right",width:"48"},{trigger:o(()=>[e("span",I,[e("button",J,[f(_(t.$page.props.auth.user.name)+" ",1),K])])]),content:o(()=>[n(V,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[f(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",P,[e("button",{onClick:i[0]||(i[0]=m=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(d(),g("svg",Q,[e("path",{class:c({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:c({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:c([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",W,[n($,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[f(" Dashboard ")]),_:1},8,["href","active"])]),e("div",X,[e("div",Z,[e("div",ee,_(t.$page.props.auth.user.name),1),e("div",te,_(t.$page.props.auth.user.email),1)]),e("div",se,[n($,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[f(" Log Out ")]),_:1},8,["href"])])])],2)]),t.$slots.header?(d(),g("header",oe,[e("div",ae,[u(t.$slots,"header")])])):N("",!0),e("main",null,[u(t.$slots,"default")])])]))}},re=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ",-1),ie=e("div",{class:"py-12"},[e("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},[e("div",{class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},[e("div",{class:"p-6 bg-white border-b border-gray-200"}," You're logged in! ")])])],-1),ue={__name:"Dashboard",setup(a){return(s,t)=>(d(),g(j,null,[n(r(z),{title:"Dashboard"}),n(ne,null,{header:o(()=>[re]),default:o(()=>[ie]),_:1})],64))}};export{ue as default};
