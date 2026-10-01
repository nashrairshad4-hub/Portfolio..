import {PROFILE} from '../data/profile'

export default function Footer(){return <footer><div className="wrap"><h3 className="grad" style={{margin:0}}>{PROFILE.name} — {PROFILE.role}</h3>
 <p>Building modern web experiences with code, creativity and continuous learning.</p>
 <div className="soc"><a href={PROFILE.github} aria-label="GitHub">GH</a><a href={PROFILE.linkedin} aria-label="LinkedIn">in</a><a href={"mailto:"+PROFILE.email} aria-label="Email">@</a></div>
 <small>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</small></div></footer>}
