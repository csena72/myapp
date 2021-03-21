import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetItems } from "../helpers/GetItems";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {

    const {id} = useParams();

    const [state, setState] = useState({
        data: []
    });    

    useEffect(() => {
        setTimeout(() => {
            GetItems()
                .then(items => {
                    setState({
                        data: items[id-1]
                    })
                })
        }, 1000);
    })
    
    const { data:item } = state;
    
    return (
        <div className="row">            
            <ItemDetail  key={id} item={ item } />  
        </div>
    )
}