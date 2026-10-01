import {services} from '../data/services'
import Tilt from './Tilt'
import Head from './Head'

export default function Services(){return <section id="services"><div className="wrap"><Head t="What I Can Do" s="Services I offer"/>
 <div className="grid">{services.map(([i,t])=><Tilt key={t}><div style={{fontSize:"2rem"}}>{i}</div><h4 style={{margin:"8px 0 0"}}>{t}</h4></Tilt>)}</div></div></section>}
