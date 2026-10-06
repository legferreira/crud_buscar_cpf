//Monta uma linha da tabela com os dados de uma pessoa
function montarLinha(objeto) {
    return `<tr>
        <td>${objeto.id}</td>
        <td>${objeto.cpf}</td>
        <td>${objeto.nome}</td>
        <td>${objeto.sobrenome}</td>
        <td>${objeto.email}</td>
        <td>${objeto.idade}</td>
        <td>${objeto.telefone}</td>
        <td>${objeto.rua}</td>
        <td>${objeto.bairro}</td>
        <td>${objeto.cidade}</td>
        <td>${objeto.estado}</td>
        <td>${objeto.rg}</td>
    </tr>`;
}

//GET - lista todas as pessoas
function listarDados() {
    fetch('pessoas')
    .then(response => response.json())
    .then(data => {
        const tabela = document.getElementById('tabela-corpo');
        tabela.innerHTML = '';
        //Utilizado o loop ForEach para iterar cada objeto do array retornado pela API
        data.forEach((objeto) => {
            tabela.innerHTML += montarLinha(objeto);
        })
    })
}

//GET - busca uma pessoa pelo CPF
function buscarPorCpf() {
    const cpf = document.getElementById('cpf').value;

    fetch('pessoas')
    .then(response => response.json())
    .then(data => {
        const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf);
        const tabela = document.getElementById('tabela-corpo');

        if (pessoaEncontrada) {
            tabela.innerHTML = montarLinha(pessoaEncontrada);
        } else {
            alert('Pessoa não encontrada!');
        }
    })
}

//Ao abrir a página, lista todas as pessoas
listarDados();
