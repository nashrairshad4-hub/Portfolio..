import {stats} from '../data/profile'
import {IMG} from '../data/images'
import Tilt from './Tilt'
import Counter from './Counter'

export default function About(){return <section id="about"><div className="wrap about">
 <div className="abimg rv"><img src={IMG.about} alt="Nashrah studying and coding at her desk" loading="lazy"/><div className="spiral" aria-hidden="true"/></div>
 <div><span className="tagp rv">ABOUT ME</span><h2 className="rv" style={{marginTop:12}}>I am available for <span className="grad">web projects</span></h2>
 <p className="rv">I am a passionate Web Developer with Python who enjoys building modern, responsive and user-friendly websites and web applications. I work with front-end technologies such as HTML, CSS, JavaScript, React and Bootstrap, while using Python and Django to develop powerful backend solutions.</p>
 <p className="rv">I focus on writing clean, maintainable code and creating digital experiences that are both visually appealing and functional. I am continuously learning new technologies, improving my development skills and working on real-world projects to grow as a professional developer.</p>
 <div className="statrow">{stats.map(s=><Tilt key={s.l} className="stat"><div className="num grad"><Counter v={s.v}/></div><div style={{color:"var(--mu)",fontSize:".78rem"}}>{s.l}</div></Tilt>)}</div>
 <a className="btn p" href="#contact">Get in Touch →</a></div></div></section>}
