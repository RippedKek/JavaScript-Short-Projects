const input = document.querySelector('.input input');
const img = document.querySelector('.qr');
const btn = document.querySelector('.btn');
const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='; 

function generateQR(){
    const inputURL = input.value;
    if(inputURL === '') alert('You must enter a URL!');
    else{
        img.src = url + inputURL;
        input.value = '';
    }
}

input.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter')
        generateQR();
});