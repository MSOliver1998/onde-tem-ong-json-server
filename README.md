# Rotas projeto onde tem ONG?

### Rodar localmente
``` node
    $: git@github.com:MSOliver1998/first-json-server.git
    $: yarn
    $: yarn add -D json-server json-server-auth
    $: node server.js
```



></br>
>
> **Base URL Local**: `localhost:3000`
> **Base URL Prod**: `https://onde-tem-ong.onrender.com`
> <center><a href='https://drive.google.com/file/d/1ziU6G1YYhxEOE3zbr9Hejma3RoyKJI6H/view?usp=share_link'><img src="./src/logoInsominia.png"width="100" height="100"></a><center>


## Users
| Requisição | Metodo | Endpoint | Token? | Body? | 
| :---: | :---: | :---: | :---: | :---: |
| [**Criar usuario**](#criar-usuario) | <font color=green>[POST]</font> |  /users  | <font color=red>NÃO</font> | <font color=green> SIM </font> | 
| [**Login**](#login) | <font color=green>[POST]</font> | /users | <font color=red>NÃO</font> | <font color=green> SIM </font> |
| [**Editar usuario**](#editar-usuario) | <font color=yellow>[PATCH]</font> | /users/{id} | <font color=green> SIM </font> | <font color=green> SIM </font> |
| [**Deletar usuario**](#deletar-usuario) | <font color=red>[DELETE]</font> | /users/{id} | <font color=green> SIM </font> | <font color=red>NÃO</font> | 


## ONGS
| Requisição | Metodo | Endpoint | Token? | Body? | 
| :---: | :---: | :---: | :---: | :---: |
| [**Criar ONG**](#criar-ong) | <font color=green>[POST]</font> |  /ongs | <font color=red>NÃO</font> |<font color=green> SIM </font> | 
| [**Editar ONG**](#editar-ong) | <font color=yellow>[PATCH]</font> | /ongs/{id} | <font color=green> SIM </font> | <font color=green> SIM </font>| 
| [**Ajudar ONG**](#ajudar-ong) | <font color=yellow>[PATCH]</font> | /ongs/{id} | <font color=green> SIM </font> | <font color=green> SIM </font> | 
| [**Deletar ONG**](#deletar-ong) | <font color=red>[DELETE]</font> | /ongs/{id} | <font color=green> SIM </font> | <font color=red>NÃO</font> | 


# Users

## criar usuario:
>**<font color=green>[POST] </font>/users**

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
></br>

## login:
>**<font color=green>[POST] </font>/users**

>body
>```json
> {
>    "email": "string",
>    "password": "string"
>  }
>```
><br>

## editar usuario:

:warning:**O usuario deve ser dono do perfil para editar**
>**<font color=yellow>[PATCH] </font>/users/{id}**

> body
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

## deletar usuario:
:warning:**O usuario deve ser o dono para deletar**
>**<font color=red>[DELETE]</font> /users/{id}**

>body: não requer 
>authorization:`Bearer {token}`

# ONGS

## criar ong:
:warning:**O usuario deve estar logado para criar uma ong**
>**<font color=green>[POST] </font>/ongs**

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
>**<font color=yellow>[PATCH]</font> /ongs/{id}**

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
>**<font color=yellow>[PATCH]</font> /ongs/{id}**

>body
>```json
>  {
>    "users_Helpers": ["number[id]"],
>  }
>```
> authorization:`Bearer {token}`
></br>

## deletar ong:
:warning:**O usuario deve ser o dono para deletar a ong**
>**<font color=red>[DELETE]</font> /ongs/{id}**

>body: não requer</br>
>authorization:`Bearer {token}`


criado por Matheus Silva de Oliveira ❤️ 
para um projeto no curso da Kenzie Academy Brasil™
