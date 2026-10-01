const B=(()=>{let s=7;const r=()=>(s=(s*16807)%2147483647)/2147483647;
 return Array.from({length:36},()=>({l:r()*96,t:r()*98,z:28+r()*84,d:9+r()*8,y:-r()*8,o:.5+r()*.5}))})()

export default function Bubbles(){return <div className="bubbles" aria-hidden="true">{B.map((b,i)=>
 <i key={i} style={{left:b.l+"%",top:b.t+"%",width:b.z,height:b.z,opacity:b.o,animationDuration:b.d+"s",animationDelay:b.y+"s"}}/>)}</div>}
