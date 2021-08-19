import React, { useEffect, useState } from 'react'

export function DadJokeTab() {
    let [joke, setJoke] = useState(() => {
        const savedQuote = localStorage.getItem('dadJoke') || '';
        return savedQuote;
    });

    const getJoke = () => fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      })
    .then(response => response.json())
    .then((data) => {
        setJoke(data.joke)
    });

    useEffect(() => {
        localStorage.setItem('dadJoke', joke)
    }, [joke]);

    return (
        <div>
            <h1>{joke}</h1>
            <button onClick={getJoke}>Click me!</button>
        </div>
    )
}
