import React from 'react'

export function HomeTab() {
    return (
        <div className='main-content'>
            <img alt="" src={process.env.PUBLIC_URL + '/wordart.png'} width="100%"/>
            <div>
                <h1>Eskild er død</h1>
                <h5>for oss</h5>
                <img alt="" src={process.env.PUBLIC_URL + '/eskild.PNG'} width="30%"/>
                <p className='ingress'>Etter at satsekollektivet Læffa sin maskot har forlatt åstedet for å simpe for en vilt fremmed mann,
                    har de resterende medlemmene og bedre tre-fjerde-deler skrevet noen minneord om vår alles Eskil: 
                </p>
                <h3>In memorium: </h3>
                <h5>Adrian</h5>
                <p>
                    Læffas største biceps og minste penis har dessverre forlatt redet. 
                    Den nynazistiske looken og daglige roasten vil bli et stort savn i hverdagen. 
                    Du vil for alltid være en essensiell del i min sterke stilling i Europa, og senere verdensherredømme. 
                    Hvil i fred min Mussolini ❤️
                </p>
                <h5>Herman</h5>
                <p>
                Vår herre, vår frelser har forlatt oss. Læffa blir aldri det samme uten daglige Eskild roasts
                </p>
                <h5>Eivind</h5>
                <p>
                </p>
                <h5>Eskild</h5>
                <p>
                Læffa har mistet en engel. 
                Hans like i humor, glede og guddommelige utseende vil aldri eksistere. 
                Svært attraktiv penis.
                </p>
                <h5>Arnstein</h5>
                <p>
                </p>
                <h5>Anna</h5>
                <p>
                    Eskild. Tusen takk for at du har tatt meg så godt i mot i læffa. 
                    Både i politkostyme, zebrakostyme og bare i dinosaur bokser. 
                </p>
                <h5>Haakon</h5>
                <p>
                Alle unntatt det ene ikke-lenger-eksisterende beinet på sofaen kommer til å savne deg stort. 
                Takk for minnene. 
                Jeg kommer til å huske hvor sint du ble av å bli sveket i Risk, 
                hvor mongo-dritings du var på bursdagen min og den gangen du ødela kjøleskapet med penisen din. 
                Mitt håp, min sol, min evige roast-beef. Hvil i ufred.
                </p>
                <h5>Helene</h5>
                <p>
                    Uten å ha Eivind vegg i vegg vil puling aldri bli det samme. Takk for alt.
                </p>

            </div>
            <div>
                <h1>Corona i Læffa</h1>
                <img alt="" src={process.env.PUBLIC_URL + '/arni.jpg'} width="30%"/>
                <p  className='ingress'>
                    Ja, det kom hit også. Nå skal gutta opp i ringa og steke grandis for å sette utenfor døra på prins Covid.
                    God bedring, pikktryne!
                </p>
                <p>OBS: Viktig. Arni er ikke lenger singel. Sjukt nok..</p>
            </div>
            <div>
                <h1>Ny tillitslæff er valgt</h1>
                <img alt="" src={process.env.PUBLIC_URL + '/herman.jpg'} width="30%"/>
                <p className='ingress'>Det er Herman.</p>
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

            </div>
            <div>
                <h1>Karen raser mot fest på Møllenberg</h1> 
                <p className='ingress'>-Da jeg var ung drakk vi kun sølevann og sæd!</p>
                <img alt="" src={process.env.PUBLIC_URL + '/mollenberg.PNG'} width="30%"/>
                <p>laeffa.no kan avsløre at det bor studenter på Møllenberg. Nyhetene kom som et sjokk på 
                    Trondheims aldrende befolkning. Særlig journalistene i Adressavisen.
                </p>
            </div>
        </div>
    )
}
