import { useState } from "react";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";

function ItemLisContainer({ greeting, items }) {

    const [stockActual, setStockActual] = useState(5);
    
    const restarStock = (e, nuevoStock) => {
      e.preventDefault();      
      setStockActual((stockActual) => stockActual - nuevoStock);    
    };
    
    return (
        <>
            <div className="container">
                <h3 className="text-muted">{greeting}</h3>                
                <ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>
                <ItemList items={items} />
            </div>
        </>
    )
}

export default ItemLisContainer;