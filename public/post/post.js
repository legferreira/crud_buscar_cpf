//POST
function enviarDados() {
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

    fetch('pessoas', {
        method: 'POST',
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
        alert('Pessoa cadastrada com sucesso!');

        // limpa os inputs do formulário
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
