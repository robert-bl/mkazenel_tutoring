import { useEffect, useState } from "react"

import { QuoteCard } from "./QuoteCard"
import { testimonialsContent } from "../../content/testimonials"


export function QuoteCarousel () {

    const [ind, setInd] = useState(0)

    useEffect(() => {
        const qiInterval = setInterval(() => {
            setInd((x) => {return x < testimonialsContent.length - 1 ? x + 1 : 0})
        }, 5000)

        return () => {
        clearInterval(qiInterval)
        }
    }, [])

    return (
        <div className='my-24 h-48 w-full'>
            <div className=''>
                {testimonialsContent.map((content, i) => (
                    <QuoteCard key={i} index={i} ind={ind} quote={content.quote} relation={content.relation}/>
                ))}
            </div>
        </div>
    )
}