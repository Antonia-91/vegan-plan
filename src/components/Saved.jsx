import React from 'react';

const Saved = () => {
  return (
    <>
      <div className="saved-items">
      <p className="text-fat-big-upper">Övriga sparade recept</p>
      <div className="saved-recieps">
      <img className="thumbs" src={require('../img/thumb-fav@2x.png').default} width={350} alt='circel'/>
      <img className="thumbs" src={require('../img/thumb-fav2@2x.png').default} width={350} alt='circel'/>
      </div>
      </div>
    </>
      );
};

export default Saved;
