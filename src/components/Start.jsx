import React from 'react';
import RecipeGrid from './RecipeGrid';

const Start = ({recipes, setOneRecipe}) => {
  return (
    <>
      <div className="header-start">
        <img className="start-circle" src={require('../img/start-circle.png').default} width={150} alt='circel'/>
        <div className="start-box">
          <span className="text-over">Veckans matsedel</span>
          <h2 className="start-h2">Klimatsmart &amp;<br /> hälsosam veckomeny</h2>
          <span className="text-under"><p>Testa gratis!</p></span>
        </div>
      </div>
      <div className="our-vision">
      <img className="start-planet" src={'./planet.png'} width={200} alt='planet'/>
        <h1>Mat som gör skillnad<br />– för din hälsa &amp; klimatet</h1>
        <div className="text-container">
          <p>Vi befinner oss i en klimatkris och vårt val av mat har en enorm påverkan på planeten. Vegan plan ska göra det enkelt för fler människor att njuta av varierad och hälsosam vegansk mat. </p>
          <a href="/about"><span className="text-under-small-start"><p>Läs mer</p></span></a>
        </div>
      </div>
      <div className="recipes-carousel">
        <h4 className="h4-start">Näringsrika och enkla middagsrecept</h4>
        <RecipeGrid recipes={recipes} setOneRecipe = {setOneRecipe} limitRecipes={true}/>
      </div>
      <a href="/about"><div className="banner">
      </div></a>
    </>
  )
}

export default Start;