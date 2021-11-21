import React from 'react';

const ShoppingList = () => {
  return (
    <>
  <div className="shoppinglist">
  <p className="text-fat-big-upper">Veckans inköpslista</p>
  <table className="table-shoppinglist">
      <tbody>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">1 st</td><td className="fat">+</td><td>Purjolök</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">1 st</td><td className="fat">+</td><td>Aubergine</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">1 st</td><td className="fat">+</td><td>Ingefära</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">3 st</td><td className="fat">+</td><td>Krossad tomat</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">500 g</td><td className="fat">+</td><td>Spenat</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">250 g</td><td className="fat">+</td><td>Valnötter</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">1 st</td><td className="fat">+</td><td>Broccoli</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">5 st</td><td className="fat">+</td><td>Sötpotatis</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">1 st</td><td className="fat">+</td><td>Gurkmeja</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">1 st</td><td className="fat">+</td><td>Olivolja</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">500 g</td><td className="fat">+</td><td>Mangold</td></tr>
        <tr><td><input type="checkbox" className="checked"/></td><td className="checkmark"></td><td className="fat">-</td><td className="fat">250 g</td><td className="fat">+</td><td>Jordärtskocka</td></tr>

      </tbody>
    </table>

   <form className="choose">
     <input type="text" readOnly value="Lägg till artikel" className="add-article" />
     <select name="count-persons" className="count-shoppinglist">
          <option readOnly value="4">Antal</option>
          <option readOnly value="6">6</option>
          <option readOnly value="8">8</option>
      </select>
      <button className="btn-middle">Spara</button>
   </form>
   <div className="mypage-btn">
    <button className="btn-middle">Ladda ner inköpslistan</button>
   </div>
  </div>
    </>
      );
};

export default ShoppingList;
