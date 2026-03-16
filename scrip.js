const scriptURL = "https://script.google.com/macros/s/AKfycbypDWV-viQPJlSXBz1J65JcR872Z_EKrSJrgFPCsAdZCwou1kSmlXlRX3JrlG-EiGLz/exec"

const form = document.getElementById("form")

form.addEventListener("submit", e => {

e.preventDefault()

const formData = new FormData(form)

fetch(scriptURL, {
method: "POST",
body: formData,
mode: "no-cors"
})
.then(response => response.text())
.then(() => {

alert("Cadastro enviado com sucesso")

form.reset()

})
.catch(error => {

console.error(error)
alert("Erro ao enviar cadastro")

})

})
