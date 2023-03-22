import React, {useState, useEffect} from "react"
import Item from "../src/components/item"
import Total from "../src/components/Total"
import "../src/components/style/App.css"

function App() {

    const [cart, setCart] = useState([]);
    let amount = 0;
    let itemcount = 0;

    useEffect(() => {
        async function fetchData() {
            let data = await fetch("https://fakestoreapi.com/products?limit=12");
            let result = await data.json();
            setCart(result);
            //getitems();
        }
        fetchData();
    }, []);

    return (
        <div className="body">
          <h1 className="mycart">
            Sepetim<p>{cart.length}</p>
            <h4>ürün</h4>
            </h1>
            <div className="main">

            <div className="itemsList">
              {cart.map((item)=>(
              <Item 
              key={item.id}
              itemid={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              price={item.price}
              />

            ))}</div>
            {
            (cart.forEach((item) => (amount = amount + item.price)),
            (<Total totalprice={amount.toFixed(2)}/> ))
            }
        </div>
        </div>
    );
}


export default App;
