import React, { useState } from 'react'

interface Quote {
    'quote': string
}

export function MainContent() {
    let [quote, setQuote] = useState<Quote>({'quote': ''});

    const getQuote = () => fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then((data) => {
        setQuote(data)
        console.log("DATA: ", data)
    });

    return (
        <div>
            <h1>{quote.quote}</h1>
            <button onClick={getQuote}>Click me!</button>
        </div>
    )
}
