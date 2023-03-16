

export function Quote ({testimonial}) {
    return (
        <div className='my-12'>
            <div className='text-xl font-extrabold italic'>
                {testimonial.quote}
            </div>
            <div className='italic my-4'>
                {testimonial.text}
            </div>
            <div className='text-lg font-extrabold ml-4'>
                {testimonial.relation}
            </div>
        </div>
    )
}