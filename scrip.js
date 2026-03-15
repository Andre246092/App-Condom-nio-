const scriptURL = "https://script.google.com/macros/s/AKfycbzHLYDC7fyTdeoNspfmpFYtzaJhRP_ALWjJx4u4_A-s_0JaI74L8rqPmLyn0zJxsa9k/exec"

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
