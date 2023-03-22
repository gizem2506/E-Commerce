import React from 'react'
import "../components/style/item.css"
function Item({itemid,image,category,price,title}) {
    let p=0;
    p=price;

  return (
    <div className="Cartitem" id={itemid}>
        <img src={image} alt="" />

        <div className="details">
            <h4>{title}</h4>
            <h6>{category}</h6>
            <h5>{price} <p>TL</p></h5>
            <h2>{price}</h2>
            <button className="delete">Sil</button>
        </div>
        <div className="quantity">
            <button className="plus">+</button>
            <p className="amount">1</p>
            <button className="minus">-</button>
        </div>
    </div>
  )
}

export default Item
