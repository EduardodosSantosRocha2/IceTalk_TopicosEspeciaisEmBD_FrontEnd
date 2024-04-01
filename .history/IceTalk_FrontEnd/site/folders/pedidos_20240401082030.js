document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const formData = new FormData(this); // Obtém os dados do formulário

    fetch('http://localhost:8080/api/funcionarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' // Adicionando cabeçalho CORS
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar dados.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dados enviados com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
