import{m as C,d as p,e as $,f as h,g as c,h as A,i as O}from"./VSelect.kYmte2xS.js";import{q as f,s as V,b as a,z as i,at as x,P as m,aw as U,y as F,v as N,ax as q,Q as w}from"./entry.SIUp9reF.js";import{u as y}from"./VImg.C7G75g1_.js";const z=f({...C({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),T=V()({name:"VRadio",props:z(),setup(e,l){let{slots:s}=l;return y(()=>a(p,i(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}}),D=f({height:{type:[Number,String],default:"auto"},...$(),...x(h(),["multiple"]),trueIcon:{type:m,default:"$radioOn"},falseIcon:{type:m,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),j=V()({name:"VRadioGroup",inheritAttrs:!1,props:D(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:s,slots:t}=l;const v=U(),n=F(()=>e.id||`radio-group-${v}`),o=N(e,"modelValue");return y(()=>{const[b,I]=q(s),g=c.filterProps(e),P=p.filterProps(e),r=t.label?t.label({label:e.label,props:{for:n.value}}):e.label;return a(c,i({class:["v-radio-group",e.class],style:e.style},b,g,{modelValue:o.value,"onUpdate:modelValue":u=>o.value=u,id:n.value}),{...t,default:u=>{let{id:d,messagesId:R,isDisabled:G,isReadonly:S}=u;return a(w,null,[r&&a(A,{id:d.value},{default:()=>[r]}),a(O,i(P,{id:d.value,"aria-describedby":R.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:G.value,readonly:S.value,"aria-labelledby":r?d.value:void 0,multiple:!1},I,{modelValue:o.value,"onUpdate:modelValue":k=>o.value=k}),t)])}})}),{}}});export{j as V,T as a};
