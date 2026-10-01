import {useRef} from 'react'

export default function Tilt({children,className=""}){const r=useRef();
 const mv=e=>{const b=r.current.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;r.current.style.transform=`perspective(700px) rotateY(${x*14}deg) rotateX(${-y*14}deg) translateY(-6px)`};
 return <div ref={r} className={"glass tilt rv "+className} onMouseMove={mv} onMouseLeave={()=>r.current.style.transform=""}>{children}</div>}
