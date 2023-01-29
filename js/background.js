let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');

btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/1.jpg')";
});
btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/2.jpg')";
});
btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/3.jpg')";
});
btn4.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/4.jpg')";
});