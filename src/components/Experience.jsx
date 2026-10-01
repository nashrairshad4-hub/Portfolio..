import Timeline from './Timeline'
import {experience} from '../data/experience'

export default function Experience(){return <Timeline id="experience" title="Experience" sub="Where I've applied my skills" items={experience} f={["p","o"]}/>}
