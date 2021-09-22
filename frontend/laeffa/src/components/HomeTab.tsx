import React from 'react'

export function HomeTab() {
    return (
        <div>
            <img alt="" src={process.env.PUBLIC_URL + '/wordart.png'} width="100%"/>
            <div>
                <h1>Ny tillitslæff er valgt</h1>
                <p>Gratulerer til Herman med vervet som tillitsvalgt i Læffa. Herman sier ydmykt til laeffa.no 
                    at det er en stor ære å skulle ta på seg det tunge ansvaret med å være ansvarlig for 
                    gjengen med gissegasser + Adrian.
                </p>
                <h5>Ber om ro til å lage tillitsvalgterklæring</h5>
                <p>
                    Herman ber om ro fra pressen, og særlig den pågående laeffa.no-journalisten som ønsker å vite hvilke
                    endringer læffene kan vente seg i den kommende tillitsvalgtperioden. Herman har booket 
                    konferanselokalene på Delta-kontoret i 2 uker for sonderinger med seg selv før han vil fortelle om
                    hva han har kommet frem til. "Forskjellene mellom Læffer har økt og økt, og nå trenger vi en ny kurs!"
                    Dette skriver Herman entusiastisk i en sms til laeffa.no før han går inn i sonderingene.
                    Vi ønsker han lykke til.
                </p>
                <img alt="" src={process.env.PUBLIC_URL + '/herman.jpg'} width="30%"/>

            </div>
            <div>
                <h1>Karen raser mot fest på Møllenberg -Da jeg var ung drakk vi kun sølevann og sæd!</h1>
                <p>laeffa.no kan avsløre at det bor studenter på Møllenberg. Nyhetene kom som et sjokk på 
                    Trondheims aldrende befolkning. Særlig journalistene i Adressavisen.
                </p>
                <img alt="" src={process.env.PUBLIC_URL + '/mollenberg.PNG'} width="30%"/>
            </div>
        </div>
    )
}
