# Cardápio Digital para Restaurante Universitário - Unioeste

Cardápio Digital Desenvolvido para Alunos e Funcionários que Frequentam os Restaurantes Universitários da Unioeste em Foz do Iguaçu.

**Acesse o Projeto:** https://eupedrocambui.github.io/cardapio-digital-unioeste/

## Objetivo
O objetivo foi **criar um cardápio digital** para os restaurantes universitários da Unioeste, incluindo o campus Jardim Universitário (JU)
e o CECE (Centro de Engenharias e Ciências Exatas), com a finalidade de oferecer uma forma mais **prática de visualizar as refeições disponibilizadas à comunidade.**

## Problema Identificado
Antes da implementação do projeto, o **acesso às informações era limitado**: no CECE, os estudantes só descobririam a refeição do dia ao se dirigirem 
ao restaurante universitário ou por meio da troca informal de informações entre alunos, enquanto no campus Jardim Universitário, o cardápio era divulgado exclusivamente por meio do Instagram, dificultando o acesso àqueles que não utilizavam
a rede social ou não possuíam acesso por outro motivo.

## Contexto Acadêmico
O projeto foi elaborado na disciplina **"Introdução à Ciência da Computação"**, sendo desenvolvido ao longo do primeiro e segundo período da graduação.

A disciplina foi ministrada pelos professores **Antonio Marcos Massao Hachisuca** e **Juan Carlos Sotuyo**, que contribuíram ativamente com orientações, sugestões e ideias que auxiliaram no aprimoramento do projeto, tanto em aspectos técnicos quanto conceituais.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

Ao longo do desenvolvimento do projeto, foram aplicados diversos conceitos fundamentais de desenvolvimento web, tais como:

- Responsividade e adaptação para diferentes tamanhos de tela
- Criação e modificação dinâmica de elementos da página
- Aplicação do padrão arquitetural MVC (Model–View–Controller) em partes do projeto
- Tratamento de eventos (cliques, carregamento da página, etc.)
- Uso de requisições para carregamento dinâmico de conteúdo
- Controle de fluxo da aplicação com JavaScript
- Interatividade com o usuário
- Boas práticas iniciais de desenvolvimento web

## Principais Funcionalidades
- **Exibição do Cardápio:**

Exibição do cardápio diário dos restaurantes, permitindo que os usuários visualizem de forma rápida e acessível as refeições.

- **Sistema de Avaliações:**

Implementação de um sistema completo de avaliações, no qual os usuários podem avaliar a refeição do dia e consultar o histórico de avaliações das refeições anteriores.

- **Página de Contato e Feedback:**

Disponibilização de uma página dedicada ao envio de feedbacks, sugestões ou comentários, possibilitando a comunicação direta dos usuários com os responsáveis pelo sistema.

## Como Executar o Projeto Localmente
1- Clone o Projeto:
```bash
git clone https://github.com/eupedrocambui/cardapio-digital-unioeste
```

2- Acesse o Diretório:
```bash
cd cardapio-digital-unioeste
```

3- Abra o arquivo ```index.html``` em um navegador web (de preferência Google Chrome).

Obs: não é necessário instalar dependências adicionais pois o projeto utiliza apenas HTML, CSS e JavaScript.

## Estrutura do Projeto
```
cardapio-digital-unioeste/
├── images/                                  # Imagens utilizadas no site
│   ├── 1_stars.png                          # Avaliação de 1 estrela
│   ├── 2_stars.png                          # Avaliação de 2 estrelas
│   ├── 3_stars.png                          # Avaliação de 3 estrelas
│   ├── 4_stars.png                          # Avaliação de 4 estrelas
│   ├── 5_stars.png                          # Avaliação de 5 estrelas
│   ├── chef.png                             # Imagem ilustrativa de chef
│   ├── favicon_unioeste.png                 # Favicon do site
│   ├── foto_usuario.png                     # Imagem de usuário
│   ├── icone_comida_hero.png                # Ícone de comida (hero section)
│   ├── icone_garcom_hero.png                # Ícone de garçom (hero section)
│   ├── icone_prato_hero.png                 # Ícone de prato (hero section)
│   ├── logo_unioeste_branca_footer.png      # Logo da UNIOESTE (rodapé)
│   ├── logo_unioeste_branca.png             # Logo da UNIOESTE (versão branca)
│   ├── logo_unioeste.png                    # Logo padrão da UNIOESTE
│   └── prato_hero.png                       # Imagem principal (hero section)
├── scripts/                                 # Arquivos JavaScript
│   ├── avaliacoes.js                        # Lógica do sistema de avaliações
│   ├── cardapioDigital.js                   # Controle e exibição do cardápio (home page)
│   ├── contato.js                           # Funcionalidades da página de contato
│   ├── footer.js                            # Comportamento e exibição do rodapé
│   ├── header.js                            # Comportamento e exibição do cabeçalho
│   └── refeicaoAvaliada.js                  # Lógica da página de refeição avaliada
├── styles/                                  # Arquivos de estilização CSS
│   ├── avaliacoes.css                       # Estilos da página de avaliações
│   ├── cardapioDigital.css                  # Estilos da home page
│   ├── contato.css                          # Estilos da página de contato
│   ├── footer.css                           # Estilos do rodapé
│   ├── header.css                           # Estilos do cabeçalho
│   ├── obrigado.css                         # Estilos da página de obrigado (contato)
│   ├── obrigadoAvaliacao.css                # Estilos da página de obrigado (avaliações)
│   └── refeicaoAvaliada.css                 # Estilos da página de refeição avaliada
├── README.md                                # Este arquivo
├── avaliacoes.html                          # Página de avaliações
├── contato.html                             # Página de contato
├── footer.html                              # Estrutura do rodapé
├── header.html                              # Estrutura do cabeçalho
├── index.html                               # Página principal (home page)
├── obrigado.html                            # Página de obrigado (contato)
├── obrigadoAvaliacao.html                   # Página de obrigado (avaliações)
└── refeicaoAvaliada.html                    # Página de refeição avaliada

```

---

Feito por [Pedro C. Martins](https://github.com/eupedrocambui)
