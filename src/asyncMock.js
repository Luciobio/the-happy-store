const products = [
    {
        id:1,
        name:'Cogonauts Flidas - Grindr', 
        price:'3500', 
        description:'FLIDAS está determinado a derrumbar el sistema desde adentro. Fanátrico de la tecnología y las teorías conspirativas, Flidas mantiene una apariencia adorable e inocente; nadie sabe que dentro de su tachito esconde una base equipada y lista para hackear a quien se cruce en su camino.', 
        category:'Accesories', 
        stock:'5', 
        initial:1,
        img:'/assets/img/cogonauts-flidas-grindr.webp'
    },
    {
        id:2,
        name:'Substrate Eden - 25L', 
        price:'1075', 
        description:'• EDEN - Queens paradise es un sustrato de uso profesional, que ofrece óptimas condiciones de siembra y/o trasplante, por su excelente aireación, retención de agua, reacción (pH) y Ce.', 
        category:'Growing', 
        stock:'20', 
        initial:1,
        img:'/assets/img/eden-substrate.jpg'
    },
    {
        id:3,
        name:'Sodium Lamp - 400w', 
        price:'3755', 
        description:'Lámpara de alta presión 400w Sodio, tubular transparente con rosca E40. Ideal para cultivo indoor, y floración en general.', 
        category:'Lighting', 
        stock:'10', 
        initial:1,
        img:'/assets/img/sodium-lamp-400w.jpg'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
};

export const getProduct = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
};

export const getCategory = (category) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 1000)
    })
};


