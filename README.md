![HomeEcoleta](https://github.com/marcosaureliodev/projetoecoleta/blob/master/public/assets/logo.svg)
</br>
![HomeEcoleta](https://github.com/marcosaureliodev/projetoecoleta/blob/master/public/assets/EcoletaImage.png)


# Projeto Ecoleta
 Tem como objetivo manter uma conexão entre empresas e outras entidades que coletam resíduos, resíduos esses (organicos e inorganicos), ajudando pessoas e entidades que necessitam descartar esses materiais "resíduos". Esta solução vêem ajudar a previnir um grander problema que é o descarte  inadequado do lixo,  onde esta solução também vem ajudar e facílitar o processo de reciclagem e reutilização dos materias coletados.

# By Next Level Week da Rocketseat

Projeto **Open Source** desenvolvido na primeira semana **Next Level Week** da **Rocketseat**, com o uso das seguintes tecnologias: **_TypeScript, Node, Nunjucks._**

![LICENÇA](https://img.shields.io/badge/LICENÇA-MIT-GREEN) ![node](https://img.shields.io/badge/node-12.17.0-GREEN) ![web](https://img.shields.io/badge/npm-6.14.4-red) ![server](https://img.shields.io/badge/server-nodejs-orange) 

# Desenvolvedor :computer:
[<img src="https://avatars3.githubusercontent.com/u/63154006?s=460&u=42ba311a73dfa829f5ea8cd220fd054ee05314cb&v" width=115 > <br> <sub> Marcos Aurélio </sub>](https://github.com/marcosaureliodev) |
| :---: |  

# Como Utilizar :keyboard:

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **server**, no diretório do **website** e no diretório **mobile**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install
# ou
$ yarn
```

Exemplos:
```sh
# Instalando as dependências do server:
$ cd ./sources/server
$ npm install

# Instalando as dependências do website:
$ cd ./sources/website
$ npm install
```

Veja os arquivos **`package.json`** do <kbd>[server](./sources/server/package.json)</kbd> e <kbd>[website](./sources/website/package.json)</kbd>


### Utilizando o Website

```sh
# Abrindo o terminal no diretório do website:
$ cd ./sources/website

# Executando o website no modo de desenvolvimento:
$ npm run start
```

> Se o browser não abrir automaticamente, acesse: http://localhost:3000.

**\* Lembre de inserir no arquivo `.env` o IP exato que foi gerado pelo seu mobile após utilizar o comando `npm run start`.**

# Como Contribuir :octocat:
  
  - Verifique as **[Issues](https://github.com/x0n4d0/ecoleta/projects/1)** que estão abertas e se já não existe alguma com a sua feature;
  - Abra uma **Issue** com o nome e descrição da sua feature e assine com o seu usuário informando que irá fazê-la;
  - Faça um **[fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo)** do repositório;
  - Entre no sua página do GitHub e faça um **clone** do seu **fork**;
  - Crie uma *branch* com o nome da sua feature: `git chechout -b feat/minhaFeature`;
  - Faça as alterações necessárias no código ou na documentação;
  - Instale as dependências do *commitlint* na raíz do projeto para a verificação dos commits: `npm install` ou `yarn`;
  - Faça o *commit* das suas alterações seguindo as [convenções de commit](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/), adicione na descrição o id da sua Issue em parênteses e lembre de fechar a sua Issue com o id no rodapé do commit:

  ```
    <tipo>(escopo opcional): <descrição> (#x)

    [corpo do commit]

    Close #x
  ```
  Exemplo:
  ```sh
    feat: adicionado componente para tal coisa (#52)

    Foi adicionado um componente para tal coisa com o objetivo de melhorar tal coisa, deixando o projeto de tal maneira.

    Close #52
  ```
  - Faça um *push* para a sua *branch*: `git push origin feat/minhaFeature`;
  - Agora é só abrir um *pull request* no repositório que você fez o *fork* e assim que acontecer o *merge* sua Issue será fechada e suas alterações irão fazer parte do projeto;
  - Depois que o *merge* da sua pull request for feito, você pode deletar a sua *branch*.

# Licença :bookmark_tabs:

Esse repositório está licenciado pela MIT LICENSE. Para mais informações detalhadas, leia o arquivo [LICENSE](https://github.com/marcosaureliodev/Projeto-Ecoleta/blob/master/LICENSE) contido nesse repositório.
