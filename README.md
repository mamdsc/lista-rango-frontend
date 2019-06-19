# Sistema de transações

#### Tecnologias usadas

- React
- Typescript

#### Organização dos diretórios

Seguindo o padrão de organização proposto pelo Dan Abramov, pois assim há mais controle do state no container e evitamos a duplicação de state.

- Components: Dumb components usados para construção da tela, organizados por feature;
- Containers: Smart components, componente principal que executa a lógica;
- Service: Fornece serviços necessários para aplicação;

#### Objetivos

Essa aplicação tem como objetivo exeibir e permitir a buscar aos restaurantes além de listar o respectivo cardápio.<br>
Tratamento da moeda: PT-BR.

#### Design

Optei por não utilizar frameworks para estilos, como antd ou material-UI.<br>
Utilizado padrões de projeto como YAGNI e KISS.

#### Para rodar o projeto

```bash
$ git clone https://github.com/mamdsc/lista-rango-frontend.git
$ npm install
$ npm start
```

Porta: [http://localhost:3000](http://localhost:3000).