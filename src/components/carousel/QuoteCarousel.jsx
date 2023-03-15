import { useEffect, useState } from "react"

import { QuoteCard } from "./QuoteCard"
import { testimonialsContent } from "../../content/testimonials"


export function QuoteCarousel () {

    const [ind, setInd] = useState(0)

    useEffect(() => {
        const qiInterval = setInterval(() => {
            setInd((x) => {return x < testimonialsContent.length - 1 ? x + 1 : 0})
        }, 10000)

        return () => {
        clearInterval(qiInterval)
        }
    }, [])

    return (
        <div className='my-24 h-48 w-4/5 mx-auto'>
            {/* <div className='duration-500'>
                {testimonialsContent.map((content, i) => (
                    <QuoteCard key={i} index={i} ind={ind} quote={content.quote} relation={content.relation}/>
                ))}
            </div> */}
            <div key={ind} className='animate-fade-in-down text-xl italic'>
                <div >{testimonialsContent[ind].quote}</div>
                <div className='ml-4'>{testimonialsContent[ind].relation}</div>
            </div>
        </div>
    )
}