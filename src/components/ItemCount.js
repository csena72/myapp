import React, {useState} from 'react'

export function ItemCount ({ stock, initial, onAdd }) {

    const [counter, setCounter] = useState(initial);

    const handleAdd = () => setCounter(counter + 1);
    const handleSubstract = () => setCounter(counter - 1);    

    return (     
        <>   
            <form>
                <div className="d-grid gap-2">                    
                    <div className="text-muted">
                        <h4>Stock: {stock} </h4>
                    </div>

                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            disabled={ stock === 0 || counter < 1 }
                            className="btn btn-outline-success btn-sm"
                            onClick={handleSubstract}
                        > - </button>

                        <label type="text" className="btn btn-outline-success btn-sm disabled">{counter}</label>
                        
                        <button
                            type="button"
                            className="btn btn-outline-success btn-sm"
                            disabled={ stock === 0 || counter > stock || counter === stock }
                            onClick={handleAdd}
                        > + </button>
                    </div>
                    <div className="mt-1 mb-1 d-grid gap-2">
                        <button
                            type="button"
                            className="btn btn-outline-success btn-sm"
                            disabled={ counter === 0 || counter > stock }
                            onClick={(e) => onAdd(e, counter)}                            
                        >Agregar al Carrito</button>
                    </div>

                </div>
            </form>
        </>
    )
}