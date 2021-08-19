import React, { useState, useEffect } from 'react'

export function KanyeTab() {
    let [quote, setQuote] = useState(() => {
        const savedQuote = localStorage.getItem('kanyeQuote') || '';
        return savedQuote;
    });

    const getQuote = () => fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then((data) => {
        setQuote(data.quote)
    });

    useEffect(() => {
        localStorage.setItem('kanyeQuote', quote)
    }, [quote]);

    return (
        <div>
            <h1>{quote}</h1>
            <button onClick={getQuote}>Click me!</button>
        </div>
    )
}
