import portrait from '../../assets/michael_running_portrait.png'

export function AboutMe () {
    return (
        <div className="mb-24">
            <div className='text-2xl text-center'>About Me</div>
            <div className='grid grid-cols-2'>
                <div className='m-2'>
                    <img src={portrait} className='mx-auto mb-2'/>
                    <iframe width="297" height="197" src="https://www.youtube.com/embed/cbMcm7JdHgQ" title="Gary and Rose Rag" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='mx-auto'></iframe>
                    <div className='w-4/5 mx-auto'>One of my piano ragtime compositions, "Gary and Rose"</div>
                </div>
                <div className='m-2'>
                    <div>
                        <div>
                            Education
                        </div>
                        <ul className="list-disc pl-8">
                            <li>B.Sc. Computer Engineering, Boston University, Summa Cum Laude</li>
                            <li>MJ (Master Journalism), Carleton University, Ottawa, Ontario</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            Work Expreience
                        </div>
                        <ul className="list-disc pl-8">
                            <li>Math and physics tutor, 2014-Present</li>
                            <li>Principal User Experience Designer, MathWorks, 2015-Present</li>
                            <li>Director, User Experience Design, Fidelity Investments, 2001-2014</li>
                            <li>Technical trainer (in-class training, training development, computer-based training), Fidelity Investments, 1995-2000</li>
                            <li>Technical Writer, various computer software companies, 1986-1994</li>
                        </ul>
                    </div>
                    <div>
                        <div>Outside of Work</div>
                        <ul className="list-disc pl-8">
                            <li>Compose ragtime piano pieces</li>
                            <li>Play piano and beginner clarinet</li>
                            <li>Run</li>
                            <li>With my wife, keep up with our three grown-up children!</li>
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
    )
}