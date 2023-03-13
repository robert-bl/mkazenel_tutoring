

export function Quote ({testimonial}) {
    return (
        <div className="m-8">
            <div className="text-xl font-extrabold">
                {testimonial.quote}
            </div>
            <div className="">
                {testimonial.text}
            </div>
            <div className="text-lg font-extrabold">
                {testimonial.relation}
            </div>
        </div>
    )
}