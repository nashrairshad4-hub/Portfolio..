
export default function Marquee(){const t=["HTML5","CSS3","JavaScript","React.js","Python","Django","Bootstrap"],ic=["H5","C3","JS","⚛","Py","Dj","B"];
 return <div className="marq" aria-label="Technologies"><div className="track" aria-hidden="true">{[...t,...t,...t,...t].map((x,n)=><span key={n}><b>{ic[n%7]}</b>{x}</span>)}</div></div>}
