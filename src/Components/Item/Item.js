const Item = (prod) => {
    return (
        <div id= {prod.id}>
            <img src={prod.img}/>
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
            <div>{prod.price}</div>
        </div>
    )
}