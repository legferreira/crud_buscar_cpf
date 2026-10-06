//GET-PUT - busca a pessoa pelo CPF e preenche o formulário
function buscarDados() {
    const cpf = document.getElementById('cpf').value;

    fetch('pessoas', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf);

        if (pessoaEncontrada) {
            document.getElementById('id').value = pessoaEncontrada.id;
            document.getElementById('nome').value = pessoaEncontrada.nome;
            document.getElementById('sobrenome').value = pessoaEncontrada.sobrenome;
            document.getElementById('email').value = pessoaEncontrada.email;
            document.getElementById('idade').value = pessoaEncontrada.idade;
            document.getElementById('telefone').value = pessoaEncontrada.telefone;
            document.getElementById('rua').value = pessoaEncontrada.rua;
            document.getElementById('bairro').value = pessoaEncontrada.bairro;
            document.getElementById('cidade').value = pessoaEncontrada.cidade;
            document.getElementById('estado').value = pessoaEncontrada.estado;
            document.getElementById('rg').value = pessoaEncontrada.rg;
        } else {
            alert('Pessoa não encontrada!');
        }
    })
}

//PUT
function atualizarDados() {
    const id = document.getElementById('id').value;
    const cpf = document.getElementById('cpf').value;
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const telefone = document.getElementById('telefone').value;
    const rua = document.getElementById('rua').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const rg = document.getElementById('rg').value;

    if (id === '') {
        alert('Busque uma pessoa pelo CPF antes de atualizar!');
        return;
    }

    fetch(`pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cpf: cpf, nome: nome, sobrenome: sobrenome, email: email, idade: idade,
            telefone: telefone, rua: rua, bairro: bairro, cidade: cidade, estado: estado, rg: rg
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Dados atualizados com sucesso!');

        // limpa os inputs do formulário
        document.getElementById('id').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('nome').value = '';
        document.getElementById('sobrenome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('rua').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';
        document.getElementById('rg').value = '';
    });
}
