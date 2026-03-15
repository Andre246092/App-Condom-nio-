const scriptURL = "https://script.google.com/macros/s/AKfycbzHLYDC7fyTdeoNspfmpFYtzaJhRP_ALWjJx4u4_A-s_0JaI74L8rqPmLyn0zJxsa9k/exec"

const form = document.getElementById("form")

form.addEventListener("submit", e => {

e.preventDefault()

const data = {
apto: document.getElementById("apto").value,
nome: document.getElementById("nome").value,
telefone: document.getElementById("telefone").value,
email: document.getElementById("email").value,
emergencia: document.getElementById("emergencia").value,
telEmergencia: document.getElementById("telEmergencia").value
}

fetch(scriptURL, {
method: "POST",
body: JSON.stringify(data),
headers: {
"Content-Type": "application/json"
}
})
.then(response => response.text())
.then(result => {

alert("Cadastro enviado com sucesso!")

form.reset()

})
.catch(error => {

alert("Erro ao enviar cadastro")

console.error("Erro:", error)

})

})
