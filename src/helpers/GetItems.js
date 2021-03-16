export const GetItems = async() => {

    const url = 'http://localhost:3000/products.json';
    const res = await fetch(url);
    const {data} = await res.json();

    const items = data.map( item => {
        return {
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            pictureUrl: item.pictureUrl
        }
    })    

    return items;      
}