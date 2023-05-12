import React from 'react';

export default function ShopCard(props) {
    const { products } = props;
    let res = products.map(el => 
      <div className="shopcard" key={el.name}>
        <img alt={el.name} src={el.img} />
        <div className="title">
          <h2>{el.name}</h2>
          <p style={{color: "black"}}>{el.color}</p>
        </div>
        <div className="footer">                    
          <p style={{color: "rgba(232, 14, 14)"}}>${el.price}</p>
          <button className="btn">Add to card</button>
         </div>
      </div> 
   )
    return (
      <div>{res}</div>
    );
};

