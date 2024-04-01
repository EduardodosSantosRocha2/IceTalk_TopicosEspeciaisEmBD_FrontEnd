document.getElementById("myForm").addEventListener("submit", function(event) {
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
      showCloseButton: true,<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ICetalk - Sorveteria</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css"> <!-- Seu arquivo CSS personalizado -->
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">ICetalk Sorveteria</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="POST.html">POST</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="GET.html">GET</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="PUT.html">PUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="DELETE.html">DELETE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sobreNos.html">Sobre nos</a>
      </li>
    </ul>
  </div>
</nav>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>

      autoclose: true,
      autotimeout: 3000,
      gap: 20,
      distance: 20,
      type: 1,
      position: 'left bottom'
    })
  }
