# ProjectTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


O projeto API MARVEL esta em modulos, sendo assim, encontra-se subdividido em componentes.
O projeto se utiliza de css3 para suas folhas de estilo, flex box em suas divisões e responsivo.
Se inicia no app.module onde encontra o código do seu menu de navegação, assim como component first no qual tem sua função de div principal com texto principal e imagem de fundo.
em sequencia a pagina principal tem o component charactes, onde encontra-se o código responsável pelas listas de array que a aplicação recebe do site da MARVEL, em seu componente character, tem o código dos cards onde os personagens e respostas dos dados da API aparecem, e em parte principal o serviço com código typescript para realizar os parametros, observable, e resultados da API.
character detail, é o componente de nova pagina na qual aparecerá separadamente apenas um elemento do array, contendo botão de retorno, e formulário checkout de descontos (back-end não feito).
As rotas da aplicação se tem como a principal charactes, e details como pedido no projeto.


