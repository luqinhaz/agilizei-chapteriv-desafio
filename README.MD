# Desafio Bootcamp Agilizei - Chapter IV

## Execução
https://user-images.githubusercontent.com/22923012/145126310-1514157d-548d-4f67-a3cf-aecd708fb432.mp4

## Relatórios


### Features
- Execução do teste de cadastro de usuário no ambiente Automation Practice:  (http://automationpractice.com/index.php);
- Geração de relatórios com o Mochawesome.

![logoAgilizei](https://user-images.githubusercontent.com/22923012/145126460-c228a789-b72c-46fd-adb6-1d2feb45c55f.png)

# Instalação
Instalar o [Node.js](https://nodejs.org/en/download/ "Node.js")

Versões utilizadas:
- Node version: v14.16.0
- NPM version: v6.14.11

Clonar o projeto:
```sh
git clone https://github.com/luqinhaz/agilizei-chapteriv-desafio.git
```

Navegar para a pasta do projeto e instalar as dependencias:
```
cd desafio02Chapteriv
npm install
```


Para executar os testes com o modo visual do Cypress:
```
  npm run cy:open
  E selecionar o caso de teste para execução
```

Para executar os testes em modo headless:
```
  npm run cy:run
```

Para gerar os relatórios:
```
  npm run report:merge
  npm run report:mocha
```

Para excluir os relatórios já gerados:
```
  npm run report:clean
```
