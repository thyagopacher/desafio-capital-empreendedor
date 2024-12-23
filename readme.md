# Firebase Node API

## Descrição

Este projeto é uma API fictícia desenvolvida como parte de um teste técnico para a vaga de Full Stack Developer na empresa Capital Empreendedor. A API permite realizar o cadastro de clientes e a busca de seus dados utilizando o CNPJ como parâmetro. Foi construída utilizando Node.js com Firebase Firestore como banco de dados.

Tecnologias Utilizadas

- Node.js: Plataforma para desenvolvimento do servidor.

- Express: Framework para gerenciamento de rotas e middleware.

- Firebase Admin SDK: Biblioteca para conexão e manipulação do Firestore.

- Axios: Cliente HTTP para possíveis integrações futuras.

## Funcionalidades

Cadastro de Cliente

- Endpoint: POST /capital/post-customer

Campos obrigatórios:

- razaoSocial: Razão Social do cliente.

- nomeFantasia: Nome Fantasia do cliente.

- cnpj: CNPJ do cliente.

- telefone: Telefone de contato.

Busca de Cliente pelo CNPJ

- Endpoint: GET /capital/get-customer

Parâmetro de consulta:

- cnpj: CNPJ do cliente.

## Configuração do Ambiente

# Pré-requisitos

- Node.js instalado (versão 14 ou superior).

- Conta no Firebase com Firestore habilitado.

Configuração do Firebase

- Criar um projeto no Firebase.

- Baixar o arquivo de credenciais do Firebase Admin SDK (JSON).

- Salvar o arquivo de credenciais na pasta config do projeto.

- Configurar o arquivo firebaseAdminConfig.js

## Como Rodar o Projeto

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Instale as dependências:

```bash
npm install
```
Inicie o servidor:

```bash
node server.js
```
Acesse os endpoints pela ferramenta de sua escolha (Postman, Insomnia, etc.) ou diretamente via HTTP.

### Licença

Este projeto é licenciado sob a licença ISC.