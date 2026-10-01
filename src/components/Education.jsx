import Timeline from './Timeline'
import {education} from '../data/education'

export default function Education(){return <Timeline id="education" title="Education & Learning" sub="My learning journey" items={education} f={["t","o"]}/>}
