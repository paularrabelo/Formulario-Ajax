/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function(){
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();

    })
})*/

$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

        // $.ajax(endpoint).done(function(resposta) {
        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

        //     $('#endereco').val(endereco)

        //     setTimeout(function() {
        //         $(botao).find('i').removeClass('d-none');
        //         $(botao).find('span').addClass('d-none');
        //     }, 4000);

        fetch(endpoint).then(function(resposta){
            return resposta.json()
        })
        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

            $('#endereco').val(endereco)
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde")
        })
        .finally(function() {
            setTimeout(function() {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000);
        })
    })

    $('#formulario-pedido').submit(function(evento) {
        evento.preventDefault();

        if ($('#nome').val().length == 0) {
            throw new Error(alert('Digite o nome'));
        } else if ($('#sobrenome').val().length == 0) {
            throw new Error(alert('Digite o sobrenome'));
        } else if ($('#email').val().length == 0) {
            throw new Error(alert('Digite o e-mail'));
        } else if ($('#numero').val().length == 0) {
            throw new Error(alert('Digite o numero'));
        } else if ($('#endereco').val().length == 0) {
            throw new Error(alert('Pesquise o endereço'));
        } else {
            alert("Formulário enviado com Sucesso")
        }
    })
})