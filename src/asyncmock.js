const productos = [

    { id: 1, nombre: "ERUDITO", precio: 1000, img:'../Imagenes/el-erudito2-0ff9123ad9329bd6dd16488471344672-320-0.jpg' },
    { id: 2, nombre: "ESQUINADOS", precio: 500, img:'../Imagenes/esquinados1-b66b5e9d013ca38b5916577253834697-320-0.jpg' },
    { id: 3, nombre: "ATENEA", precio: 2000, img:'../Imagenes/juego-de-mesa-cultura-general-atenea1-9a6314f8c773a1195316488472548259-320-0.jpg' },
    { id: 4, nombre: "EL CINEFILO", precio: 2500,img:'../Imagenes/juego-de-mesa-de-cine-el-cinefilo-tapa1-a37d860c5cc218d90b16488469773441-320-0.jpg' },
    { id: 5, nombre: "CAMARERO", precio: 2500, img:'../Imagenes/juego-de-mesa-memoria-el-camarero1-0497f84be7fc29912416488469544373-320-0.jpg' },
    { id: 6, nombre: "MELOMANO", precio: 2000, img:'../Imagenes/melomano11-8c2ca6e92b7e402b7916630987457730-320-0.jpg' },
    { id: 7, nombre: "MUSA", precio: 1000, img:'../Imagenes/Musa.jpg' },
    { id: 8, nombre: "SABOTEUR", precio: 3000, img:'../Imagenes/saboteur.png' },
    { id: 9, nombre: "BITOKU", precio: 2500, img:'../Imagenes/Bitoku.jpg' },
    { id: 10, nombre: "CATAN", precio: 2000, img:'../Imagenes/Catan.jpg' },
    { id: 11, nombre: "PIRAMIDE DEL SOL", precio: 3000, img:'../Imagenes/PiramidedelSol.jpg' },
    { id: 12, nombre: "CAVERNA", precio: 2500, img:'../Imagenes/Caverna.jpg' },



];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout (() => {
            const producto = productos.find (prod => prod.id === id);
            resolve (producto);
        },2000)

    })
}