import {useEffect} from 'react'

export function useReveal(){useEffect(()=>{const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.12});document.querySelectorAll(".rv").forEach(n=>o.observe(n));return()=>o.disconnect()})}
