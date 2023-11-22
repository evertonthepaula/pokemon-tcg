# PTCG - Pokémon Trading Card Game ( Angular 17 + Tailwind CSS )

## Objetivos do projeto

- Playground para novas funcionalidades do Angular 17 e aprimorar os conhecimentos das melhorias lançadas no Angular 16 e Angular 15.
- Primeiro contato com Tailwind CSS

#### Erros e aprendizados

O projeto foi iniciado implementando o padrão Facade para manipular os dados de estado da aplicação, isso funcionou bem para a parte de autenticação, mas se mostrou um grande erro para a manipulação do controle dos baralhos de cartas.

Uma tentativa de manter a separação de conceitos fez com que os dados do Store e do Signal fossem diferentes, quando ter uma reflexão dos dados que estão em memoria e em storage seria o mais adequado. Desta maneira o storage seria usado apenas para persistir os dados que estão em memoria, e os recuperar posteriormente.

O maior erro neste dois casos foi não ter compartilhado uma interface entre as classes, mesmo que cada classe tenha sua especialização, compartilhar comportamento teria removido uma série de complexidades e problemas encontrados posteriormente no código. E como resultado disso, as classes Facade ficaram muito mais poluídas do que deveriam.

Possíveis soluções:

- Compartilhar interfaces entre as classes responsáveis pela manipulação do Estado;
- Utiulizar o padrão Flux para manipulação de estado e compartilhar com o Store;
- Não ter utilizado TDD para definir o comportamento antes de criar o metodo, isso testaria a eficiência das interfaces.

## implementado até o momento

- Angular V15
  - Standalone Components
  - Standalone Routes
- Angular V16
  - Angular Signals
  - DestroyRef Provider,
  - Required Inputs
- Angular v17
  - Control flow blocks

## O que esperar para o futuro

Impelmentar testes automatizados

## Descrição do projeto PTCG

### Lista de baralhos

- O usuário pode ver seus baralhos;
- O usuário pode criar um novo baralho;
- O usuário pode remover um baralho;
- O usuário pode editar um baralho;
- O usuário pode clicar num baralho para visualizar seus detalhes.

### Criação de um baralho

- O usuário pode colocar um nome no seu baralho;
- O usuário pode inserir cartas no baralho;
- O baralho tem que ter no mínimo 24 cartas e no máximo 60;
- Só podem ter 4 cartas com o mesmo nome, no baralho. (Nome não id);
- Após salvar o baralho voltamos para a página de lista de baralhos atualizada;
- O baralho será salvo apenas em memória.

### Detalhes do baralho

- O usuário consegue ver quantos pokemons e cartas de treinador existem no baralho. (atributo supertype)
- O usuário consegue ver de quantas cores é o baralho, quantos types únicos existem no baralho.

### Porque não utilziar TDD?

Desenhada como uma plataforma playground a nível de código, a arquitetura, responsabilidade das classes e métodos foram alterados com muita frequência, por isso no meu entendimento a utlização de TDD/BDD não seria adequada neste momento, pois como estou testando tecnologias novas os conceitos e responsabilidades podem mudar.
