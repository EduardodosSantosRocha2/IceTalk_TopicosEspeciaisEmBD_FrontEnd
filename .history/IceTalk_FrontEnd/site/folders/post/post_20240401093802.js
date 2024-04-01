document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const formData = new FormData(this); // Obtém os dados do formulário

    fetch('http://localhost:8080/api/funcionarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
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
            console.log('Dados enviados com sucesso:', data);
            pushNotify('error', "Vazio", "escreva algo");

        })
        .catch(error => {
            console.error('Erro:', error);
        });

});


function pushNotify(status,title,text) {
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
    })
}