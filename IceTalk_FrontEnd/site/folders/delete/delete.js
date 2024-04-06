document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    var formData = document.getElementById("cpf").value; // Obtém os dados do formulário

    // Verifica se o campo CPF não está vazio
    if (!formData.trim()) {
        pushNotify('error', "Campo vazio", "Por favor, insira um CPF válido");
        return;
    }

    var url = 'http://localhost:8080/api/funcionarios/' + formData;
    var textarea = document.getElementById("textarea");

    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            pushNotify('error', "Erro", "Ocorreu um erro ao excluir os dados");
            throw new Error('Erro ao excluir dados.');
        }
        // Verifica se a resposta é um JSON válido
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return response.json();
        } else {
            // Se a resposta não for JSON, retorna um objeto vazio
            return {};
        }
    })
    .then(data => {
        // Se necessário, faça algo com a resposta da API
        pushNotify("success", "Sucesso", "Dados excluídos com sucesso");
    })
    .catch(error => {
        console.error('Erro:', error);
        pushNotify('error', "Erro", "Ocorreu um erro ao excluir os dados");
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
