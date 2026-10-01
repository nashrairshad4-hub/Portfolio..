import {useState,useEffect} from 'react'
import {PROFILE,typed} from '../data/profile'
import {IMG} from '../data/images'

function Typer(){const [i,setI]=useState(0),[t,setT]=useState(""),[d,setD]=useState(false);
 useEffect(()=>{const w=typed[i],full=t.length===w.length;
  const h=setTimeout(()=>{if(!d){full?setD(true):setT(w.slice(0,t.length+1))}else if(t.length>0)setT(w.slice(0,t.length-1));else{setD(false);setI((i+1)%typed.length)}},!d&&full?1500:d?35:70);
  return()=>clearTimeout(h)},[t,d,i]);
 return <span>{t}<span className="caret">|</span></span>}

export default function Hero(){const soc=[["GH",PROFILE.github,"GitHub"],["in",PROFILE.linkedin,"LinkedIn"],["@","mailto:"+PROFILE.email,"Email"]];
 return <section id="home" className="hero"><div className="wrap">
 <div><span className="tagp fade">NASHRAH IRSHAD</span>
 <h1 className="fade" style={{animationDelay:".1s"}}>Hay! I'm Nashrah</h1>
 <div className="role fade grad" style={{animationDelay:".2s"}}><Typer/></div>
 <p className="fade" style={{animationDelay:".3s"}}>I build modern, responsive and interactive web experiences using React, JavaScript, Python and Django. I enjoy turning ideas into clean, functional and user-friendly digital products.</p>
 <div className="btns fade" style={{animationDelay:".4s"}}><a className="btn p" href="#contact">Get in Touch →</a><a className="btn" href={PROFILE.cv} download>Download CV</a>
 <span className="soc" style={{display:"inline-flex",alignItems:"center"}}>{soc.map(([t,h,l])=><a key={t} href={h} target="_blank" rel="noopener noreferrer" aria-label={l}>{t}</a>)}</span></div></div>
 <div className="heroimg"><div className="figring big"><img src={IMG.hero} alt="Illustration of a hooded developer working on a laptop"/></div></div></div></section>}
