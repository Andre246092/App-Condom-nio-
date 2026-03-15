const scriptURL = "COLE_AQUI_URL_DO_SCRIPT"

document.getElementById("form").addEventListener("submit", e => {

e.preventDefault()

const data = {
apto: document.getElementById("apto").value,
nome: document.getElementById("nome").value,
telefone: document.getElementById("telefone").value,
email: document.getElementById("email").value,
emergencia: document.getElementById("emergencia").value,
telEmergencia: document.getElementById("telEmergencia").value
}

fetch(scriptURL,{
method:"POST",
body:JSON.stringify(data)
})
.then(res => alert("Cadastro enviado com sucesso"))
.catch(err => alert("Erro ao enviar"))

})

//EXTENCOES// 

function doPost(e){

var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

var data = JSON.parse(e.postData.contents)

sheet.appendRow([
data.apto,
data.nome,
data.telefone,
data.email,
data.emergencia,
data.telEmergencia,
new Date()
])

return ContentService.createTextOutput("ok")
}
