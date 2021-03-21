import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const Item = ({item}) => {

    const [stockActual, setStockActual] = useState(item.stock);
    
    const restarStock = (e, nuevoStock) => {
      e.preventDefault();      
      setStockActual((stockActual) => stockActual - nuevoStock);    
    };

    return ( 
        <div className="card col-4 m-1">
            <img src={item.pictureUrl} className="card-img-top mt-2" alt="placeholder" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>
                    <div className="mt-1 mb-1 d-grid gap-2">
                        <Link to={"/itemDetail/" + item.id } className="btn btn-success btn-sm">Ver detalle...</Link>                        
                    </div>                                         
                </div>
        </div>
    );
}