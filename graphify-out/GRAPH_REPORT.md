# Graph Report - arrays-dom-eventos  (2026-10-16)

## Corpus Check
- Corpus is ~1,346 words - fits in a single context window. You may not need a graph.

## Summary
- 49 nodes · 86 edges · 5 communities
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.89)
- Token cost: 70,477 input · 0 output

## Community Hubs (Navigation)
- Formulários e Eventos
- Lista e Event Delegation
- Métodos map e filter
- Manipulação do DOM
- Arrays e reduce

## God Nodes (most connected - your core abstractions)
1. `lista` - 6 edges
2. `Bloco 2: Manipulacao do DOM` - 6 edges
3. `Event Delegation` - 6 edges
4. `index.html page` - 6 edges
5. `ul#lista` - 6 edges
6. `novoItem` - 5 edges
7. `Arrays, DOM e Eventos em JavaScript (README)` - 5 edges
8. `Bloco 1: Arrays e metodos` - 5 edges
9. `querySelector / querySelectorAll` - 5 edges
10. `addEventListener (click, mouseover, keyup, submit)` - 5 edges

## Surprising Connections (you probably didn't know these)
- `textContent vs innerHTML` --references--> `lista`  [INFERRED]
  README.md → app.js
- `tarefas` --shares_data_with--> `ul#lista`  [INFERRED]
  app.js → index.html
- `nomes` --conceptually_related_to--> `forEach`  [INFERRED]
  app.js → README.md
- `produtos` --conceptually_related_to--> `forEach`  [INFERRED]
  app.js → README.md
- `totalProdutos` --implements--> `reduce`  [INFERRED]
  app.js → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Form submit adds task to list** — index_formulario, index_tarefa, app_formulario, app_campotarefa, readme_preventdefault, index_lista [EXTRACTED 1.00]
- **Event delegation on ul#lista** — readme_event_delegation, readme_event_bubbling, app_lista, index_lista, app_itemdinamico, index_css_feito [EXTRACTED 1.00]
- **Array methods applied to produtos** — app_produtos, app_nomesprodutos, app_produtosbaratos, app_totalprodutos, readme_map, readme_filter, readme_reduce [INFERRED 0.85]

## Communities (5 total, 0 thin omitted)

### Community 0 - "Formulários e Eventos"
Cohesion: 0.24
Nodes (8): botao, campoNome, campoTarefa, formulario, button#botao, form#formulario, input#nome, input#tarefa

### Community 1 - "Lista e Event Delegation"
Cohesion: 0.33
Nodes (7): itemDinamico, lista, novoItem, CSS class .destaque, CSS class .feito, ul#lista, Event bubbling (e.target)

### Community 2 - "Métodos map e filter"
Cohesion: 0.22
Nodes (7): nomesMaiusculos, nomesProdutos, precosAcimaDe20, produtosBaratos, Arrays, DOM e Eventos em JavaScript (README), Bloco 1: Arrays e metodos, Bloco 3: Eventos e Event Delegation

### Community 3 - "Manipulação do DOM"
Cohesion: 0.24
Nodes (8): paragrafos, titulo, index.html page, p.texto (3 paragrafos), h1#titulo, Bloco 2: Manipulacao do DOM, Como executar, DOM (Document Object Model)

### Community 4 - "Arrays e reduce"
Cohesion: 0.31
Nodes (6): nomes, precos, produtos, somaPrecos, tarefas, totalProdutos

## Knowledge Gaps
- **5 isolated node(s):** `Como executar`, `DOM (Document Object Model)`, `Event bubbling (e.target)`, `button#botao`, `input#nome`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 6 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Arrays, DOM e Eventos em JavaScript (README)` connect `Métodos map e filter` to `Manipulação do DOM`, `Arrays e reduce`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `lista` (e.g. with `Event Delegation` and `textContent vs innerHTML`) actually correct?**
  _`lista` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Como executar`, `DOM (Document Object Model)`, `Event bubbling (e.target)` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `index.html page` connect `Manipulação do DOM` to `Formulários e Eventos`, `Lista e Event Delegation`, `Métodos map e filter`, `Arrays e reduce`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Event Delegation` (e.g. with `itemDinamico` and `lista`) actually correct?**
  _`Event Delegation` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Why does `lista` connect `Lista e Event Delegation` to `Manipulação do DOM`, `Arrays e reduce`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `ul#lista` (e.g. with `itemDinamico` and `novoItem`) actually correct?**
  _`ul#lista` has 3 INFERRED edges - model-reasoned connections that need verification._