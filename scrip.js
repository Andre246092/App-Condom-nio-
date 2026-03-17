document.addEventListener("DOMContentLoaded", function(){

const scriptURL = "https://script.google.com/macros/s/AKfycbypDWV-viQPJlSXBz1J65JcR872Z_EKrSJrgFPCsAdZCwou1kSmlXlRX3JrlG-EiGLz/exec";

const form = document.getElementById("form");

form.addEventListener("submit", function(e){

e.preventDefault();

fetch(scriptURL, {
method: "POST",
body: new FormData(form),
mode: "no-cors"
});

alert("Cadastro enviado com sucesso!");

form.reset();

});

});
