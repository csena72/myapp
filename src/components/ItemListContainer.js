import { useState } from "react";
import { ItemCount } from "./ItemCount";
import { ItemDetailContainer } from './ItemDetailContainer';

export const ItemListContainer = ({ greeting, items }) => {

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
                <ItemDetailContainer />
            </div>
        </>
    )
}