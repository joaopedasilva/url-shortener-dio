# url-shortener-dio

Esse projeto é um encurtador de URL criado durante um desafio de código da Digital Innovation One no bootcamp da Eduzz.

## Funcionalidades adicionadas
* Retorno da lista de todas as URLs encurtadas
* Rota para deletar URLs

## Rodando o projeto

Para rodar o projeto, serão necessários os seguintes programas:

* Visual Studio Code (ou outro que preferir)
* NodeJS (>= v14)
* Yarn (>= 1.22) or npm (>= 6.14)
* MongoDB Atlas

Para executar utilize os camandos:
- `npm install` or `yarn`
- `npm run build:watch` or `yarn build:watch`
- `npm run dev` or `yarn dev`

## Endpoints da API

* Criando URL encurtada
```http
POST /shorten
```
```json
{
  "originURL": "<url original>"
}
```

* Retornando todas URLs encurtadas
```http
GET /urls
```

* Deletando URL
```http
DELETE /del
```
```json
{
  "shortURL": "<url encurtada"
}
```
