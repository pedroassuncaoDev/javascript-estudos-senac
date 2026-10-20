// Captura o formulário e o elemento de feedback
// Localize o item formulário e o item onde são exibidas as mensagens
const formulario =  document.getElementById("formulario-cadastro");
const feedbackMensagem = document.getElementById("mensagem-feedback")

// Função de validação que lança exceções
function validarFormulario(nome, email, senha) {

//validar se todos os campos do formulario estao preenchidos
if (!nome.trim() || !email.trim() || !senha.trim()) {
  throw new Error("Preencha todos os campos.");
}

// Regra 2: E-mail válido (validação simples)
// verificar se o e-mail possui o caracter "@"

if (!email.includes("@")) {
  throw new Error("Digite um e-mail valido.");
}
   
// Regra 3: Senha com no mínimo 6 caracteres
//verficar se a senha tem pelo menos 6 caracteres
if (senha.length <6) {
  throw new Error ("a senha deve ter no minimo 6 caracteres.");

}

  // Se tudo estiver OK, não lança erro
  return true;
}

// O único event listener, usando delegação no formulário
formulario.addEventListener('submit', (event) => {
  // Previne o comportamento padrão de recarregar a página
  event.preventDefault();

  // Limpa a mensagem de feedback anterior
  feedbackMensagem.textContent = '';
  feedbackMensagem.className = 'mensagem';

  // Captura os valores dos campos
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  
  

  // Usa try...catch para tratar as exceções
  try {
    // Tenta validar os dados
    validarFormulario(nome, email, senha);

    // Se chegar aqui, significa que a validação foi um sucesso
    feedbackMensagem.textContent = "usuário cadastrado com sucesso!";
    feedbackMensagem.classList.add ("sucesso");
    console.log("Usuário cadastrado:", { nome, email });

  } catch (error) {
    // Se um erro for lançado, ele será capturado aqui
    feedbackMensagem.textContent = "Erro: " + error.message;
    // [Complete o código abaixo. Usando classlist adicione a classe 'erro' do css]
    feedbackMensagem.classList.add("erro");
    console.error("Erro no cadastro:", error.message);
  }
});