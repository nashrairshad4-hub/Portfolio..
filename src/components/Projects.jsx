import {projects} from '../data/projects'
import Tilt from './Tilt'
import Head from './Head'

export default function Projects(){return <section id="projects"><div className="wrap"><Head t="Featured Projects" s="Things I've built — swap these for your real work"/>
 <div className="grid g3">{projects.map(p=><Tilt key={p.t}><div className="shot"><div className="bar"><i/><i/><i/></div>{p.img?<img src={p.img} alt={p.t+" screenshot"} loading="lazy"/>:<div className="mock" style={{background:`linear-gradient(135deg,${p.c[0]}55,${p.c[1]}55)`}}>{p.t.charAt(0)}</div>}</div>
 <h3 style={{margin:"0 0 6px"}}>{p.t}</h3><p style={{color:"var(--mu)",margin:"0 0 12px"}}>{p.d}</p>
 <div>{p.s.map(t=><span className="tag" key={t}>{t}</span>)}</div>
 <div style={{display:"flex",gap:10,marginTop:10}}><a className="btn s" href={p.gh} target="_blank" rel="noopener noreferrer">GitHub</a><a className="btn s p" href={p.live} target="_blank" rel="noopener noreferrer">Live Demo</a></div></Tilt>)}</div></div></section>}
