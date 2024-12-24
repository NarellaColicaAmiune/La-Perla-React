const listaProductos = [
    {
        "id": 1,
        "title": "Mermelada de moras",
        "description": "Mermelada de moras orgánicas con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 15,
        "image": "../img/mermelada-moras.jpg"
    },
    {
        "id": 2,
        "title": "Higos en almíbar",
        "description": "Higos en almíbar orgánicos con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 6,
        "image": "../img/fig-jam-3776031_1280.jpg"
    },
    {
        "id": 3,
        "title": "Mermelada de mandarinas",
        "description": "Mermelada de mandarinas orgánicas con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 20,
        "image": "../img/jam-6269040_1280.jpg"
    },
    {
        "id": 4,
        "title": "Mermelada de ciruelas",
        "description": "Mermelada de ciruelas orgánicas con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 22,
        "image": "../img/ciruela.jpg"
    },
    {
        "id": 5,
        "title": "Mermelada de duraznos",
        "description": "Mermelada de duraznos orgánicas con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 18,
        "image": "../img/durazno.JPG"
    },
    {
        "id": 6,
        "title": "Mermelada de damascos",
        "description": "Mermelada de damascos orgánicas con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 18,
        "image": "../img/damasco.jpg"
    },
    {
        "id": 7,
        "title": "Mermelada de duraznos con ciruelas",
        "description": "Mermelada de duraznos con ciruelas orgánicas con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 12,
        "image": "../img/cirueladurazno.jpg"
    },
    {
        "id": 8,
        "title": "Uvas en almíbar",
        "description": "Uvas en almíbar orgánicas con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 15,
        "image": "../img/uvas-en-almibar.jpg"
    },
    {
        "id": 9,
        "title": "Mermelada de naranjas",
        "description": "Mermelada de naranjas orgánicas con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 20,
        "image": "../img/naranja.jpg"
    },
    {
        "id": 10,
        "title": "Mermelada de membrillos",
        "description": "Mermelada de membrillos orgánicas con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 8,
        "image": "../img/membrillo.jpg"
    },
    {
        "id": 11,
        "title": "Mermelada de naranjas con maracuyás",
        "description": "Mermelada de naranjas con maracuyás orgánicas con azúcar común",
        "price": 3800,
        "category": "Mermeladas caseras",
        "stock": 18,
        "image": "../img/naranjamaracuya.jpg"
    },
    {
        "id": 12,
        "title": "Cedrón",
        "description": "Cedrón orgánico secado al natural. Contiene 50gr.",
        "price": 1000,
        "category": "Aromáticas",
        "stock": 10,
        "image": "../img/cedron.jpg"
    },
    {
        "id": 13,
        "title": "Poleo",
        "description": "Poleo orgánico secado al natural. Contiene 50gr.",
        "price": 1000,
        "category": "Aromáticas",
        "stock": 8,
        "image": "../img/poleo.jpg"
    },
    {
        "id": 14,
        "title": "Yerbabuena y menta",
        "description": "Yerbabuena y menta orgánicas secadas al natural. Contiene 50gr.",
        "price": 1000,
        "category": "Aromáticas",
        "stock": 5,
        "image": "../img/yerbabuena-menta.jpg"
    },
    {
        "id": 15,
        "title": "Burro",
        "description": "Burro orgánico secado al natural. Contiene 50gr.",
        "price": 1000,
        "category": "Aromáticas",
        "stock": 8,
        "image": "../img/burro.jpg"
    },
    {
        "id": 16,
        "title": "Orégano",
        "description": "Orégano orgánico secado al natural. Contiene 25gr.",
        "price": 1000,
        "category": "Condimentos",
        "stock": 10,
        "image": "../img/oregano.jpg"
    },
    {
        "id": 17,
        "title": "Hojas de Laurel",
        "description": "Hojas de Laurel orgánicas secadas al natural. Contiene 25gr.",
        "price": 1000,
        "category": "Condimentos",
        "stock": 12,
        "image": "../img/laurel.jpg"
    },
    {
        "id": 18,
        "title": "Romero",
        "description": "Romero orgánico secado al natural. Contiene 25gr.",
        "price": 1000,
        "category": "Condimentos",
        "stock": 15,
        "image": "../img/romero.jpg"
    },
    {
        "id": 19,
        "title": "Mix de condimentos",
        "description": "Contiene romero, orégano y laurel triturado orgánico secado al natural. Contiene 25gr.",
        "price": 1000,
        "category": "Condimentos",
        "stock": 8,
        "image": "../img/mix-condimentos.jpg"
    },
    {
        "id": 20,
        "title": "Mix matero",
        "description": "Contiene cedrón, poleo, yerbabuena y menta orgánico secado al natural. Contiene 50gr.",
        "price": 1000,
        "category": "Aromáticas",
        "stock": 20,
        "image": "../img/mix-matero.jpg"
    },
    {
        "id": 21,
        "title": "Nueces por kilo",
        "description": "Nueces orgánicas.",
        "price": 11400,
        "category": "Frutos secos",
        "stock": 15,
        "image": "../img/walnut-6757529_1280.jpg"
    },
    {
        "id": 22,
        "title": "Almendras por kilo",
        "description": "Almendras orgánicas.",
        "price": 15000,
        "category": "Frutos secos",
        "stock": 15,
        "image": "../img/almonds-1571810_1280.jpg"
    },
    {
        "id": 23,
        "title": "Pasas de higos por kilo",
        "description": "Pasas de higos orgánicas.",
        "price": 12000,
        "category": "Frutos secos",
        "stock": 15,
        "image": "../img/figs-6713310_1280.jpg"
    },
    {
        "id": 24,
        "title": "Pasas de ciruelas por kilo",
        "description": "Pasas de ciruelas orgánicas.",
        "price": 9000,
        "category": "Frutos secos",
        "stock": 15,
        "image": "../img/food-624603_1280.jpg"
    },
    {
        "id": 25,
        "title": "Cola de caballo",
        "description": "Cola de caballo orgánica. Contiene 50gr.",
        "price": 1000,
        "category": "Aromáticas",
        "stock": 1,
        "image": "../img/cola-de-caballo.jpg"
    },
    {
        "id": 26,
        "title": "Membrillos en almíbar",
        "description": "Membrillos en almíbar orgánicos con azúcar común.",
        "price": 6000,
        "category": "Mermeladas caseras",
        "stock": 10,
        "image": "../img/membrillos-en-almibar.jpg"
    },
    {
        "id": 27,
        "title": "Ají molido",
        "description": "Ají molido orgánico. Contiene 25gr.",
        "price": 1000,
        "category": "Condimentos",
        "stock": 10,
        "image": "../img/ajimolido.jpg"
    },
    {
        "id": 28,
        "title": "Comino",
        "description": "Comino orgánico. Contiene 25gr.",
        "price": 1000,
        "category": "Condimentos",
        "stock": 10,
        "image": "../img/comino.jpg"
    },
    {
        "id": 29,
        "title": "Pimentón dulce",
        "description": "Pimentón dulce orgánico. Contiene 25gr.",
        "price": 1000,
        "category": "Condimentos",
        "stock": 10,
        "image": "../img/pimenton.jpg"    
    },
    {
        "id": 30,
        "title": "Llantén",
        "description": "Llantén orgánico. Contiene 25gr.",
        "price": 1000,
        "category": "Aromáticas",
        "stock": 10,
        "image": "../img/llanten.jpg"
    }
];

export default listaProductos;


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(listaProductos), 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const product = listaProductos.find((item) => item.id === parseInt(id));
        setTimeout(() => {
            product ? resolve(product) : reject(new Error("Producto no encontrado"));
        }, 1000);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        const products = listaProductos.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
        );
        setTimeout(() => resolve(products), 1000);
    });
};