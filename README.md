# Arrays, DOM e Eventos em JavaScript

Resolução dos desafios práticos da aula de **Arrays, DOM e Eventos**. O projeto tem só dois arquivos na mesma pasta:

- `index.html`: estrutura da página (título, parágrafos, botão, campos, formulário e lista)
- `app.js`: todo o código JavaScript, organizado em três blocos

## Como executar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Pressione **F12** e abra a aba **Console** para ver os resultados.
4. Interaja com a página: passe o mouse e clique no botão, digite no campo "Nome", clique nos itens da lista e adicione tarefas pelo formulário.

---

## Bloco 1: Arrays e métodos

| Método | O que faz | Retorno |
|--------|-----------|---------|
| `forEach` | **Percorre** o array e executa uma função para cada item. Serve para efeitos como imprimir no console ou criar elementos. | `undefined` (não gera nada novo) |
| `map` | **Transforma** cada item e devolve um **novo array** do mesmo tamanho. Exemplo: nomes → nomes em maiúsculas; produtos → só os nomes. | Novo array |
| `filter` | **Filtra** os itens: mantém apenas os que fazem a função retornar `true`. Exemplo: preços acima de 20; produtos abaixo de R$ 50. | Novo array (igual ou menor) |
| `reduce` | **Acumula** todos os itens em um **único valor**, usando um acumulador que começa com um valor inicial (aqui, `0`). Exemplo: soma de todos os preços. | Um único valor |

> `map` e `filter` **não modificam** o array original. Sempre devolvem um array novo.

## Bloco 2: Manipulação do DOM

O DOM (Document Object Model) é a representação da página HTML como objetos que o JavaScript consegue ler e alterar em tempo real.

- **Selecionar elementos:** `querySelector` devolve o primeiro elemento que corresponde ao seletor CSS (`#titulo`, `#lista`). `querySelectorAll` devolve **todos** (`.texto`) em uma `NodeList`, que pode ser percorrida com `forEach`.
- **Alterar conteúdo:** `textContent` insere apenas texto, que é a opção mais segura. `innerHTML` interpreta tags HTML e foi usado só para inserir os dois `<li>` de uma vez.
- **Criar elementos:** `document.createElement("li")` cria o elemento em memória. Depois definimos o texto e o colocamos na página com `append`.
- **Estilos com classes:** `classList.add` adiciona uma classe, `classList.toggle` liga ou desliga uma classe e `classList.contains` informa se o elemento tem a classe. As classes `destaque` e `feito` estão definidas no CSS do `index.html`.
- **Contar itens:** `querySelectorAll("li").length` informa quantos itens existem na lista.

## Bloco 3: Eventos e Event Delegation

- `addEventListener("click")` imprime "Clicou!" quando o botão é clicado.
- `addEventListener("mouseover")` troca o texto do botão para "Pode clicar!".
- `addEventListener("keyup")` imprime o valor do campo `#nome` a cada tecla solta.
- `addEventListener("submit")` no formulário:
  - `e.preventDefault()` impede que a página recarregue e perca os dados.
  - `.trim()` remove os espaços das pontas. Se o texto ficar vazio, nada é adicionado.
  - Se houver texto, um novo `<li>` é criado, adicionado à `#lista` e o campo é limpo.

### Por que usar Event Delegation?

Em vez de colocar um listener em **cada** `<li>`, colocamos **um único** listener na `<ul id="lista">`. Isso funciona porque os eventos **sobem** (*bubbling*): o clique em um `<li>` também chega ao elemento pai. Dentro do listener, `e.target` indica qual elemento foi clicado de fato, e conferimos `e.target.tagName === "LI"` antes de agir.

Vantagens:

1. **Performance:** um único listener, não importa se a lista tem 3 ou 3.000 itens. Isso usa menos memória e menos código.
2. **Elementos dinâmicos:** itens criados **depois** que o listener foi registrado (pelo `createElement` ou pelo formulário) já funcionam ao serem clicados, sem precisar registrar nada de novo. Um listener colocado diretamente em cada `<li>` só valeria para os itens que já existiam naquele momento.
