# rotas
> base url local: localhost:3000
> base url prod: https://onde-tem-ong.onrender.com/
> Json insominia [insominia](https://drive.google.com/file/d/1ziU6G1YYhxEOE3zbr9Hejma3RoyKJI6H/view?usp=share_link)

## criar usuarios:
>[POST] /users

>body: 
>```json
>  {
>    "email": "string",
>    "password": "string",
>    "name": "string",
>    "avatar": "string",
>    "type": "user/owner_ong",
>    "background": "string"
>  }
>```
></br>

## editar usuario:
**O usuario deve ser dono do perfil para editar**
>[PATCH] /users/{id}

>body
>```json
>  {
>    "email": "string",
>    "password": "string",
>    "name": "string",
>    "avatar": "string",
>    "type": "user/owner_ong",
>    "background": "string"
>  }
>```
> authorization:`Bearer {token}`
></br>



## login:
>[POST] /login

>body
>```json
> {
>    "email": "string",
>    "password": "string"
>  }
>```
><br>

## criar ong:
>**O usuario deve estar logado para criar uma ong**
>[post]/ongs

>body
>```json
>  {
>    "userID":"number",
>    "name": "string",
>    "contact": [{"email": "string"}]
>  }
>```
>authorization:`Bearer {token}`
></br>

## editar ong:
>[PATCH]/ongs/{id}

>body
>```json
>  {
>    "name": "string",
>    "contact": [
>     {"email": "string","phone":"number","social":"string"}
>    ]
>  }
>```
>authorization:`Bearer {token}`
></br>

## ajudar ong: 
>[PATH] /ongs/{id}

>body
>```json
>  {
>    "users_Helpers": ["number[id]"],
>  }
>```
> authorization:`Bearer {token}`
></br>

## deletar ong:
>**O usuario deve ser o dono para deletar a ong**
>[DELETE] /ongs/{id}

>body: não requer 
>authorization:`Bearer {token}`
