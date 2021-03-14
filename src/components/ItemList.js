import { Item } from "./Item";

export const ItemList = ({ items }) => {
    return (

        <div className="row">
            <h2 className="text-muted">Los más Vendidos</h2>

            {items.map((x, index) => (
                <Item key={index} item={x} />
            ))}
        </div>
    );
}