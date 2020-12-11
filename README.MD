# tic-tac-toe-frontend-mobile

Frontend do jogo da velha utilizando React Native + Expo

## Conteúdo

- [Pré-requisitos](#pré-requisitos)
- [Instalando o Expo CLI](#instalando-o-expo-cli)
- [Criando o projeto](#criando-o-projeto)
- [Rodando o projeto com seu dispositivo móvel](#rodando-o-projeto-com-seu-dispositivo-móvel)
- [Criando a estrutura do projeto](#Criando-a-estrutura-do-projeto)
- [Instalando as bibliotecas](#instalando-as-bibliotecas)
- [Autor](#autor)

## Pré Requisitos

- NodeJS 12.x.x ou superior
- Yarn (recomendado)
- VSCode (recomendado)

#### Obs.: Você pode utilizar o npm como gerenciador de pacotes. Ele já vem pré instalado quando você instala o NodeJS. Mas recomendo que use o Yarn por ser mais ágil no processo de instalação de dependências

## Instalando o Expo CLI

```bash
$ yarn globall add expo-cli
# npm install -g expo-cli

```

## Criando o projeto

```bash
$ expo init tictac-toe-frontend-mobile
```

## Rodando o projeto com seu dispositivo móvel

1.  Baixe o app Expo na loja de aplicativos do seu smartphone
2.  Inicie o projeto no computador:

```bash
$ cd tictac-toe-frontend-mobile
$ yarn start
# npm start
```

3.  A página do servidor expo deverá abrir no seu navegador
4.  Certifique-se de que seu smartphone e seu computador estejam conectados na mesma rede
5.  No app Expo, no seu smartphone, abra o leitor de QR Code
6.  Agora o projeto deverá estar rodando no seu smartphone

## Criando a estrutura do projeto

#### A partir desta etapa você pode utilizar o VS Code

1.  Na pasta raiz do projeto crie uma pasta chamada src
2.  Dentro da pasta src crie outras 5 páginas (assets, components, screens, services, styles)
3.  Dentro da pasta assets crie as pastas images e svg

- Assets: onde ficarão disponíveis as imagens, sons, svg e videos da aplicação
- Componentes: Aqui fica os componentes utilizados pela aplicação como botões, inputs, labels etc
- Screens: Essa pasta armazena as telas da aplicação
- Services: Nessa pasta fica alguns códigos de serviços como calculos matemáticos, configuração da api e serviços globais das rotas entre telas
- Styles: Armazena os styles globais da aplicação como as cores

## Instalando as bibliotecas

1.  Abra uma nova aba do terminal e, dentro da pasta raiz do projeto, instale as bibliotecas Styled Components, React Navigation, React Redux, Redux Saga, Socket.io Client e Axios

```bash
$ yarn add styled-components @react-navigation/native redux @reduxjs/toolkit redux-saga socket.io-client axios
```

- Styled Components: Com essa lib você podera utilizar código CSS para estilizar seus componentes React Native
- React Navigation: Essa lib atua no gerenciamento de rotas entre telas da aplicação
- React Redux e Redux saga: Atua nogerenciamento de estados globais da aplicação
- Socket.io Cliente: Biblioteca para comunicação com o servidor via web sockets
- Axios: Biblioteca para fazer requisições HTTP no React Native

## Autor

Fernando Severino Almeida

- [LinkedIn](https://www.linkedin.com/in/fernando-severino-782332172/) | [Instagram](https://www.instagram.com/fernandosev_/)
