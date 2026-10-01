import {useState,useEffect,useRef} from 'react'

export default function Counter({v}){const [n,setN]=useState(0),r=useRef();
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect();let i=0;const t=setInterval(()=>{i++;setN(Math.round(v*i/30));i>=30&&clearInterval(t)},35)});o.observe(r.current);return()=>o.disconnect()},[v]);
 return <span ref={r}>{n}+</span>}
