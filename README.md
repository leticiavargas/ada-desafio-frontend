<h1 align="center">📝 Desafio ADA - Kanban</h1>
<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-green" alt="badge de versão do projeto"/>
  <img src="https://img.shields.io/static/v1?label=NodeJS&message=18.14.0&color=339933&logo=node.js" alt="Badge versão NodeJS"/>
  <img src="https://img.shields.io/static/v1?label=ReactJS&message=%CB%8618.2.0&color=61DAFB&logo=react" alt="Badge versão React"/>
  <img src="https://img.shields.io/static/v1?label=Axios&message=%CB%861.3.4&color=5A29E4&logo=axios" alt="Badge versão Axios"/>
  <img src="https://img.shields.io/static/v1?label=Sass&message=%CB%861.58.1&color=CC6699&logo=sass" alt="Badge versão Sass"/>
</p>


<p align="center">
 <a href="#-sobre-o-projeto">Sobre o projeto</a> •
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-como-executar-o-projeto">Como executar o projeto</a> • 
 <a href="#-desenvolvedora">Desenvolvedora</a> • 
 <a href="#-licença">Licença</a>
</p>

## 📋 Sobre o projeto

<p align="justify">
  O desafio foi desenvolver o Frontend para um quadro Kanban em ReactJS. </br>
  O quadro possui três listas fixas: ToDo, Doing e Done, com cards que podem trocar de listas.
  O projeto utiliza backend em nodeJS com autenticação JWT.
</p>

## ⚙ Funcionalidades
- [x] Criar novo card na coluna ToDo
- [x] Editar um card
- [x] Excluir um card
- [x] Persistência das ações na API
- [x] Listar cards na respectiva coluna de acordo com o valor do campo `lista`
- [x] Conteúdo `markdown` do card renderizado no modo de visualização
- [x] Mudança de cards entre as listas

#### TO-DO
- [ ] Implementar mudança cards entre as colunas com Drag and Drop
- [ ] Estilizar highlight de codigo no markdown
- [ ] Adicionar testes unitários
- [ ] Criar docker-compose e dockerfiles para subir o projeto por completo


## 🕹 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   **[React](https://reactjs.org/)**
-   **[Sass](https://sass-lang.com/)**
-   **[React Icons](https://react-icons.github.io/react-icons)**
-   **[Create React App](https://create-react-app.dev/)**
-   **[React App Rewired](https://www.npmjs.com/package/react-app-rewired)**
-   **[Babel Plugin Module Resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)**

## 📦 Como executar o projeto

Importante, antes de começar, você vai precisar ter configurado ambiente de desenvolvimento com a versão atualizada do <kbd>NodeJS</kdb>.

O projeto possui dois servidores para rodar: API e Frontend, inicie clonando o repositório

```bash

# Clone este repositório
$ git clone git@github.com:leticiavargas/ada-desafio-frontend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ada-desafio-frontend

```

### Rodando a API
```bash

# Acesse a pasta do backend no terminal/cmd
$ cd BACK

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run server

# A aplicação será respondendo na porta 5000 -  http://localhost:5000

```

### Rodando o Front

```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd front

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta 3000 - acesse http://localhost:3000

```

## 💻 Desenvolvedora
<table>
  <tr>
    <td align="center"><a href="https://github.com/leticiavargas/">
      <img style="border-radius: 50%;" src="https://pt.gravatar.com/userimage/186334662/ec308d4832e83fdc97fbb724d6f69a70.jpg" width="100px;" alt="Foto Letícia Vargas"/>
      <br />
      <sub><b>Letícia Vargas</b></sub></a><br /> 
    </td>
  </tr>
</table>


## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ e ☕ por Letícia Vargas.

[![Linkedin Badge](https://img.shields.io/badge/-LetíciaVargas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leticiavargas/)](https://www.linkedin.com/in/leticiavargas/) 
[![Gmail Badge](https://img.shields.io/badge/-le.mvargas@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:le.mvargas@gmail.com)](mailto:le.mvargas@gmail.com)

---
