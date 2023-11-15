# PTCG - Pokémon Trading Card Game ( Angular 17 + Tailwind CSS )

## Objetivos do projeto

- Playground para novas funcionalidades do Angular 17 e aprimorar os conhecimentos das melhorias lançadas no Angular 16 e Angular 15.
- Conhecer Tailwind CSS

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
