# DevProfile 💻

**DevProfile** é uma Single Page Application (SPA) que permite buscar e visualizar rapidamente os repositórios públicos de qualquer usuário do GitHub.

Este projeto foi desenvolvido como parte da **Segunda Avaliação Prática** da disciplina de Fundamentos do Desenvolvimento Web (IFPB).

## 🛠️ Tecnologias e Conceitos Utilizados

**HTML Semântico**: Uso de tags como `<header>`, `<main>` e `<section>` para melhor acessibilidade. 
**CSS3 (Flexbox)**: Layout responsivo e organizado com paleta de cores em tons de preto e azul.
**JavaScript Assíncrono**: Uso de `Fetch API` com `async/await` para buscar dados em tempo real. 
**Manipulação de DOM**: Criação dinâmica de elementos para renderizar os repositórios. 

## ⚙️ Funcionalidades Implementadas (Requisitos)

**Busca Dinâmica**: Consulta ao endpoint da API do GitHub usando o nome de usuário digitado.   
  **Tratamento de Estados**:  
    -Exibição de mensagem de "Carregando...".   
    -Tratamento de erro 404 (Usuário não encontrado).   
    -Aviso para usuários sem repositórios públicos.  
    **Componentização**: Função dedicada para criar os cards de repositório, garantindo código limpo e legível.   
    **Responsividade**: Interface que se adapta a diferentes tamanhos de tela.   

## 🚀 Como usar

1.  Digite o nome de um usuário do GitHub no campo de busca. 
2.  Clique no botão "Buscar". 
3.  Veja a lista de repositórios públicos com nome, descrição e link direto. 

