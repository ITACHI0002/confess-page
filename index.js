const yes = document.getElementById("button1");
const no = document.getElementById("button2");

yes.addEventListener('click', function(){
    window.location = 'index2.html';
});

no.addEventListener('mouseover', function(){
    no.style.left = `${Math.ceil(Math.random() * 90)}%`;
    no.style.top = `${Math.ceil(Math.random() * 90)}%`;
});