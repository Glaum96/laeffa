import React, { useEffect, useState } from 'react'

export function ChuckNorrisTab() {
    let [joke, setJoke] = useState(() => {
        const savedQuote = localStorage.getItem('ChuckNorrisJoke') || '';
        return savedQuote;
    });

    const getQuote = () => fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then((data) => {
        setJoke(data.value)
    });

    useEffect(() => {
        localStorage.setItem('ChuckNorrisJoke', joke)
    }, [joke])

    return (
        <div>
            <h1>{joke}</h1>
            <button onClick={getQuote}>Click me!</button>
        </div>
    )
}
