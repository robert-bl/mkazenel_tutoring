

export function QuoteCard ({quote, relation, index, ind})  {

    let quoteStyle = `${index === ind ? 'text-xl' : 'hidden'}`

    return (
            <div className={quoteStyle}>
                {quote}
                {relation}
            </div>
    )
}

