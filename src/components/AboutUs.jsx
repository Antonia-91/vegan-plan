import React from 'react';
import Prenumeration from './Prenumeration';

const AboutUs = () => {
  return (
  <>
    <div className="header-about">
      <img className="logo-about" src={'./vegan-plan-logo-white.png'} width={250} alt='vegan plan logo'/>
    </div>
    <div className="about">
      <img className="about-planet" src={'./planet-green.png'} width={200} alt='planet'/>
      <span className="text-over">Vegansk mat</span>
      <h1 className="about-h1">Vi ska göra det lätt att välja rätt</h1>
      <p>Vi befinner oss i en klimatkris och vårt val av mat har en enorm påverkan på planeten.
Vi vet att växtbaserad kost kan minska vårt klimatavtryck med 60-80%. Vi vet att växtbaserad kost, som ensam påverkan, har potentialen till att vara vår generations största bidrag till oss själva och kommande generationer. ​Samtidigt tror många svenskar att deras köttätande inte påverkar klimatet. 

På senare tid har den veganska marknaden exploderat med nya produkter, vilka är bättre än kött och mejeriprodukter ur miljöperspektiv, men är mindre bra för hälsan. Till och med bland veganer finns det stor okunskap vad gäller hälsosam mat.

Därför har vi startat Vegan plan som ska göra det enkelt för fler människor att njuta av varierad och hälsosam vegansk mat, minska sin klimatpåverkan och dessutom spara tid. 

      </p>
      <span className="text-under-small"><p>Till våra recept</p></span>
    </div>
    <Prenumeration />
  </>
    );
};

export default AboutUs;
