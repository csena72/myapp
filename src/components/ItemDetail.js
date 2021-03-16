import React from 'react'

export const ItemDetail = ({ item }) => {
    return (
        <div className="card col-4 m-1">
            <img src={item.pictureUrl} className="card-img-top mt-2" alt="placeholder" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>                    
                    <a href="/" className="btn btn-success btn-sm">Ver más...</a>
                </div>
        </div>
    );
}
