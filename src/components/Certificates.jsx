import {useState,useEffect} from 'react'
import {certificates} from '../data/certificates'
import Tilt from './Tilt'
import Head from './Head'

const certImg=c=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><rect width='600' height='400' fill='#0b1224'/><rect x='20' y='20' width='560' height='360' fill='none' stroke='${c}' stroke-width='4'/><text x='300' y='140' fill='#9aa4bf' font-size='24' text-anchor='middle' font-family='sans-serif'>CERTIFICATE</text><text x='300' y='210' fill='${c}' font-size='34' text-anchor='middle' font-family='sans-serif'>of Completion</text></svg>`);

export default function Certificates(){const [m,setM]=useState(null);
 useEffect(()=>{const k=e=>e.key==="Escape"&&setM(null);addEventListener("keydown",k);return()=>removeEventListener("keydown",k)},[]);
 return <section id="certificates"><div className="wrap"><Head t="Certificates & Achievements" s="Verified learning milestones"/>
 <div className="grid g3">{certificates.map(c=>{const src=c.img||certImg(c.c);return <Tilt key={c.t} className="cert"><img src={src} alt={c.t+" certificate"} loading="lazy"/><h4 style={{margin:"0 0 4px"}}>{c.t}</h4><div style={{color:"var(--mu)",fontSize:".9rem"}}>{c.o} · {c.date}</div><button className="btn s" style={{marginTop:12}} onClick={()=>setM({src,t:c.t})}>View Certificate</button></Tilt>})}</div>
 {m&&<div className="modal" role="dialog" aria-modal="true" aria-label={m.t} onClick={()=>setM(null)}><img src={m.src} alt={m.t}/></div>}</div></section>}
