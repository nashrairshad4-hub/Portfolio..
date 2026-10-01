import {useState,useEffect,useRef} from 'react'
import {skills} from '../data/skills'
import {stats} from '../data/profile'
import {IMG} from '../data/images'
import Head from './Head'

function Ring({v}){const [p,setP]=useState(0),r=useRef();
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){let i=0;const t=setInterval(()=>{i+=2;setP(Math.min(i,v));i>=v&&clearInterval(t)},20);o.disconnect()}});o.observe(r.current);return()=>o.disconnect()},[v]);
 return <div ref={r} className="ring" data-v={p} style={{"--p":p}} role="img" aria-label={v+" percent"}/>}

const Card=s=><div className="glass rv scard" key={s.n}><Ring v={s.lv}/><div><h4>{s.n}</h4><span className="grp">{s.g}</span><p>{s.d}</p></div></div>

export default function Skills(){const h=Math.ceil(skills.length/2);
 return <section id="skills"><div className="wrap"><Head t="My Skills" s="Technologies I work with"/>
 <div className="duo"><div className="col">{skills.slice(0,h).map(Card)}</div>
 <div className="fig rv"><div className="figring still"><img src={IMG.skills} alt="Illustration of a smiling girl in a hijab with open hands" loading="lazy"/></div><span className="pillb">{stats.find(s=>s.l==="Technologies").v} Technologies</span></div>
 <div className="col">{skills.slice(h).map(Card)}</div></div></div></section>}
