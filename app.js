
const zipCodeField = document.querySelector('#app form input');
const button = document.querySelector('#app form button');
const content = document.querySelector('#app main');

button.addEventListener('click',(event) =>{
    event.preventDefault();

    axios.get('https://viacep.com.br/ws/' + zipCodeField.value + '/json/')
    .then((response) =>{
        
        createLine(response.data.localidade + '/' + response.data.uf)

    })
    .catch((error) =>{
        console.log(error);
    })

});

function createLine(text) {
    let line = document.createElement('p')
    let textNode = document.createTextNode(text);
    line.appendChild(textNode);
    content.appendChild(line);
}



// https://viacep.com.br/ws/96081-300/json/