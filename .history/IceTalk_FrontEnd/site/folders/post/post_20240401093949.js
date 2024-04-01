document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const formData = new FormData(this); // Obtém os dados do formulário
    try{




    }
    

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