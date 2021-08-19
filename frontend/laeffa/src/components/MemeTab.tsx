import React, { useEffect, useState } from 'react'

export function MemeTab() {
    let [meme, setMeme] = useState(() => {
        const savedQuote = localStorage.getItem('meme') || '';
        return savedQuote;
    });

    const getMeme = () => fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.data.memes.length)
        setMeme(data.data.memes[randomIndex].url)
    });

    useEffect(() => {
        localStorage.setItem('meme', meme)
    },[meme])

    return (
        <div>
            <img alt="" src={`${meme}`}></img>
            <button onClick={getMeme}>Click me!</button>
        </div>
    )
}
