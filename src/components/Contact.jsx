import {useState} from 'react'
import {PROFILE,FORM_ENDPOINT} from '../data/profile'
import Head from './Head'
import {IMG} from '../data/images'

export default function Contact(){const [f,setF]=useState({name:"",email:"",subject:"",message:""}),[e,setE]=useState({}),[s,setS]=useState("");
 const ch=k=>v=>setF({...f,[k]:v.target.value});
 const sub=ev=>{ev.preventDefault();const x={};
  if(f.name.trim().length<2)x.name="Please enter your name.";
  if(!/^\S+@\S+\.\S+$/.test(f.email))x.email="Enter a valid email.";
  if(f.subject.trim().length<3)x.subject="Add a subject.";
  if(f.message.trim().length<10)x.message="Message must be at least 10 characters.";
  setE(x);if(Object.keys(x).length){setS("error");return}
  const reset=()=>setF({name:"",email:"",subject:"",message:""});
  if(FORM_ENDPOINT){setS("sending");fetch(FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(f)}).then(r=>{if(!r.ok)throw 0;setS("ok");reset()}).catch(()=>setS("fail"));return}
  location.href=`mailto:${PROFILE.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(f.message+"\n\n— "+f.name+" ("+f.email+")")}`;setS("ok");reset()};
 const F=(k,l,t)=><div><label htmlFor={k} className="sr" style={{display:"block",marginBottom:4}}>{l}</label>{t?<textarea id={k} rows="5" value={f[k]} onChange={ch(k)}/>:<input id={k} value={f[k]} onChange={ch(k)} type={k==="email"?"email":"text"}/>}{e[k]&&<div className="err" role="alert">{e[k]}</div>}</div>;
 return <section id="contact"><div className="wrap"><Head t="Let's Build Something Together" s="Have a project in mind? Get in touch."/>
 <div className="contact"><form className="glass rv" onSubmit={sub} noValidate>{F("name","Name")}{F("email","Email")}{F("subject","Subject")}{F("message","Message",1)}
 <button className="btn p" type="submit" disabled={s==="sending"}>{s==="sending"?"Sending…":"Send Message"}</button>
 {s==="ok"&&<div className="ok" role="status">{FORM_ENDPOINT?"✓ Thanks! Your message has been sent.":"✓ Thanks! Your email app should open to send the message."}</div>}{s==="fail"&&<div className="err" role="alert">Could not send. Please email me directly.</div>}{s==="error"&&<div className="err" role="alert">Please fix the highlighted fields.</div>}</form>
 <div className="glass rv cimg"><img src={IMG.contact} alt="Laptop, notebook and coffee on a dark desk — let's build something together" loading="lazy"/></div></div></div></section>}
