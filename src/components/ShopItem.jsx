import React from 'react';

export default function ShopItem(props) {
    let { products } = props
    let arr = products.map(el => 
      <li className="shopitem" key={el.name}>
        <img alt={el.name} src={el.img} />
        <h2>{el.name}</h2>
        <p style={{color: "black"}}>{el.color}</p>
        <p style={{color: "rgba(232, 14, 14)"}}>${el.price}</p>
        <button className="btn">Add to card</button>    
      </li>
    )
    return arr;
}

