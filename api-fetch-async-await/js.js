console.log('holis');


const url = 'https://jsonplaceholder.typicode.com/comments';

const  peticion = async ()=> {
 const respuesta = await fetch(url)
 const resultado = await respuesta.json()
console.log(resultado);

}

peticion()