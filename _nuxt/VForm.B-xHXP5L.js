import{d as p,u as b}from"./VImg.C7G75g1_.js";import{m as v,c as F}from"./form.ChBs7JeA.js";import{f as V}from"./forwardRefs.C-GTDzx5.js";import{q as y,s as h,r as R,b as P}from"./entry.SIUp9reF.js";const k=y({...p(),...v()},"VForm"),q=h()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=F(r),s=R();function u(t){t.preventDefault(),a.reset()}function l(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return b(()=>{var t;return P("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,s)}});export{q as V};
