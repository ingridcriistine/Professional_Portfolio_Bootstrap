let btn = document.getElementById('submitButton');

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('form');
    
    form.addEventListener('submit', async(event) => {

        event.preventDefault();

        const textValue = document.getElementById('name').value;
        const emailValue = document.getElementById('email')?.value; 
        const phoneValue = document.getElementById('phone')?.value;
        const messageValue = document.getElementById('message').value;

        const formData = {
            text: textValue,
            email: emailValue,
            phone: phoneValue,
            message: messageValue
        }

        console.log('Dados coletados', formData);

        const response = await fetch('https:://www.professionalportfolio/contact', 
        {
            method: 'POST',
            headers:{
            'Content-Type': 'application/json'      
            },

            body: JSON.stringify(formData),
        });

    });
})
