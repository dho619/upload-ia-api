# Bem-vindo ao Backend do projeto Upload IA!

![NLW IA](https://img.shields.io/badge/NLW%20IA-Rocketseat-8257e5)
![Node.js](https://img.shields.io/badge/Node.js-18.17.1-green)
![Fastify](https://img.shields.io/badge/Fastify-4.23.1-blue)
![Prisma](https://img.shields.io/badge/Prisma-5.3.0-lightgrey)
![OpenAI](https://img.shields.io/badge/OpenAI-4.6.0-red)

[Link para o repositório do Frontend](https://github.com/dho619/upload-ia-web)

## Visão Geral

Esse é o backend do upload-ia, o projeto é uma API REST desenvolvida com Node.js e Fastify, que oferece uma solução completa para transformar vídeos em conteúdo de texto e gerar resultados a partir prompts de entradas, com auxílio de Inteligências artificiais. O projeto utiliza da uma integração com a API da OpenAI para garantir resultados incríveis.

## Recursos Principais

- **Transcrição de Vídeos com IA:** Utilizando a capacidade da API da OpenAI, nosso backend converte o áudio dos vídeos em texto. Isso torna o conteúdo do vídeo facilmente acessível e pesquisável.
- **Prompts de IA:** Com a ajuda da API da OpenAI, nosso sistema gera automaticamente títulos chamativos e descrições envolventes a partir do conteúdo transcritos. Isso economiza tempo e garante que seu conteúdo seja atraente para o público.

Esses recursos de transcrição e geração de prompts simplificam a criação de conteúdo, permitindo que você economize tempo e esforço, ao mesmo tempo em que mantém a qualidade. 🚀🎥🤖

## Como Usar

1. Clone este repositório:

   ```shell
   git clone https://github.com/dho619/upload-ia-api.git
   ```

2. Instale as dependências (lembre-se de usar o node ^18.17.1):

   ```shell
   cd upload-ia-api
   npm install | yarn | pnpm i
   ```

3. Crie o banco
   ```shell
   npm prisma migrate dev | pnpm prisma migrate dev | ...
   ```

4. Popule o banco com os prompts:
   ```shell
   npm prisma db seed  | pnpm prisma db seed  | ...
   ```

5. Verifique se criou o banco e preencheu a tabela de prompts:
   ```shell
   npm prisma studio | pnpm prisma studio | ...
   ```

6. Rode o projeto:

   ```shell
   npm run dev | yarn dev | pnpm run dev
   ```

## Contato

Se você tiver dúvidas, sugestões ou precisar de ajuda, não hesite em entrar em contato conosco em [geovanebarbosacc@hotmail.com](mailto:geovanebarbosacc@hotmail.com).

