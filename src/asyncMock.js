const products = [
    {
        id:'1',
        name:'Cogonauts Flidas - Grindr', 
        price:'3500', 
        description:'', 
        category:'Accesories', 
        stock:'5', 
        initial:1,
        img:'/assets/img/cogonauts-flidas-grindr.webp'
    },
    {
        id:'2',
        name:'Substrate Eden - 25L', 
        price:'1075', 
        description:'• EDEN - Queens paradise es un sustrato de uso profesional, que ofrece óptimas condiciones de siembra y/o trasplante, por su excelente aireación, retención de agua, reacción (pH) y Ce.', 
        category:'Growing Media', 
        stock:'20', 
        initial:1,
        img:'/assets/img/eden-substrate.jpg'
    },
    {
        id:'3',
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


