/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let btn = document.getElementById('submitButton');

//add um evento quando a DOM estiver totalmente carregada
document.addEventListener("DOMContentLoaded", () => {
    //seleciona o form na DOM
    const form = document.querySelector('form');
    
    //add um evento submit ao form
    form.addEventListener('submit', async(event) => {
        //faz com que a tela não recarregue após o envio
        event.preventDefault();

        //coletar os valores dos campos
        const textValue = document.getElementById('text').value;
        const emailValue = document.getElementById('email')?.value; //? representa que o item não é obrigatório
        const phoneValue = document.getElementById('phone')?.value;
        const messageValue = document.getElementById('message').value;

        //criar um objeto com os dados coletados do form
        const formData = {
            text: textValue,
            email: emailValue,
            phone: phoneValue,
            message: messageValue
        }

        //ver os dados armazenados no formData
        console.log('Dados coletados', formData);

        //fetch api - enviar os dados via request (post) para o servidor
        const response = await fetch('https:://www.professionalportfolio/contact', 
        {
            method: 'POST',
            headers:{
            'Content-Type': 'application/json'      
            },

            body: JSON.stringify(formData), //converte o objeto js em string JSON
        });

    });
})
