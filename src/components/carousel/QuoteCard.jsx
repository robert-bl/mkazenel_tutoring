

export function QuoteCard ({quote, relation, index, ind})  {

    let quoteStyle = `${index === ind ? 'text-xl opacity-100' : 'hidden opacity-0'}`

    return (
            <div className={quoteStyle}>
                {quote}
                <div className='ml-4'>{relation}</div>
            </div>
    )
}

