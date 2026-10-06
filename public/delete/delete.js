//DELETE - busca a pessoa pelo CPF e deleta pelo id
function deletarDados() {
    const cpf = document.getElementById('cpf').value;

    fetch('pessoas')
    .then(response => response.json())
    .then(data => {
        const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf);

        if (pessoaEncontrada) {
            fetch(`pessoas/${pessoaEncontrada.id}`, {
                method: 'DELETE'
            })
            .then(response => {
                alert('Pessoa deletada com sucesso!');
                document.getElementById('cpf').value = '';
            });
        } else {
            alert('Pessoa não encontrada!');
        }
    });
}
