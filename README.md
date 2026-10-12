# 🛒 Teste Técnico Front-End Júnior - Econverse

Este repositório contém a minha solução para o teste técnico de Front-End da Econverse. O desafio consistiu em desenvolver uma interface de e-commerce "pixel-perfect" baseada num design do Figma, com foco principal na criação de uma vitrine de produtos dinâmica que consome dados de uma API externa.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ferramentas:

*   **[React](https://reactjs.org/)**: Biblioteca principal para a construção da interface de utilizador.
*   **[Vite](https://vitejs.dev/)**: Ferramenta de build super rápida e gestor de ambiente de desenvolvimento.
*   **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para garantir um código mais robusto e previsível.
*   **[SCSS (Sass)](https://sass-lang.com/)**: Pré-processador CSS para uma estilização modular, aninhada (nesting) e com uso de variáveis.

## ✨ Destaques da Implementação

Durante o desenvolvimento, foram aplicadas diversas boas práticas de mercado:


*   **Resolução de CORS via Proxy:** Configuração de um proxy interno no `vite.config.ts` para contornar bloqueios de CORS e consumir a API oficial de forma segura durante o desenvolvimento.
*   **Separação de Responsabilidades (SoC):** Criação de uma camada dedicada em `src/services/api.ts` exclusiva para as chamadas assíncronas (fetch) e tipagem de dados, separando a lógica de negócio dos componentes visuais.
*   **Interatividade:** 
    *   Carrossel de produtos funcional utilizando `useRef` para navegação por setas.
    *   Criação de um `<Modal />` dinâmico que recebe e apresenta os dados específicos do produto selecionado.

## ⚙️ Pré-requisitos

Certifique-se de que tem o [Node.js](https://nodejs.org/) instalado na sua máquina.

## 🛠️ Como instalar, correr e compilar o projeto

Siga os passos abaixo para executar a aplicação no seu ambiente local:

**1. Clonar o repositório**
```bash
git clone [https://github.com/8Matheus/teste-front-end]
cd teste-front-end


2.Instale os pacotes necessários utilizando o NPM:

npm install

**Nota sobre o Vite:** 
O Vite já se encontra listado nas dependências deste projeto e será instalado automaticamente no passo 2 . No entanto, caso deseje instalar o Vite globalmente na sua máquina, pode executar o seguinte comando:

npm install -g vite

3. Executar o projeto em ambiente de desenvolvimento
Inicie o servidor local do Vite:

npm run dev

O terminal apresentará um link (geralmente http://localhost:5173/). Clique nele ou abra-o no seu navegador para ver a aplicação a funcionar.