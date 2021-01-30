
const zipCodeField = document.querySelector('#app form input');
const button = document.querySelector('#app form button');
const content = document.querySelector('#app main');

button.addEventListener('click',(event) =>{
    event.preventDefault();

    content.innerHTML = '';

    axios.get('https://viacep.com.br/ws/' + validateZipCode(zipCodeField.value) + '/json/')
    .then((response) =>{

        
        if(response.data.erro){
            throw new Error('Zipcode invalid');
        }

        createLine(response.data.localidade + '/' + response.data.uf);
        createLine(response.data.logradouro);
        createLine(response.data.bairro)
    })
    .catch((error) =>{
        console.log(error);
        createLine("Ops, parece que algo deu errado!");
    })

});

function createLine(text) {
    let line = document.createElement('p')
    let textNode = document.createTextNode(text);
    line.appendChild(textNode);
    content.appendChild(line);
}

function validateZipCode(zipCode) {
    zipCode = zipCode.replace('-','');
    zipCode = zipCode.replace(' ','');
    zipCode = zipCode.trim();
    return zipCode;
}

// https://viacep.com.br/ws/ + {zipcode here} +/json/