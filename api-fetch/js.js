console.log('hla mundo ');

const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url).then((response)=>{
return response.json()
}).then((response)=>{
    console.log(response);
})