anotações SOLID/clean architeture

Single responsability -> cada arquivo só faz uma coisa/tem apenas uma função<br/>
Open closed principe -> nunca extender uma classe e a modificar (overwrite) por completo (menor importancia)<br/>
Liskov substitution principle -> facilitar substituição de requerimentos<br/>
Interface agregation principle -> evitar interfaces maiores. quebrar em interfaces mais 'especializadas'(menor importancia)<br/>
Dependency inversion principle -> não depender de implementações, e sim de interfaces. associado ao princípio L<br/>
<br/>

estrutura base de pastas: controller | repository | model/entity | services/useCase

controller -> lida com a requisição. a quebra para ser digerida pelo useCase<br/>
useCases -> regras de negócios<br/>
entities/models -> objetos que representam entidades do banco (especialmente útil no caso de ORMs)<br/>
repositories -> lida com interação com o BD<br/>

particularidade opcional: package by feature -> colocar todos os arquivos relativos a uma funcionalidade na mesma pasta. <br/>
ex: pasta 'CreateUser' contendo o controller, useCase, DTO, testes... na mesma pasta. 

obs: DTO = (Data Transfer Object). formato dos dados para serem transferidos de uma camada para outra
