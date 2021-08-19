import { useState } from 'react'
import './VingeSpennTab.css'

export function VingeSpennTab() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const handlePasswordAttempt = (attempt: string) => {
        if(attempt === 'leifleif69') {
            setIsAuthenticated(true)
        }
        else{
            ((document.getElementById("password-input")!) as HTMLInputElement).value = "FEIL!"
        }
    }

    return (
        <div>
            {!isAuthenticated && 
            <div>
                <input type="text" id="password-input" placeholder="Skriv inn passord"/>
                <button type="submit" onClick={() => handlePasswordAttempt(((document.getElementById("password-input")!) as HTMLInputElement).value)}>wefwe</button>
            </div>
            }
            {isAuthenticated && 
            <div>
                <table>
                    <tr>
                        <th>Navn</th>
                        <th>Høyde (cm)</th>
                        <th>Vingespenn (m)</th>
                    </tr>
                    <tr>
                        <td>Eskild</td>
                        <td> mindre enn Haakon</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>Haakon</td>
                        <td>201</td>
                        <td>? + 10</td>
                    </tr>
                    <tr>
                        <td>Adrian</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>Eivind</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>Herman</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>Arnstein</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                </table>
            </div>
            }
        </div>
    )
}
