// =====================================================
// BLOCO 1 – Arrays e Métodos (map, filter, reduce, forEach)
// =====================================================
console.log("===== BLOCO 1 – ARRAYS =====");

// 1.1 – Array de nomes
const nomes = ["Ana", "Bruno", "Carla"];

// forEach: percorre o array e executa uma ação para cada item
nomes.forEach((nome) => {
  console.log(`Olá, ${nome}!`);
});

// map: cria um NOVO array transformando cada item
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);
console.log("Array original (inalterado):", nomes);

// 1.2 – Array de preços
const precos = [10, 25, 40, 5, 60];

// filter: cria um NOVO array só com os itens que passam no teste
const precosAcimaDe20 = precos.filter((preco) => preco > 20);
console.log("Preços acima de 20:", precosAcimaDe20);

// reduce: acumula todos os itens em um ÚNICO valor
const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma dos preços:", somaPrecos);

// 1.3 – Array de objetos
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 3 },
  { nome: "Estojo", preco: 25 },
  { nome: "Calculadora", preco: 80 },
];

const nomesProdutos = produtos.map((produto) => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter((produto) => produto.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log("Soma de todos os preços dos produtos:", totalProdutos);

produtos.forEach((produto) => {
  console.log(`${produto.nome}: R$ ${produto.preco}`);
});

// =====================================================
// BLOCO 2 – Manipulação do DOM (querySelector, createElement, classList)
// =====================================================
console.log("===== BLOCO 2 – DOM =====");

// 2.1 – Alterar o texto do h1
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Davi";

// 2.2 – Imprimir o texto de cada parágrafo .texto
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((p) => {
  console.log("Parágrafo:", p.textContent);
});

// 2.3 – Inserir 2 itens com innerHTML
// Usamos += para manter os 3 <li> que já existem no HTML (usados no Bloco 3)
const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Primeiro item</li><li>Segundo item</li>";

// 2.4 – Criar um <li> com createElement e adicionar com append
const novoItem = document.createElement("li");
novoItem.textContent = "Terceiro item";
lista.append(novoItem);

// 2.5 – Adicionar a classe destaque e verificar com contains
novoItem.classList.add("destaque");
console.log('O novo <li> tem a classe "destaque"?', novoItem.classList.contains("destaque"));

// 2.6 – Criar um <li> para cada tarefa
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
const itensTarefas = [];

tarefas.forEach((tarefa) => {
  const li = document.createElement("li");
  li.textContent = tarefa;
  lista.append(li);
  itensTarefas.push(li);
});

// Aplica a classe "feito" ao primeiro <li> de tarefa
itensTarefas[0].classList.add("feito");

console.log("Total de itens na lista:", lista.querySelectorAll("li").length);

// =====================================================
// BLOCO 3 – Eventos e Event Delegation
// =====================================================
console.log("===== BLOCO 3 – EVENTOS =====");

const botao = document.querySelector("#botao");

// 3.1 – click
botao.addEventListener("click", () => {
  console.log("Clicou!");
});

// 3.2 – mouseover
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

// 3.3 – keyup no campo #nome
const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => {
  console.log("Nome digitado:", campoNome.value);
});

// 3.4 – Event Delegation: UM único listener na #lista
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Item clicado:", e.target.textContent);
  }
});

// <li> criado via JavaScript DEPOIS do listener: o clique nele também funciona
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado via JS (clique em mim!)";
lista.append(itemDinamico);

// 3.5 – Formulário
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // evita o recarregamento da página

  const texto = campoTarefa.value.trim();

  if (texto === "") {
    console.log("Campo vazio – nada foi adicionado.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;
  lista.append(li);
  console.log("Tarefa adicionada:", texto);

  campoTarefa.value = "";
  campoTarefa.focus();
});
