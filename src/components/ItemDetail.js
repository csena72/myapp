import React from 'react'
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {
    
    return (
        <div className="card col-4 m-1">
            <img src={item.pictureUrl} className="card-img-top mt-2" alt="placeholder" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>                    
                    <p className="card-text">$ {item.price}</p>
                    <div className="mt-1 mb-1 d-grid gap-2">
                        <Link to={"/"} className="btn btn-success btn-sm">Volver...</Link>                        
                    </div>
                </div>
        </div>
    );
}
