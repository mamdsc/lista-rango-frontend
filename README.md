# Lista Rango

#### Tecnologias usadas

- React
- Typescript
- Styled-Components

#### Organização dos diretórios

Seguindo o padrão de organização proposto pelo Dan Abramov, com mais controle do state no container e evitando duplicação.

- Components: Dumb components usados para construção da tela, organizados por feature do projeto e 'common' sendo componentes reutilizáveis;
- Containers: Smart components, componentes principais que executam a lógica;
- Service: Fornece serviços necessários para aplicação;
- Meta-data: Estrutura de dados da aplicação como interfaces, models, etc;
- Theme: Tema da aplicação, responsável por estilizar globalmente, por exemplo cores e fontes padrão.

#### Objetivos

Exibir e permitir a buscar aos restaurantes de acordo com suas informações, além de listar o respectivo cardápio.<br>
Tratamento da moeda: PT-BR.

#### Design

Optei por não utilizar frameworks para estilos, como antd ou material-UI.<br>
Utilizado padrões de projeto como YAGNI e KISS.

#### Como começar

Clonar o repositório utilizando o link abaixo:

```bash
$ git clone https://github.com/mamdsc/lista-rango-frontend.git
```

Acessar a pasta raiz e instalar as dependências executando o comando:

```bash
$ npm install
```

Para subir localmente dentro da pasta execute o comando: 

```bash
$ npm start
```

#### Testes

- Jest
- Enzyme

Para rodar acesse a pasta raiz e execute o comando:

```bash
$ npm run test
```

Porta: [http://localhost:3000](http://localhost:3000).
