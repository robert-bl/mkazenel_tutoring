import tutoring from '../../assets/tutoring.png'

export function Tutoring () {
    return (
        <div>
            <div>Tutoring</div>
            <div className='grid grid-cols-2 m-4'>
                <div className='mx-auto px-2'>
                    <img src={tutoring}/>
                </div>
                <div>
                    <div className='text-2xl'>I tutor these subjects</div>
                    <ul className='list-disc pl-8'>
                        <li>Algebra</li>
                        <li>Geometry</li>
                        <li>Trigonometry</li>
                        <li>Precalculous</li>
                        <li>Calculus {'('}including AP Calculus{')'}</li>
                        <li>Physics {'('}including AP Physics{')'}</li>
                        <li>Math SAT</li>
                    </ul>
                    <div className='text-2xl'>At these grade levels</div>
                    <ul className='list-disc pl-8'>
                        <li>Middle School</li>
                        <li>High School</li>
                        <li>College {'('}for first-year calculus and physics{')'}</li>
                    </ul>
                    <div className='text-2xl'>Where I can teach</div>
                    <ul className='list-disc pl-8'>
                        <li>At the student's house. I live in Canton MA, so can readily drive to homes in Canton and nearby towns.</li>
                        <li>At my house or a local library.</li>
                        <li>Virtually via Zoom.</li>
                    </ul>
                    <div className='text-2xl'>Frequency and scheduling</div>
                    <ul className='list-disc pl-8'>
                        <li>Weekly one-hour sessions</li>
                        <li>Regular day and time. I do appreciate that students often have other after-school activities and happenings, so I try to be as accommodating as possible week to week.</li>
                    </ul>
                    <div className='text-2xl'>My teaching approach</div>
                    <ul className='list-disc pl-8'>
                        <li>Creating a friendly atmosphere: I ask students a bit about themselves, such as their other subjects and their activities. I'm genuinely interested and I like establishing a friendly atmosphere. Plus, it helps me offer math and physics examples that relate to their interests.</li>
                        <li>Tailoring teaching to the student's learning style: For example, I find that many students learn best when I give them lots of actual problems to solve, which they work on with my guidance, starting with the basics. Their brains naturally pick up the underlying concepts, patterns, and techniques. They gain confidence that helps them solve further problems. And they take that confidence and knowledge into the classroom.</li>
                        <li>Helping students get over the hump: I find that students often have more ability in math and science than they give themselves credit for. All they need is the resolve to keep plugging away at the particular week's topic. I help them bridge some gaps, the fog lifts, and the student realizes that they can succeed in math and science, and feel good about it.</li>
                        <li>Using real-world examples: Students relate well to real-world examples. For example: Why logarithms are used to measure earthquakes, sound, and acidity; How figure skaters, in controlling the pace of their spinning, demonstrate the law of conservation of angular momentum; And myriad real-world applications of Pythagorus theorem and linear equations.</li>
                        <li>Seeing ourselves as lifelong learners: I encourage students to think of themselves as lifelong learners. Learning is about much more than passing a test. Throughout our lives, there are so many new things to learn and discover. I, too, like to think of myself as a lifelong learner.</li>
                        <li>Sharing my enthusiasm: I love math, physics and teaching, and I share my enthusiasm with my students.</li>
                    </ul>
                    <div className='text-2xl'>A typical week of tutoring</div>
                    <div className='text-xl'>The day before the lesson: </div>
                    <ul className='list-disc pl-8'>
                        <li>I text the student to find out what they're currently working on in class and if there is anything in particular they want to cover with me. This gets the student thinking about what they want to focus on with me and helps me prepare.</li>
                    </ul>
                    <div className='text-xl'>During the lesson: </div>
                    <ul className='list-decimal pl-8'>
                        <li>After initial greetings and pleasantries, we get to work. We typically spend ten minutes reviewing core concepts, based on the student's needs.</li>
                        <li>We then get into problem solving, with the student doing the work, as I provide guidance and explanations. I start with fairly basic problems, where the student practices the core concepts.</li>
                        <li>We build to more complex problems, including specific problems the student is working on for class. As we continue, we interweave concepts and practical problem solving. Because the student is actively putting the concepts into practice, we can identify the gaps in the student's understanding and work together to bridge them.</li>
                        <li>We do the lesson using my iPad. At the end of the lesson, I generate a PDF file of the notes and text it to the student.  In this way, they immediately receive the lesson concepts, worked-through examples, and annotated explanations.</li>
                    </ul>
                    <div className='text-xl'>Between lesson: </div>
                    <ul className='list-disc pl-8'>
                        <li>Students can text me anytime if they have questions, such as if they are having difficulty on a homework assignment. I try to reply the same evening. {'('}No extra charge{')'}</li>
                        <li>In my reply, I illustrate how to solve a similar problem, as a model to guide them. </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
