import {useState} from 'react'
import {PROFILE} from '../data/profile'

export default function Navbar(){const [o,setO]=useState(false);
 const L=["Home","About","Skills","Projects","Certificates","Experience","Contact"];
 return <nav aria-label="Main"><div className="wrap"><div className="pill"><a href="#home" className="logo"><span className="lgo">N</span>{PROFILE.name.split(" ")[0]}</a>
 <div className={"links"+(o?" open":"")}>{L.map(l=><a key={l} href={"#"+l.toLowerCase()} onClick={()=>setO(false)}>{l}</a>)}<a className="btn p s mob" href="#contact" onClick={()=>setO(false)}>Let's Talk</a></div>
 <a className="btn p cta" href="#contact">Let's Talk</a>
 <button className="burger" aria-label="Toggle menu" aria-expanded={o} onClick={()=>setO(!o)}>{o?"✕":"☰"}</button></div></div></nav>}
