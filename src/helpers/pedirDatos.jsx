import data from "../data/data.json";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
        
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id); // recorre el array y busca el id de cada elemento y lo compara con el id recibido por parametro
        
        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }
    })
}