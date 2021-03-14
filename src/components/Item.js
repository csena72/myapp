

export const Item = ({item}) => {
    return ( 
        <div className="card col-4">
            <img src={item.imgUrl} class="card-img-top" alt={item.imgName} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.summary}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <a href="/" class="btn btn-success btn-sm">Ver más...</a>
                </div>
        </div>
    );
}