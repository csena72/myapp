import { useEffect, useState } from "react";
import { GetProducts } from "../helpers/GetProducts";

export const useFetchProducts = () => {

    const [state, setState] = useState({
        data: []
    });

    useEffect(() => {
        setTimeout(() => {
            GetProducts()
                .then(products => {
                    setState({
                        data: products
                    })
                })
        }, 2000);
    }, [])

    return state;

}