import { useEffect, useState } from "react"

import { testimonialsContent } from "../../content/testimonials"


export function QuoteCarousel () {

    const [quoteIdx, setQuoteIdx] = useState(0)

    useEffect(() => {
        const quoteDisplayTimer = setInterval(() => {
            setQuoteIdx((x) => {return x < testimonialsContent.length - 1 ? x + 1 : 0})
        }, 10000)

        return () => {
        clearInterval(quoteDisplayTimer)
        }
    }, [])

    return (
        <div className='my-24 h-48 w-4/5 mx-auto'>
            <div key={quoteIdx} className='animate-fade-in-down text-xl italic'>
                <div >{testimonialsContent[quoteIdx].quote}</div>
                <div className='ml-4'>{testimonialsContent[quoteIdx].relation}</div>
            </div>
        </div>
    )
}