document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    var formData = document.getElementById("cpf").value; 
    var url = 'http://localhost:8080/api/funcionarios/' + formData;
    var textarea = document.getElementById("textarea");

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            pushNotify('error', "Erro", "Erro ao enviar dados.");
            throw new Error('Erro ao enviar dados.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        textarea.value = "CPF: " + data.cpf + "\nEmail: " + data.email + "\nIdade: " + data.idade + "\nNome: " + data.nome + "\nNúmero de Telefone: " + data.numeroTelefone;
        pushNotify('success', "Conexão", "Conexão com o banco de dados bem-sucedida");
    })
    .catch(error => {
        console.error('Erro:', error);
        if (error instanceof SyntaxError && error.message === "Unexpected end of JSON input") {
            pushNotify("error", "Erro", "Resposta inválida do servidor: CPF inválido");
        } else {
            pushNotify("error", "Erro", "Erro ao buscar dados");
        }
    });
});

function pushNotify(status, title, text) {
    new Notify({
        status: status,
        title: title,
        text: text,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 'outline',
        position: 'right top'
    });
}
