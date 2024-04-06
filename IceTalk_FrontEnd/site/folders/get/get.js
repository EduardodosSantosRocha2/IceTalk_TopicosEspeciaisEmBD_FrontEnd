document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    formData = document.getElementById("cpf").value; // Obtém os dados do formulário
    console.log(formData)
    var url = 'http://localhost:8080/api/funcionarios/' + formData;
    var textarea = document.getElementById("textarea");
    console.log(url)

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            pushNotify('error', "Vazio", "escreva algo");
            throw new Error('Erro ao enviar dados.');
        } else {
            pushNotify("success", "Sucesso", "Dados enviados com sucesso");
        }
        return response.json();
    })
    .then(data => {
        textarea.value = " CPF: "+data.cpf + "\n Email: "+ data.email + "\n Idade: " + data.idade +"\n Nome: "+data.nome + "\n Numero de Telefone: "+ data.numeroTelefone;
        pushNotify('success', "Conexão", "Conexão com o banco de dados bem-sucedida");
    })
    .catch(error => {
        console.error('Erro:', error);
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
