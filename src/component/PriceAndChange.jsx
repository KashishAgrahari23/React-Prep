import React from "react";

const PriceAndChange = () => {
  const asset = ["BTC", "ETH", "SOL"];
  const price = {
    BTC: { price: "100000", change: 2.5 },
    ETH: { price: "2000", change: -5 },
    SOL: { price: "100", change: 1.2 },
  };
  return <div>
    {
        asset.map((elem,id)=>{
            return (
                <div key={id}>
                    <h1>{elem}</h1>
                    <p>{price[elem].price}</p>
                    <p style={{ backgroundColor:price[elem].change > 0 ? "green": "red"} } >{price[elem].change}</p>
                </div>
            )
        })
    }
  </div>;
};

export default PriceAndChange;
