import{t as L,j as t,a3 as y,r as c,ad as I,F as q,a5 as S,a9 as b,ao as J,Z as C,aw as k,ax as A,an as N,$ as U,a8 as M,ap as H,ay as B,az as O,a4 as ee,aA as te}from"./index-BfY1HAtW.js";import{T as ne,a as _,B as se,D as oe,I as re,b as ae,S as F,u as ie,P as le,v as W}from"./App-CFG9_6If.js";import{S as ce}from"./Star-BrZzR8z8.js";import{N as ue,B as de,D as xe}from"./NoticeCard-Prij66kQ.js";import{S as pe}from"./index-BsCPWOcG.js";import{l as v,M as ge,B as he,a as fe,C as me,b as be,u as je}from"./BaseTile-CV3Q22mf.js";import{D as Ce}from"./DialogTitle-D0yi78DQ.js";import{C as ve}from"./Close-ogR4TO3L.js";import{S as ye}from"./Slider-YIirVQl0.js";import{T as Re,a as z}from"./ToggleButtonGroup-CoO30dmj.js";import{t as Se}from"./index-BB4PFpcb.js";const Te=L([t.jsx("circle",{cx:"12",cy:"17",r:"4"},"0"),t.jsx("path",{d:"M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08"},"1")],"CompassCalibration"),De=L(t.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),Ie=L(t.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),Me=({homeTab:e,onChangeTab:s})=>{const{t:n}=y(),{collections:o}=c.useContext(I);return t.jsxs(ne,{value:e,onChange:(l,i)=>s(i,!0),sx:_e,variant:"scrollable",scrollButtons:!0,children:[t.jsx(_,{iconPosition:"start",icon:t.jsx(Te,{}),label:n("附近"),value:"nearby",disableRipple:!0}),t.jsx(_,{iconPosition:"start",icon:t.jsx(ce,{}),label:n("常用"),value:"saved",disableRipple:!0}),t.jsx(_,{iconPosition:"start",icon:t.jsx(se,{}),label:n("Collections"),value:"collections",disableRipple:!0}),o.map((l,i)=>t.jsx(_,{label:l.name,value:l.name,disableRipple:!0},`collection-${i}`))]})},ke=(e,s)=>{if(e==="saved"||e==="nearby"||e==="collections")return!0;for(let n=0;n<s.length;++n)if(e===s[n].name)return!0;return!1},_e={background:e=>e.palette.background.default,minHeight:"36px","& .MuiTab-root":{textTransform:"none",alignItems:"center",justifyContent:"center",paddingTop:0,paddingBottom:0,minHeight:"32px"},"& .MuiTabs-flexContainer":{justifyContent:"flex-start"}};v.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"});v.Icon.Default.include({_needsInit:!0,_getIconUrl:function(e){var s=this.options.imagePath||v.Icon.Default.imagePath||"";return this._needsInit&&this._initializeOptions(s),s+v.Icon.prototype._getIconUrl.call(this,e)},_initializeOptions:function(e){this._setOptions("icon",G,e),this._setOptions("shadow",G,e),this._setOptions("popup",V),this._setOptions("tooltip",V),this._needsInit=!1},_setOptions:function(e,s,n){var o=this.options,l=o.classNamePrefix,i=s(l+e,n);for(var r in i)o[e+r]=o[e+r]||i[r]}});function G(e,s){var n=v.DomUtil.create("div",e,document.body),o=Oe(n),l=we(o,s),i=T(n,"width"),r=T(n,"height"),u=T(n,"margin-left"),a=T(n,"margin-top");return n.parentNode.removeChild(n),{Url:l[0],RetinaUrl:l[1],Size:[i,r],Anchor:[-u,-a]}}function V(e){var s=v.DomUtil.create("div",e,document.body),n=T(s,"margin-left"),o=T(s,"margin-top");return s.parentNode.removeChild(s),{Anchor:[n,o]}}function we(e,s){for(var n=/url\(['"]?([^"']*?)['"]?\)/gi,o=[],l=n.exec(e);l;)o.push(s?He(l[1]):l[1]),l=n.exec(e);return o}function He(e){return e.substr(e.lastIndexOf("/")+1)}function T(e,s){return parseInt(E(e,s),10)}function E(e,s){return v.DomUtil.getStyle(e,s)||v.DomUtil.getStyle(e,Be(s))}function Oe(e){var s=E(e,"background-image");return s&&s!=="none"?s:E(e,"cursor")}function Be(e){return e.replace(/-(\w)/g,function(s,n){return n.toUpperCase()})}const $e=q.forwardRef(({range:e,value:s,onChange:n},o)=>{const l=c.useRef(null),i=c.useRef(null),r=c.useRef(s).current,{geolocation:u}=c.useContext(S),[a,d]=c.useState(null);c.useImperativeHandle(o,()=>a,[a]);const g=c.useCallback(()=>{var x,p;a!==null&&((x=l.current)==null||x.setLatLng(a.getCenter()),(p=i.current)==null||p.setLatLng(a.getCenter()),n(a.getCenter()))},[n,a]);return c.useEffect(()=>(a==null||a.on("move",g),()=>{a==null||a.off("move",g)}),[g,a]),c.useEffect(()=>{var p;const x=(p=i.current)==null?void 0:p.getBounds();x&&(a==null||a.fitBounds(x,{animate:!1}))},[a,e]),t.jsxs(ge,{style:{height:"100%",position:"relative"},center:r,zoom:Ee,scrollWheelZoom:!1,ref:d,children:[t.jsx(he,{}),t.jsx(fe,{position:r,ref:l}),t.jsx(me,{center:r,radius:e,ref:i}),t.jsx(Le,{map:a,onChange:n}),t.jsx(be,{onClick:()=>{a==null||a.setView(u.current,a==null?void 0:a.getZoom(),{animate:!0})}})]})}),Ee=14,Le=({map:e,onChange:s})=>(je("click",n=>{e.setView(n.latlng,e.getZoom(),{animate:!0}),s(n.latlng)}),null),Ue=({open:e,onClose:s})=>{const{geolocation:n,manualGeolocation:o,searchRange:l,setManualGeolocation:i,setSearchRange:r}=c.useContext(S),{t:u}=y(),[a,d]=c.useState({geolocation:o??n.current,searchRange:l}),g=c.useCallback(()=>{i(a.geolocation),r(a.searchRange),s()},[a,i,r,s]),x=c.useCallback(h=>{d(m=>({...m,geolocation:h}))},[]),p=c.useCallback(h=>{d(m=>({...m,searchRange:h}))},[]),f=c.useCallback(h=>{const{distance:m,unit:j}=J(h);return`${m}${u(j)}`},[u]);return t.jsxs(oe,{open:e,onClose:g,sx:Fe,children:[t.jsxs(Ce,{sx:Pe,children:[u("自訂搜尋範圍"),t.jsx(re,{onClick:g,children:t.jsx(ve,{})})]}),t.jsxs(ae,{children:[t.jsx($e,{range:a.searchRange,value:a.geolocation,onChange:x}),t.jsx(b,{sx:{px:4,py:5},children:t.jsx(ye,{sx:Ae,"aria-label":"Range",value:$(a.searchRange,w,R),valueLabelDisplay:"on",marks:R.map((h,m)=>({label:f(w[m]),value:h})),min:R[0],max:R[R.length-1],step:250,scale:h=>$(h,R,w),valueLabelFormat:h=>f(h),onChange:(h,m)=>p($(m,R,w))})})]})]})},Fe={"& .MuiPaper-root":{width:"100%",height:"calc(100dvh - 100px)"},"& .MuiDialogContent-root":{p:0,display:"flex",flexDirection:"column"}},Pe={backgroundColor:e=>e.palette.background.default,color:e=>e.palette.primary.main,display:"flex",justifyContent:"space-between"},Ae={"& .MuiSlider-mark":{backgroundColor:"#bfbfbf",height:8}},R=[0,1e3,2e3,3e3,4e3,5e3],w=[20,100,200,400,2e3,4e3],$=(e,s,n)=>{if(e<=s[0])return n[0];for(let o=1;o<s.length;++o)if(e<=s[o])return n[o-1]+(e-s[o-1])*(n[o]-n[o-1])/(s[o]-s[o-1]);return n[n.length-1]},Ne=()=>{const{t:e}=y(),{searchRange:s,setSearchRange:n}=c.useContext(S),[o,l]=c.useState(!1);return t.jsxs(b,{sx:We,children:[t.jsxs(C,{variant:"caption",children:[e("搜尋範圍（米）"),":"]}),t.jsxs(Re,{value:k.includes(s)?s:"custom",onChange:(i,r)=>{k.includes(r)?n(r):l(!0)},"aria-label":"search range",size:"small",exclusive:!0,children:[k.map(i=>{const{distance:r}=J(i);return t.jsx(z,{sx:Z,disableRipple:!0,value:i,"aria-label":i.toString(),children:r},`range-${i}`)}),t.jsxs(z,{sx:Z,disableRipple:!0,value:"custom","aria-label":"custom",children:[e("自訂"),!k.includes(s)&&`(${s})`]},"range-custom")]}),t.jsx(Ue,{open:o,onClose:()=>l(!1)})]})},We={position:"sticky",top:0,display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap",listStyle:"none",px:0,py:1,m:0,borderRadius:0,fontSize:14,borderBottomWidth:1,borderBottomColor:e=>e.palette.mode==="dark"?A[900]:A[200],borderBottomStyle:"solid"},Z={height:30,px:2},K=({name:e,routeStrings:s,defaultExpanded:n=!0})=>{const[o,l]=c.useState(n),i=c.useMemo(()=>s.split("|").filter(r=>r)??[],[s]);return i.length===0?t.jsx(t.Fragment,{}):t.jsxs(b,{children:[t.jsxs(b,{sx:ze,onClick:()=>l(r=>!r),children:[t.jsx(C,{variant:"body1",m:1,fontWeight:700,children:e}),t.jsx(b,{children:o?t.jsx(De,{}):t.jsx(Ie,{})})]}),t.jsx(N,{}),o&&t.jsx(U,{disablePadding:!0,children:i.map((r,u)=>!!r&&t.jsx(F,{routeId:r},`route-${e}-${u}`))}),t.jsx(N,{})]})},ze={display:"flex",alignItems:"center",justifyContent:"space-between",mx:1,cursor:"pointer"},Ge=({isFocus:e})=>{const{t:s}=y(),{manualGeolocation:n,geolocation:o,isRouteFilter:l,searchRange:i}=c.useContext(S),{db:{routeList:r,stopList:u,serviceDayMap:a},isTodayHoliday:d}=c.useContext(M),[g,x]=c.useState(n??o.current),p=c.useMemo(()=>Se(m=>{x(m)},500),[]);c.useEffect(()=>{const m=setInterval(()=>{p(n??o.current)},1e3);return p(n??o.current),()=>{clearInterval(m)}},[n,o,p]);const f=c.useMemo(()=>Ve({geolocation:g,stopList:u,routeList:r,isRouteFilter:l,isTodayHoliday:d,serviceDayMap:a,searchRange:i}),[g,u,r,l,d,a,i]),h=c.useMemo(()=>Object.values(f).map(m=>m.split("|").every(j=>j==="")).every(Boolean),[f]);return e?h?t.jsx(b,{sx:X,children:t.jsx(C,{sx:{marginTop:5},fontWeight:"700",children:s("附近未有任何路線")})}):t.jsx(b,{sx:X,children:Object.entries(f).map(([m,j])=>t.jsx(K,{name:s(m),routeStrings:j},`nearby-${m}`))}):t.jsx(t.Fragment,{})},Ve=({geolocation:e,stopList:s,routeList:n,isRouteFilter:o,isTodayHoliday:l,serviceDayMap:i,searchRange:r})=>{const u=[],a=Object.entries(s).map(d=>[...d,H(d[1].location,e)]).filter(d=>d[2]<r).sort((d,g)=>d[2]-g[2]).slice(0,20).reduce((d,[g])=>(Object.entries(n).forEach(([x,p])=>{["kmb","lrtfeeder","lightRail","gmb","ctb","nlb"].forEach(f=>{p.stops[f]&&p.stops[f].includes(g)&&(d[B[f]]===void 0&&(d[B[f]]=[]),u.find(([h,m,j])=>h==p.route&&m==f&&j<p.serviceType)===void 0&&(d[B[f]].push(x+"/"+p.stops[f].indexOf(g)),u.push([p.route,f,p.serviceType])))})}),d),{bus:[],mtr:[],lightRail:[],minibus:[],ferry:[]});return Object.entries(a).reduce((d,[g,x])=>(d[g]=O(x,l,o,n,s,i,e),d),{})},X={display:"flex",flexDirection:"column",gap:2,flex:1,minHeight:"100dvh"},Ze=({isFocus:e})=>{const{t:s}=y(),{geolocation:n,isRouteFilter:o}=c.useContext(S),{savedEtas:l}=c.useContext(I),{db:{routeList:i,stopList:r,serviceDayMap:u},isTodayHoliday:a}=c.useContext(M),d=c.useMemo(()=>Xe({savedEtas:l,geolocation:n.current,stopList:r,routeList:i,isRouteFilter:o,isTodayHoliday:a,serviceDayMap:u}),[l,n,i,r,o,a,u]),g=c.useMemo(()=>d.every(x=>!x),[d]);return e?g?t.jsx(b,{sx:Ye,children:t.jsx(C,{sx:{marginTop:5},fontWeight:"700",children:s("未有收藏路線")})}):t.jsx(U,{disablePadding:!0,sx:{minHeight:"100dvh"},children:d.map((x,p)=>!!x&&t.jsx(F,{routeId:x},`route-shortcut-${p}`))}):t.jsx(t.Fragment,{})},Xe=({savedEtas:e,geolocation:s,stopList:n,routeList:o,isRouteFilter:l,isTodayHoliday:i,serviceDayMap:r})=>O(e.filter((u,a,d)=>d.indexOf(u)===a&&u.split("/")[0]in o).map((u,a,d)=>{const[g,x]=u.split("/"),p=Object.values(o[g].stops).sort((f,h)=>h.length-f.length)[0];if(x!==void 0&&parseInt(x,10)<p.length)return[u,H(s,n[p[Number(x)]].location),d.length-a];{const f=p.map(h=>[h,H(s,n[h].location)]).sort(([,h],[,m])=>h<m?-1:1)[0][0];return[u,H(s,n[f].location),d.length-a]}}).sort((u,a)=>u[2]-a[2]).map(u=>u[0]).slice(0,40).reverse(),i,l,o,n,r,s).split("|"),Ye={display:"flex",flexDirection:"column",gap:2,flex:1,minHeight:"100dvh"},qe=({isFocus:e})=>{const{t:s}=y(),{geolocation:n,isRouteFilter:o}=c.useContext(S),{collections:l}=c.useContext(I),{db:{routeList:i,stopList:r,serviceDayMap:u},isTodayHoliday:a}=c.useContext(M),d=c.useMemo(()=>Je({collections:l,geolocation:n.current,stopList:r,routeList:i,isRouteFilter:o,isTodayHoliday:a,serviceDayMap:u}),[l,n,r,i,o,a,u]);return e?d.length===0?t.jsx(b,{sx:Y,children:t.jsx(C,{sx:{marginTop:5},fontWeight:700,children:s("未有收藏路線")})}):t.jsxs(b,{sx:Y,children:[d.map(({name:g,routes:x,defaultExpanded:p},f)=>t.jsx(K,{name:g,routeStrings:x,defaultExpanded:p},`collection-${f}`)),!d.reduce((g,{routes:x})=>g||x.split("|").filter(p=>!!p).length>0,!1)&&t.jsx(C,{sx:{marginTop:5},fontWeight:700,children:s("未有收藏路線")})]}):t.jsx(t.Fragment,{})},Je=({collections:e,geolocation:s,stopList:n,routeList:o,isRouteFilter:l,isTodayHoliday:i,serviceDayMap:r})=>e.map(({name:u,list:a,schedules:d})=>({name:u,routes:a,defaultExpanded:d.reduce((g,{day:x,start:p,end:f})=>{if(g)return g;const h=new Date;h.setUTCHours(h.getUTCHours()+8);const m=h.getUTCDay();if(i&&x===0||x===m){let j=p.hour*60+p.minute,Q=f.hour*60+f.minute,P=(h.getUTCHours()*60+h.getUTCMinutes())%1440;return j<=P&&P<=Q}return!1},!1)})).map(u=>({...u,routes:O(u.routes,i,l,o,n,r,s)})),Y={display:"flex",flexDirection:"column",gap:2,minHeight:"100dvh"},Ke=({collection:e,isFocus:s})=>{const{t:n}=y(),{geolocation:o,isRouteFilter:l}=c.useContext(S),{db:{routeList:i,stopList:r,serviceDayMap:u},isTodayHoliday:a}=c.useContext(M),d=c.useMemo(()=>Qe({savedEtas:e.list,geolocation:o.current,stopList:r,routeList:i,isRouteFilter:l,isTodayHoliday:a,serviceDayMap:u}),[e,o,r,i,l,a,u]),g=c.useMemo(()=>d.every(x=>!x),[d]);return s?g?t.jsx(b,{sx:et,children:t.jsx(C,{sx:{marginTop:5},fontWeight:700,children:t.jsx("b",{children:n("收藏中未有路線")})})}):t.jsx(U,{disablePadding:!0,sx:{minHeight:"100dvh"},children:d.map((x,p)=>!!x&&t.jsx(F,{routeId:x},`route-shortcut-${p}`))}):t.jsx(t.Fragment,{})},Qe=({savedEtas:e,geolocation:s,stopList:n,routeList:o,isRouteFilter:l,isTodayHoliday:i,serviceDayMap:r})=>O(e,i,l,o,n,r,s).split("|"),et={display:"flex",flexDirection:"column",gap:2,flex:1,minHeight:"100dvh"},tt=q.forwardRef(({homeTab:e,onChangeTab:s},n)=>{const{collections:o}=c.useContext(I),l=c.useRef(e);c.useImperativeHandle(n,()=>({changeTab:r=>{l.current=r}}));const i=c.useCallback(()=>{let r=D.indexOf(l.current);if(r!==-1)return r;for(let u=0;u<o.length;++u)if(o[u].name===l.current)return u+D.length;return-1},[o]);return t.jsxs(t.Fragment,{children:[e==="nearby"?t.jsx(Ne,{}):null,t.jsxs(pe,{index:i(),onChangeIndex:r=>{s(r<D.length?D[r]:o[r-D.length].name)},children:[t.jsx(Ge,{isFocus:e==="nearby"}),t.jsx(Ze,{isFocus:e==="saved"}),t.jsx(qe,{isFocus:e==="collections"}),o.map(r=>t.jsx(Ke,{collection:r,isFocus:e===r.name},`list-${r.name}`))]})]})}),D=["nearby","saved","collections"],gt=()=>{const{AppTitle:e}=c.useContext(M),{collections:s}=c.useContext(I),{t:n}=y(),o=ee(),{collectionName:l}=ie(),i=c.useRef(null),r=l??localStorage.getItem("homeTab"),[u,a]=c.useState(ke(r,s)?r:"nearby");c.useEffect(()=>{te({title:`${n("Dashboard")} - ${n(e)}`,description:n("home-page-description"),lang:o})},[o,e,n]);const d=(g,x=!1)=>{a(g),localStorage.setItem("homeTab",g),i.current&&x&&i.current.changeTab(g)};return t.jsxs(le,{sx:nt,square:!0,elevation:0,children:[t.jsx(C,{component:"h1",style:W,children:`${n("Dashboard")} - ${n(e)}`}),t.jsx(C,{component:"h2",style:W,children:n("home-page-description")}),t.jsx(Me,{homeTab:u,onChangeTab:d}),t.jsx(ue,{}),t.jsx(de,{}),t.jsx(xe,{}),t.jsx(tt,{ref:i,homeTab:u,onChangeTab:d})]})},nt={background:e=>e.palette.mode==="dark"?e.palette.background.default:"white",textAlign:"center",display:"flex",flexDirection:"column",overflow:"auto",width:"100%",height:"100%"};export{gt as default};