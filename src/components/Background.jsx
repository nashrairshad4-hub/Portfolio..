import {useEffect,useRef} from 'react'

export default function Background(){
  const ref=useRef()
  useEffect(()=>{
    const c=ref.current,x=c.getContext("2d")
    const low=matchMedia("(prefers-reduced-motion:reduce)").matches||!x||(navigator.hardwareConcurrency||4)<2
    if(low){document.body.classList.add("nojs3d");return}
    let w,h,P=[],raf
    const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight;P=Array.from({length:Math.min(70,w/18)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
    rs();addEventListener("resize",rs)
    const m={x:-999,y:-999},mm=e=>{m.x=e.clientX;m.y=e.clientY}
    addEventListener("mousemove",mm)
    const d=()=>{x.clearRect(0,0,w,h)
      P.forEach((p,i)=>{p.x=(p.x+p.vx+w)%w;p.y=(p.y+p.vy+h)%h;x.fillStyle="rgba(196,181,253,.6)";x.beginPath();x.arc(p.x,p.y,1.5,0,7);x.fill()
        for(let j=i+1;j<P.length;j++){const q=P[j],dd=Math.hypot(p.x-q.x,p.y-q.y);if(dd<110){x.strokeStyle=`rgba(139,92,246,${.25-dd/500})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
        const dm=Math.hypot(p.x-m.x,p.y-m.y);if(dm<140){p.x+=(p.x-m.x)/dm*1.5;p.y+=(p.y-m.y)/dm*1.5}})
      raf=requestAnimationFrame(d)}
    d()
    return()=>{cancelAnimationFrame(raf);removeEventListener("resize",rs);removeEventListener("mousemove",mm)}
  },[])
  return <canvas id="bg" ref={ref} aria-hidden="true"/>
}
