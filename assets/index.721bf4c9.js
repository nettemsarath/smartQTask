import{a as u,c as m,p as h,j as d,r as v,R as f,b as g}from"./vendor.7f8ff627.js";const p=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(i){if(i.ep)return;i.ep=!0;const t=s(i);fetch(i.href,t)}};p();const b=async()=>{try{const{data:r}=await u.get("https://smartqdemo.firebaseio.com/events-data.json");return r}catch(r){throw r.response.data}},O=r=>({loadingAvailableOrders:!0,availableOrders:null,error:null,getAvailableOrders:async()=>{try{const a=await b();r({loadingAvailableOrders:!1,availableOrders:a})}catch(a){r({loadingAvailableOrders:!1,error:a})}}}),c=m(h(O,{name:"event-management",getStorage:()=>localStorage})),y=r=>({loadingAvailableOrders:r.loadingAvailableOrders,availableOrders:r.availableOrders,error:r.error}),N=r=>r.getAvailableOrders;var x="./assets/SmartQ_Logo.e4444dfb.png";const e=d.exports.jsx,n=d.exports.jsxs;function A(){return n("div",{className:"header_nav",children:[e("img",{src:x}),e("div",{children:e("input",{type:"text"})})]})}function _(){return e("div",{children:"Loading..."})}function S({imgUrl:r}){return e("img",{className:"card",src:r,alt:"categoreis"})}const L=({item:r})=>n("div",{className:"menu_item",children:[n("div",{className:"menu_item-heading",children:[e("div",{className:"menu_item-heading-img",children:e("img",{src:r.imageurl})}),n("div",{className:"menu_item-heading-details",children:[n("div",{children:[" ",r.foodname," "]}),n("div",{children:[" ",r.fooddescription," "]}),e("button",{children:"Add-ons"})]}),e("div",{className:"menu_item-heading-price text_left_align",children:n("div",{children:[" $ ",r.price," "]})})]}),n("div",{className:"menu_item-quantity",children:[n("div",{children:[e("label",{children:" Quantity "}),e("input",{})]}),n("div",{children:[e("label",{children:"Session"}),n("select",{name:"session",children:[e("option",{}),r.sessionlist.map(a=>n("option",{value:a,children:[" ",a," "]}))]})]}),n("div",{className:"text_left_align",children:[e("label",{children:" Sub Total "}),e("div",{children:" $20 "})]})]}),n("div",{className:"menu_item-note_kitchen",children:[n("div",{children:[e("label",{children:"Notes to the kitchen"}),e("input",{})]}),e("button",{children:" Add to Cart "})]})]});function j(){const{loadingAvailableOrders:r,availableOrders:{menu:a,extras:{categories:{Pizza:s}}},error:l}=c(y);return r?e(_,{}):l?"something Went Wrong...":n("div",{className:"menu",children:[e(S,{imgUrl:s.bannerImage}),a.map((i,t)=>e(L,{className:"card",item:i},t))]})}function M(){return e("div",{children:"Cart"})}function $(){return n("div",{className:"home",children:[e("h1",{children:"Build Your Menu "}),n("div",{children:[e(j,{}),e(M,{})]})]})}function I(){const r=c(N);return v.exports.useEffect(()=>{r()},[]),n("div",{className:"body_section",children:[e(A,{}),e($,{})]})}f.render(e(g.StrictMode,{children:e(I,{})}),document.getElementById("root"));