export const GetProducts = async() => {

    const url = 'http://localhost:3000/products.json';
    const res = await fetch(url);
    const {data} = await res.json();

    const products = data.map( product => {
        return {
            id: product.id,
            title: product.title,
            summary: product.summary,
            price: product.price,
            stock: product.stock,
            imgName: product.img.name,        
            imgUrl: product.img.url
        }
    })    

    return products;      
}