const addloading = () => {
    const button = document.getElementById('botão');
    button.innerHTML = '<img class="carregando" src="imagens/Loading-PNG-Images.png" alt="imagem de carregando">';
}

const removeloading = () => {
    const button = document.getElementById('botão');
    button.innerHTML = 'Enviar';
}


const enviar = (event) => {
    event.preventDefault();
    addloading();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const telefone = document.querySelector('input[name=numero_telefone]').value;
    const opcoes = document.querySelector('input[name=opcoes]').value;
    const mensagem = document.querySelector('textarea[name=mensagem]').value;

    fetch('https://api.sheetmonkey.io/form/nPvmpixB6UEXQBkNtaQ9fc', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json', 
        },
        body: JSON.stringify({name, email, telefone, opcoes, mensagem}),
    })

    .then(response => {
        if (response.ok) {
            // Exibe um alerta de sucesso se a resposta da requisição for bem-sucedida
            alert("Formulário enviado com sucesso!");
            removeloading();
        } else {
            // Exibe um alerta de erro se a resposta da requisição não for bem-sucedida
            alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
        }
    })
}

document.querySelector('#form-contato').addEventListener('submit', enviar);


