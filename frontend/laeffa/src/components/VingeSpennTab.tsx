import React, { useState } from "react";
import "./VingeSpennTab.css";

export function VingeSpennTab() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordAttempt = (attempt: string) => {
    if (attempt === "leifleif69") {
      setIsAuthenticated(true);
    } else {
      (document.getElementById("password-input")! as HTMLInputElement).value =
        "FEIL!";
    }
  };

  return (
    <div>
      {!isAuthenticated && (
        <div>
          <input
            type="text"
            id="password-input"
            placeholder="Skriv inn passord"
          />
          <button
            type="submit"
            onClick={() =>
              handlePasswordAttempt(
                (document.getElementById("password-input")! as HTMLInputElement)
                  .value
              )
            }
          >
            wefwe
          </button>
        </div>
      )}
      {isAuthenticated && (
        <div>
          <table>
            <tr>
              <th>Navn</th>
              <th>Høyde (cm)</th>
              <th>Vingespenn (cm)</th>
              <th>Differanse (cm)</th>
            </tr>
            <tr>
              <td>Eskild</td>
              <td>192</td>
              <td>194</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Haakon</td>
              <td>201</td>
              <td>202</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Adrian</td>
              <td>175,5</td>
              <td>175,5</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Eivind</td>
              <td>176</td>
              <td>182</td>
              <td>6 (!)</td>
            </tr>
            <tr>
              <td>Herman</td>
              <td>6969</td>
              <td>42</td>
              <td>-6927</td>
            </tr>
            <tr>
              <td>Arnstein</td>
              <td>191,5</td>
              <td>190</td>
              <td>-1,5</td>
            </tr>
            <tr>
              <td>Helene</td>
              <td>168</td>
              <td>162,5</td>
              <td>-5,5</td>
            </tr>
            <tr>
              <td>Anna</td>
              <td>?</td>
              <td>?</td>
              <td>?</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
}
