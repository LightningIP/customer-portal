import{d as p,u as b}from"./VImg.780dCUd8.js";import{m as v,c as F}from"./form.B_GF5cks.js";import{f as V}from"./forwardRefs.C-GTDzx5.js";import{n as y,q as h,r as R,b as P}from"./entry.BOBPfMFk.js";const k=y({...p(),...v()},"VForm"),q=h()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=F(r),m=R();function u(t){t.preventDefault(),a.reset()}function l(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var s;let{valid:d}=c;d&&((s=m.value)==null||s.submit())}),o.preventDefault()}return b(()=>{var t;return P("form",{ref:m,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,m)}});export{q as V};
