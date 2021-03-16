import { useEffect, useState } from "react";
import { GetItems } from "../helpers/GetItems";
import { Item } from "./Item";

export const ItemList = () => {

    const [state, setState] = useState({
        data: []
    });    

    useEffect(() => {
        setTimeout(() => {
            GetItems()
                .then(items => {
                    setState({
                        data: items
                    })
                })
        }, 2000);
    }, [])
    
    const { data:items } =  state;

    return (

        <div className="row">
            <h2 className="text-muted">Los más Vendidos</h2>

            {items.map((x, index) => (
                <Item key={index} item={x} />
            ))}
        </div>
    );
}