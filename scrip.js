const scriptURL = "https://script.google.com/macros/s/AKfycbypDWV-viQPJlSXBz1J65JcR872Z_EKrSJrgFPCsAdZCwou1kSmlXlRX3JrlG-EiGLz/exec"

const form = document.getElementById("form")

form.addEventListener("submit", function(e){

e.preventDefault()

const formData = new FormData()

formData.append("apto", document.getElementById("apto").value)
formData.append("nome", document.getElementById("nome").value)
formData.append("telefone", document.getElementById("telefone").value)
formData.append("email", document.getElementById("email").value)
formData.append("emergencia", document.getElementById("emergencia").value)
formData.append("telEmergencia", document.getElementById("telEmergencia").value)

fetch(scriptURL, {
method: "POST",
body: formData
})
.then(() => {

alert("Cadastro enviado com sucesso!")

form.reset()

})
.catch(error => {

alert("Erro ao enviar cadastro")

console.error(error)

})

})
