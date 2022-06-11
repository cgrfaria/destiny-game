const elementoResposta = document.querySelector("#resposta")
const elementoPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]
//gerar número aleatório somente ao clicar no botão
function fazerPergunta() {

  //capturando sua pergunta
  if(elementoPergunta.value == "") {
    alert("Ops! Você esqueceu de digitar sua pergunta")
    return
  }

  // após apertar o botão perguntar, verificando o contúdo da pergunta o botão será desabilitado
  buttonPerguntar.setAttribute("disabled", true)

  //capturando a pergunta e retornando em elemento HTML para ser exibida em tela
  const pergunta = "<div>" + elementoPergunta.value + "</div>"

  //obter o númeor total de respostas no Array e restringindo a escolha de um número ramdômico, dentre os existentes no Array
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  
  //exibir a pergunta e a respostas obtida aleatóriamente
  elementoResposta.innerHTML = pergunta + respostas [numeroAleatorio]
  elementoResposta.style.opacity = 1;

  // desaparecendo com a resposta e a pergunta após 3 seg e reabilita o botão
  setTimeout(function(){
  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute("disabled")
  }, 3000)

}

// quero adicionar uma obrigatoriedade na mudança da pergunta, caso contrário, alert("Favor, realize outra pergunta")
// quero que a tecla enter envie a pergunta igual ao botão
// Náo permitir perguntas somente com números e com no mínimo duas palavras
