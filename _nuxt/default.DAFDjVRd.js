import{n as A,M as Se,aA as Ge,aT as Be,L as Me,aw as L,am as Je,an as Qe,x as v,a5 as ve,r as J,b1 as ee,H as z,a2 as de,b2 as et,f as Le,$ as Ce,o as U,k as W,w as S,b as l,j as P,l as G,y as F,m as Ee,_ as Ne,q as Z,Y as Pe,U as te,Z as Re,av as He,V as Ae,aR as tt,v as D,s as $e,aN as se,J as at,b3 as nt,aU as lt,aH as ot,ah as it,b4 as ut,P as st,z as rt,a as ct,d as $,t as vt,b5 as dt}from"./entry.BOBPfMFk.js";import{f as k,p as ye,e as ze,h as xe,u as mt,j as ft,g as gt,b as pe}from"./VMenu.D0sDVS1I.js";import{e as ht,f as yt,V as re}from"./VBtn.DMFPVIAn.js";import{d as ae,f as me,u as j,w as De,s as Oe,j as Ye,c as we,y as Ue,t as We,l as Xe,r as Fe,a as be,G as pt,H as bt,V as ue}from"./VImg.780dCUd8.js";import{V as wt}from"./VSpacer.BDVWTciA.js";import{V as St}from"./index.BSNRW53t.js";import"./VAvatar.DlQoPayE.js";import"./forwardRefs.C-GTDzx5.js";/* empty css              */const ce=Symbol.for("vuetify:layout"),Ze=Symbol.for("vuetify:layout-item"),_e=1e3,xt=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),je=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Vt(){const e=Se(ce);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function qe(e){const o=Se(ce);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Ge()}`,i=Be("useLayoutItem");Me(Ze,{id:t});const n=L(!1);Je(()=>n.value=!0),Qe(()=>n.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:s}=o.register(i,{...e,active:v(()=>n.value?!1:e.active.value),id:t});return ve(()=>o.unregister(t)),{layoutItemStyles:a,layoutRect:o.layoutRect,layoutItemScrimStyles:s}}const _t=(e,o,t,i)=>{let n={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...n}}];for(const s of e){const d=o.get(s),h=t.get(s),p=i.get(s);if(!d||!h||!p)continue;const r={...n,[d.value]:parseInt(n[d.value],10)+(p.value?parseInt(h.value,10):0)};a.push({id:s,layer:r}),n=r}return a};function Tt(e){const o=Se(ce,null),t=v(()=>o?o.rootZIndex.value-100:_e),i=J([]),n=ee(new Map),a=ee(new Map),s=ee(new Map),d=ee(new Map),h=ee(new Map),{resizeRef:p,contentRect:r}=ht(),b=v(()=>{const u=new Map,f=e.overlaps??[];for(const c of f.filter(V=>V.includes(":"))){const[V,x]=c.split(":");if(!i.value.includes(V)||!i.value.includes(x))continue;const N=n.get(V),R=n.get(x),X=a.get(V),O=a.get(x);!N||!R||!X||!O||(u.set(x,{position:N.value,amount:parseInt(X.value,10)}),u.set(V,{position:R.value,amount:-parseInt(O.value,10)}))}return u}),m=v(()=>{const u=[...new Set([...s.values()].map(c=>c.value))].sort((c,V)=>c-V),f=[];for(const c of u){const V=i.value.filter(x=>{var N;return((N=s.get(x))==null?void 0:N.value)===c});f.push(...V)}return _t(f,n,a,d)}),g=v(()=>!Array.from(h.values()).some(u=>u.value)),_=v(()=>m.value[m.value.length-1].layer),T=v(()=>({"--v-layout-left":z(_.value.left),"--v-layout-right":z(_.value.right),"--v-layout-top":z(_.value.top),"--v-layout-bottom":z(_.value.bottom),...g.value?void 0:{transition:"none"}})),M=v(()=>m.value.slice(1).map((u,f)=>{let{id:c}=u;const{layer:V}=m.value[f],x=a.get(c),N=n.get(c);return{id:c,...V,size:Number(x.value),position:N.value}})),w=u=>M.value.find(f=>f.id===u),I=Be("createLayout"),B=L(!1);de(()=>{B.value=!0}),Me(ce,{register:(u,f)=>{let{id:c,order:V,position:x,layoutSize:N,elementSize:R,active:X,disableTransitions:O,absolute:fe}=f;s.set(c,V),n.set(c,x),a.set(c,N),d.set(c,X),O&&h.set(c,O);const ne=et(Ze,I==null?void 0:I.vnode).indexOf(u);ne>-1?i.value.splice(ne,0,c):i.value.push(c);const le=v(()=>M.value.findIndex(Y=>Y.id===c)),Q=v(()=>t.value+m.value.length*2-le.value*2),C=v(()=>{const Y=x.value==="left"||x.value==="right",q=x.value==="right",ie=x.value==="bottom",Ve={[x.value]:0,zIndex:Q.value,transform:`translate${Y?"X":"Y"}(${(X.value?0:-110)*(q||ie?-1:1)}%)`,position:fe.value||t.value!==_e?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!B.value)return Ve;const H=M.value[le.value];if(!H)throw new Error(`[Vuetify] Could not find layout item "${c}"`);const he=b.value.get(c);return he&&(H[he.position]+=he.amount),{...Ve,height:Y?`calc(100% - ${H.top}px - ${H.bottom}px)`:R.value?`${R.value}px`:void 0,left:q?void 0:`${H.left}px`,right:q?`${H.right}px`:void 0,top:x.value!=="bottom"?`${H.top}px`:void 0,bottom:x.value!=="top"?`${H.bottom}px`:void 0,width:Y?R.value?`${R.value}px`:void 0:`calc(100% - ${H.left}px - ${H.right}px)`}}),oe=v(()=>({zIndex:Q.value-1}));return{layoutItemStyles:C,layoutItemScrimStyles:oe,zIndex:Q}},unregister:u=>{s.delete(u),n.delete(u),a.delete(u),d.delete(u),h.delete(u),i.value=i.value.filter(f=>f!==u)},mainRect:_,mainStyles:T,getLayoutItem:w,items:M,layoutRect:r,rootZIndex:t});const E=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),y=v(()=>({zIndex:o?t.value:void 0,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:E,layoutStyles:y,getLayoutItem:w,items:M,layoutRect:r,layoutRef:p}}const kt=Le({__name:"Navigation",setup(e){const o=J([]),t=Ce();return t.init(),(i,n)=>(U(),W(ze,{nav:"",density:"compact",slim:"",opened:P(o),"onUpdate:opened":n[0]||(n[0]=a=>Ee(o)?o.value=a:null)},{default:S(()=>{var a,s,d;return[l(k,{"prepend-icon":"mdi-view-dashboard",title:"My Dashboard",to:"/"}),(a=P(t).user)!=null&&a.isStaff?(U(),W(k,{key:0,"prepend-icon":"mdi-account-search",title:"Find Customers",to:"/staff/customerSearch"})):G("",!0),l(ye,{value:"Forms"},{activator:S(({props:h})=>[l(k,F(h,{"prepend-icon":"mdi-list-box-outline",title:"Forms"}),null,16)]),default:S(()=>[l(k,{title:"Internet Signup",subtitle:"Connect a new internet service","append-icon":"mdi-web-box",lines:"two",to:"/signup"}),l(k,{title:"Service Qualification",subtitle:"Check an address for internet availability","append-icon":"mdi-home-search-outline",lines:"two",to:"/nbn/location/search"}),l(k,{title:"Appointment Search",subtitle:"Search for available nbn field appointments","append-icon":"mdi-calendar-search",lines:"two",to:"/spark/appointment/change"})]),_:1}),(s=P(t).user)!=null&&s.isAdmin?(U(),W(ye,{key:1,value:"Admin"},{activator:S(({props:h})=>[l(k,F(h,{"prepend-icon":"mdi-account-cog",title:"Admin"}),null,16)]),default:S(()=>[l(k,{title:"User List","append-icon":"mdi-account",to:"/admin/userlist"}),l(k,{title:"Customer List","append-icon":"mdi-account-group",to:"/admin/customerlist"}),l(k,{title:"Account List","append-icon":"mdi-note-multiple",to:"/admin/accountlist"}),l(k,{title:"Service List","append-icon":"mdi-home-city",to:"/admin/servicelist"})]),_:1})):G("",!0),(d=P(t).user)!=null&&d.isAdmin?(U(),W(ye,{key:2,value:"Virtutel"},{activator:S(({props:h})=>[l(k,F(h,{"prepend-icon":"mdi-cog",title:"Virtutel"}),null,16)]),default:S(()=>[l(k,{title:"Order List","append-icon":"mdi-list-box-outline",to:"/admin/virtutel/order-list?provider=b35e036e-66fc-4500-99fe-2783ff02c7b2"})]),_:1})):G("",!0)]}),_:1},8,["opened"]))}}),It=Ne(kt,[["__file","Navigation.vue"]]),Bt=A({text:String,...ae(),...me()},"VToolbarTitle"),Mt=Z()({name:"VToolbarTitle",props:Bt(),setup(e,o){let{slots:t}=o;return j(()=>{const i=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[i&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),Lt=[null,"prominent","default","comfortable","compact"],Ke=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Lt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...De(),...ae(),...Oe(),...Ye(),...me({tag:"header"}),...Pe()},"VToolbar"),Te=Z()({name:"VToolbar",props:Ke(),setup(e,o){var g;let{slots:t}=o;const{backgroundColorClasses:i,backgroundColorStyles:n}=we(te(e,"color")),{borderClasses:a}=Ue(e),{elevationClasses:s}=We(e),{roundedClasses:d}=Xe(e),{themeClasses:h}=Re(e),{rtlClasses:p}=He(),r=L(!!(e.extended||(g=t.extension)!=null&&g.call(t))),b=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=v(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ae({VBtn:{variant:"text"}}),j(()=>{var w;const _=!!(e.title||t.title),T=!!(t.image||e.image),M=(w=t.extension)==null?void 0:w.call(t);return r.value=!!(e.extended||M),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,a.value,s.value,d.value,h.value,p.value,e.class],style:[n.value,e.style]},{default:()=>[T&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(be,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(Fe,{key:"image-img",cover:!0,src:e.image},null)]),l(be,{defaults:{VTabs:{height:z(b.value)}}},{default:()=>{var I,B,E;return[l("div",{class:"v-toolbar__content",style:{height:z(b.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(I=t.prepend)==null?void 0:I.call(t)]),_&&l(Mt,{key:"title",text:e.title},{text:t.title}),(B=t.default)==null?void 0:B.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),l(be,{defaults:{VTabs:{height:z(m.value)}}},{default:()=>[l(St,null,{default:()=>[r.value&&l("div",{class:"v-toolbar__extension",style:{height:z(m.value)}},[M])]})]})]})}),{contentHeight:b,extensionHeight:m}}}),Ct=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Et(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let i=0;const n=J(null),a=L(0),s=L(0),d=L(0),h=L(!1),p=L(!1),r=v(()=>Number(e.scrollThreshold)),b=v(()=>tt((r.value-a.value)/r.value||0)),m=()=>{const g=n.value;!g||t&&!t.value||(i=a.value,a.value="window"in g?g.pageYOffset:g.scrollTop,p.value=a.value<i,d.value=Math.abs(a.value-r.value))};return D(p,()=>{s.value=s.value||a.value}),D(h,()=>{s.value=0}),de(()=>{D(()=>e.scrollTarget,g=>{var T;const _=g?document.querySelector(g):window;_&&_!==n.value&&((T=n.value)==null||T.removeEventListener("scroll",m),n.value=_,n.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),ve(()=>{var g;(g=n.value)==null||g.removeEventListener("scroll",m)}),t&&D(t,m,{immediate:!0}),{scrollThreshold:r,currentScroll:a,currentThreshold:d,isScrollActive:h,scrollRatio:b,isScrollingUp:p,savedScroll:s}}const Nt=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ke(),...je(),...Ct(),height:{type:[Number,String],default:64}},"VAppBar"),Pt=Z()({name:"VAppBar",props:Nt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const i=J(),n=$e(e,"modelValue"),a=v(()=>{var I;const w=new Set(((I=e.scrollBehavior)==null?void 0:I.split(" "))??[]);return{hide:w.has("hide"),inverted:w.has("inverted"),collapse:w.has("collapse"),elevate:w.has("elevate"),fadeImage:w.has("fade-image")}}),s=v(()=>{const w=a.value;return w.hide||w.inverted||w.collapse||w.elevate||w.fadeImage||!n.value}),{currentScroll:d,scrollThreshold:h,isScrollingUp:p,scrollRatio:r}=Et(e,{canScroll:s}),b=v(()=>e.collapse||a.value.collapse&&(a.value.inverted?r.value>0:r.value===0)),m=v(()=>e.flat||a.value.elevate&&(a.value.inverted?d.value>0:d.value===0)),g=v(()=>a.value.fadeImage?a.value.inverted?1-r.value:r.value:void 0),_=v(()=>{var B,E;if(a.value.hide&&a.value.inverted)return 0;const w=((B=i.value)==null?void 0:B.contentHeight)??0,I=((E=i.value)==null?void 0:E.extensionHeight)??0;return w+I});se(v(()=>!!e.scrollBehavior),()=>{at(()=>{a.value.hide?a.value.inverted?n.value=d.value>h.value:n.value=p.value||d.value<h.value:n.value=!0})});const{ssrBootStyles:T}=xe(),{layoutItemStyles:M}=qe({id:e.name,order:v(()=>parseInt(e.order,10)),position:te(e,"location"),layoutSize:_,elementSize:L(void 0),active:n,absolute:te(e,"absolute")});return j(()=>{const w=Te.filterProps(e);return l(Te,F({ref:i,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...M.value,"--v-toolbar-image-opacity":g.value,height:void 0,...T.value},e.style]},w,{collapse:b.value,flat:m.value}),t)}),{}}}),Rt=A({...yt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ht=Z()({name:"VAppBarNavIcon",props:Rt(),setup(e,o){let{slots:t}=o;return j(()=>l(re,F(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),At=A({...ae(),...xt()},"VLayout"),$t=Z()({name:"VLayout",props:At(),setup(e,o){let{slots:t}=o;const{layoutClasses:i,layoutStyles:n,getLayoutItem:a,items:s,layoutRef:d}=Tt(e);return j(()=>{var h;return l("div",{ref:d,class:[i.value,e.class],style:[n.value,e.style]},[(h=t.default)==null?void 0:h.call(t)])}),{getLayoutItem:a,items:s}}}),zt=A({scrollable:Boolean,...ae(),...me({tag:"main"})},"VMain"),Dt=Z()({name:"VMain",props:zt(),setup(e,o){let{slots:t}=o;const{mainStyles:i}=Vt(),{ssrBootStyles:n}=xe();return j(()=>l(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[i.value,n.value,e.style]},{default:()=>{var a,s;return[e.scrollable?l("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(s=t.default)==null?void 0:s.call(t)]}})),{}}});function Ot(e){let{rootEl:o,isSticky:t,layoutItemStyles:i}=e;const n=L(!1),a=L(0),s=v(()=>{const p=typeof n.value=="boolean"?"top":n.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[p]:z(a.value)}:{top:i.value.top}]});de(()=>{D(t,p=>{p?window.addEventListener("scroll",h,{passive:!0}):window.removeEventListener("scroll",h)},{immediate:!0})}),ve(()=>{window.removeEventListener("scroll",h)});let d=0;function h(){const p=d>window.scrollY?"up":"down",r=o.value.getBoundingClientRect(),b=parseFloat(i.value.top??0),m=window.scrollY-Math.max(0,a.value-b),g=r.height+Math.max(a.value,b)-window.scrollY-window.innerHeight,_=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;r.height<window.innerHeight-b?(n.value="top",a.value=b):p==="up"&&n.value==="bottom"||p==="down"&&n.value==="top"?(a.value=window.scrollY+r.top-_,n.value=!0):p==="down"&&g<=0?(a.value=0,n.value="bottom"):p==="up"&&m<=0&&(_?n.value!=="top"&&(a.value=-m+_+b,n.value="top"):(a.value=r.top+m,n.value="top")),d=window.scrollY}return{isStuck:n,stickyStyles:s}}const Yt=100,Ut=20;function ke(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ie(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const i=ke(o),n=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);o+=(n-i)*Math.abs(n),t===e.length-1&&(o*=.5)}return ke(o)*1e3}function Wt(){const e={};function o(n){Array.from(n.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new nt(Ut))).push([n.timeStamp,a])})}function t(n){Array.from(n.changedTouches).forEach(a=>{delete e[a.identifier]})}function i(n){var p;const a=(p=e[n])==null?void 0:p.values().reverse();if(!a)throw new Error(`No samples for touch id ${n}`);const s=a[0],d=[],h=[];for(const r of a){if(s[0]-r[0]>Yt)break;d.push({t:r[0],d:r[1].clientX}),h.push({t:r[0],d:r[1].clientY})}return{x:Ie(d),y:Ie(h),get direction(){const{x:r,y:b}=this,[m,g]=[Math.abs(r),Math.abs(b)];return m>g&&r>=0?"right":m>g&&r<=0?"left":g>m&&b>=0?"down":g>m&&b<=0?"up":Xt()}}}return{addMovement:o,endTouch:t,getVelocity:i}}function Xt(){throw new Error}function Ft(e){let{isActive:o,isTemporary:t,width:i,touchless:n,position:a}=e;de(()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",I,{passive:!1}),window.addEventListener("touchend",B,{passive:!0})}),ve(()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",B)});const s=v(()=>["left","right"].includes(a.value)),{addMovement:d,endTouch:h,getVelocity:p}=Wt();let r=!1;const b=L(!1),m=L(0),g=L(0);let _;function T(y,u){return(a.value==="left"?y:a.value==="right"?document.documentElement.clientWidth-y:a.value==="top"?y:a.value==="bottom"?document.documentElement.clientHeight-y:K())-(u?i.value:0)}function M(y){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const f=a.value==="left"?(y-g.value)/i.value:a.value==="right"?(document.documentElement.clientWidth-y-g.value)/i.value:a.value==="top"?(y-g.value)/i.value:a.value==="bottom"?(document.documentElement.clientHeight-y-g.value)/i.value:K();return u?Math.max(0,Math.min(1,f)):f}function w(y){if(n.value)return;const u=y.changedTouches[0].clientX,f=y.changedTouches[0].clientY,c=25,V=a.value==="left"?u<c:a.value==="right"?u>document.documentElement.clientWidth-c:a.value==="top"?f<c:a.value==="bottom"?f>document.documentElement.clientHeight-c:K(),x=o.value&&(a.value==="left"?u<i.value:a.value==="right"?u>document.documentElement.clientWidth-i.value:a.value==="top"?f<i.value:a.value==="bottom"?f>document.documentElement.clientHeight-i.value:K());(V||x||o.value&&t.value)&&(r=!0,_=[u,f],g.value=T(s.value?u:f,o.value),m.value=M(s.value?u:f),h(y),d(y))}function I(y){const u=y.changedTouches[0].clientX,f=y.changedTouches[0].clientY;if(r){if(!y.cancelable){r=!1;return}const V=Math.abs(u-_[0]),x=Math.abs(f-_[1]);(s.value?V>x&&V>3:x>V&&x>3)?(b.value=!0,r=!1):(s.value?x:V)>3&&(r=!1)}if(!b.value)return;y.preventDefault(),d(y);const c=M(s.value?u:f,!1);m.value=Math.max(0,Math.min(1,c)),c>1?g.value=T(s.value?u:f,!0):c<0&&(g.value=T(s.value?u:f,!1))}function B(y){if(r=!1,!b.value)return;d(y),b.value=!1;const u=p(y.changedTouches[0].identifier),f=Math.abs(u.x),c=Math.abs(u.y);(s.value?f>c&&f>400:c>f&&c>3)?o.value=u.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||K()):o.value=m.value>.5}const E=v(()=>b.value?{transform:a.value==="left"?`translateX(calc(-100% + ${m.value*i.value}px))`:a.value==="right"?`translateX(calc(100% - ${m.value*i.value}px))`:a.value==="top"?`translateY(calc(-100% + ${m.value*i.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${m.value*i.value}px))`:K(),transition:"none"}:void 0);return{isDragging:b,dragProgress:m,dragStyles:E}}function K(){throw new Error}const Zt=["start","end","left","right","top","bottom"],jt=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Zt.includes(e)},sticky:Boolean,...De(),...ae(),...lt(),...Oe(),...je(),...Ye(),...me({tag:"nav"}),...Pe()},"VNavigationDrawer"),qt=Z()({name:"VNavigationDrawer",props:jt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:t,emit:i,slots:n}=o;const{isRtl:a}=He(),{themeClasses:s}=Re(e),{borderClasses:d}=Ue(e),{backgroundColorClasses:h,backgroundColorStyles:p}=we(te(e,"color")),{elevationClasses:r}=We(e),{displayClasses:b,mobile:m}=ot(e),{roundedClasses:g}=Xe(e),_=pt(),T=$e(e,"modelValue",null,C=>!!C),{ssrBootStyles:M}=xe(),{scopeId:w}=mt(),I=J(),B=L(!1),E=v(()=>e.rail&&e.expandOnHover&&B.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),y=v(()=>bt(e.location,a.value)),u=v(()=>!e.permanent&&(m.value||e.temporary)),f=v(()=>e.sticky&&!u.value&&y.value!=="bottom");se(()=>e.expandOnHover&&e.rail!=null,()=>{D(B,C=>i("update:rail",!C))}),se(()=>!e.disableResizeWatcher,()=>{D(u,C=>!e.permanent&&rt(()=>T.value=!C))}),se(()=>!e.disableRouteWatcher&&!!_,()=>{D(_.currentRoute,()=>u.value&&(T.value=!1))}),D(()=>e.permanent,C=>{C&&(T.value=!0)}),it(()=>{e.modelValue!=null||u.value||(T.value=e.permanent||!m.value)});const{isDragging:c,dragProgress:V,dragStyles:x}=Ft({isActive:T,isTemporary:u,width:E,touchless:te(e,"touchless"),position:y}),N=v(()=>{const C=u.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):E.value;return c.value?C*V.value:C}),{layoutItemStyles:R,layoutItemScrimStyles:X}=qe({id:e.name,order:v(()=>parseInt(e.order,10)),position:y,layoutSize:N,elementSize:E,active:v(()=>T.value||c.value),disableTransitions:v(()=>c.value),absolute:v(()=>e.absolute||f.value&&typeof O.value!="string")}),{isStuck:O,stickyStyles:fe}=Ot({rootEl:I,isSticky:f,layoutItemStyles:R}),ge=we(v(()=>typeof e.scrim=="string"?e.scrim:null)),ne=v(()=>({...c.value?{opacity:V.value*.2,transition:"none"}:void 0,...X.value}));Ae({VList:{bgColor:"transparent"}});function le(){B.value=!0}function Q(){B.value=!1}return j(()=>{const C=n.image||e.image;return l(st,null,[l(e.tag,F({ref:I,onMouseenter:le,onMouseleave:Q,class:["v-navigation-drawer",`v-navigation-drawer--${y.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":B.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":u.value,"v-navigation-drawer--active":T.value,"v-navigation-drawer--sticky":f.value},s.value,h.value,d.value,b.value,r.value,g.value,e.class],style:[p.value,R.value,x.value,M.value,fe.value,e.style]},w,t),{default:()=>{var oe,Y,q,ie;return[C&&l("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?(oe=n.image)==null?void 0:oe.call(n,{image:e.image}):l("img",{src:e.image,alt:""},null)]),n.prepend&&l("div",{class:"v-navigation-drawer__prepend"},[(Y=n.prepend)==null?void 0:Y.call(n)]),l("div",{class:"v-navigation-drawer__content"},[(q=n.default)==null?void 0:q.call(n)]),n.append&&l("div",{class:"v-navigation-drawer__append"},[(ie=n.append)==null?void 0:ie.call(n)])]}}),l(ut,{name:"fade-transition"},{default:()=>[u.value&&(c.value||T.value)&&!!e.scrim&&l("div",F({class:["v-navigation-drawer__scrim",ge.backgroundColorClasses.value],style:[ne.value,ge.backgroundColorStyles.value],onClick:()=>T.value=!1},w),null)]})])}),{isStuck:O}}}),Kt=Le({__name:"default",setup(e){const o=Ce();o.init();const t=J(null);return(i,n)=>{const a=It;return U(),W($t,null,{default:S(()=>[l(Pt,{app:"","clipped-left":""},{default:S(()=>{var s;return[ct("div",{onClick:n[0]||(n[0]=d=>t.value=!P(t)),class:"d-block d-md-none"},[l(Ht,{variant:"text"},{default:S(()=>[l(ue,{icon:P(t)?"mdi-close":"mdi-menu"},null,8,["icon"])]),_:1})]),l(Fe,{src:"https://cdn.lightningip.com.au/logo/text/light/lightningip.svg",title:"Lightning IP Logo","max-width":"340","max-height":"55"}),l(wt),(s=P(o).coreUser)!=null&&s.isAdmin?(U(),W(re,{key:0},{default:S(()=>[l(ue,null,{default:S(()=>[$("mdi-magnify")]),_:1})]),_:1})):G("",!0),P(o).isLoggedIn?G("",!0):(U(),W(re,{key:1,to:"/user/profile"},{default:S(()=>[l(ue,null,{default:S(()=>[$("mdi-account")]),_:1})]),_:1})),P(o).isLoggedIn?(U(),W(re,{key:2},{default:S(()=>[l(ue,null,{default:S(()=>[$("mdi-account")]),_:1}),l(ft,{activator:"parent"},{default:S(()=>[l(ze,null,{default:S(()=>[l(k,null,{default:S(()=>[l(gt,null,{default:S(()=>{var d;return[$("Hi, "+vt((d=P(o).user)==null?void 0:d.displayName),1)]}),_:1})]),_:1}),l(pe),l(k,{to:"/user/profile"},{default:S(()=>[$("My Profile")]),_:1}),l(pe),l(k,null,{default:S(()=>[$("User Mode")]),_:1}),l(k,null,{default:S(()=>[$("Staff Mode")]),_:1}),l(k,null,{default:S(()=>[$("Admin Mode")]),_:1}),l(pe),l(k,{to:"/user/logout"},{default:S(()=>[$("Logout")]),_:1})]),_:1})]),_:1})]),_:1})):G("",!0)]}),_:1}),l(qt,{modelValue:P(t),"onUpdate:modelValue":n[1]||(n[1]=s=>Ee(t)?t.value=s:null),"mobile-breakpoint":"md"},{default:S(()=>[l(a)]),_:1},8,["modelValue"]),l(Dt,{style:{height:"300px"},class:"ml-2 pr-4 pr-md-2 mt-4"},{default:S(()=>[dt(i.$slots,"default")]),_:3})]),_:3})}}}),ia=Ne(Kt,[["__file","default.vue"]]);export{ia as default};
