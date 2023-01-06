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
> **Base URL Local**: `localhost:3000` </br>
> **Base URL Prod**: `https://onde-tem-ong.onrender.com`</br>
>[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=ondetemong&uri=https%3A%2F%2Fgithub.com%2FMSOliver1998%2Ffirst-json-server%2Fblob%2Fmain%2Fonde_tem_ONG_requisi%25C3%25A7oes)
></br>

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
| [**Ajudar ONG**](#ajudar-ong) | <font color=green>[POST]</font> | /donates | <font color=green> SIM </font> | <font color=green> SIM </font> | 
| [**Deletar ONG**](#deletar-ong) | <font color=red>[DELETE]</font> | /ongs/{id} | <font color=green> SIM </font> | <font color=red>NÃO</font> | 


# Users

## criar usuario:

>### Request
>**<font color=green>[POST] </font>/users**

>body
>```json
>  {
>    "email": "string",
>    "password": "string",
>    "name": "string",
>	 "userType":"owerOng/user" ,
>    "avatar": "string",
>    "background": "string"
>  }
>```
></br>

>### Response api
``` json
{
    "accessToken": "token do usuario",
    "user": {
        "email": "ongver@mail.com",
        "name": "string",
        "userType": "owerOng/user",
        "id": 3
    }
}
``` 
</br>


## login:
>### Request
>**<font color=green>[POST] </font>/users**

>body
>```json
>{
>    "email": "string",
>    "password": "string"
>}
>```
></br>

>### Response api

``` json
{
    "accessToken": "token do usuario",
    "user": {
        "email": "string",
        "id": "number"
    }
}
```
## editar usuario:

:warning:**O usuario deve ser dono do perfil para editar**
> ### Request
>**<font color=yellow>[PATCH] </font>/users/{id}**

> body
>```json
>  {
>    "email": "string",
>    "password": "string",
>    "name": "string",
>    "avatar": "string",
>    "background": "string"
>  }
>```
> authorization:`Bearer {token}`
></br>

> ### Response api
>``` json
>    {
>        "email": "string",
>        "password": "string",
>        "name": "string",
>        "avatar": "string",
>        "background": "string"
>    }
>```
></br>

## deletar usuario:
:warning:**O usuario deve ser o dono para deletar**
> ### Request
>**<font color=red>[DELETE]</font> /users/{id}**

>body: não requer </br>
>authorization:`Bearer {token}`

>### Response api
>```json
>   {}
>```
></br>



# ONGS

## criar ong:
:warning:**O usuario deve estar logado para criar uma ong**
>### Request
>**<font color=green>[POST] </font>/ongs**

>body
>```json
>  {
>    "userId":"number",
>    "name": "string",
>    "bio": "string",
>    "category": "string",
>  }
>```
>authorization:`Bearer {token}`
></br>

>### Response api
>```json
>{
>	"name": "string",
>	"userId": "number",
>	"bio": "string",
>	"category": "string",
>	"id": "number"
>}
>```
></br>



## editar ong:
>**<font color=yellow>[PATCH]</font> /ongs/{id}**

>body
>```json
>{
>	"name":"string",
>	"bio":"string",
>	"background":"string",
>	"avatar":"string"
>}
>```
>authorization:`Bearer {token}`
></br>

>### Request api
>```json
>{
>	"name": "string",
>	"userId": "number",
>	"bio": "string",
>	"category": "string",
>	"id": "number",
>	"background": "string",
>	"avatar": "string"
>}
>```
></br>


## ajudar ong: 
>### Request
>**<font color=green>[POST]</font> /donates**

>body
>```json
> {
>   "ongId":"number",
>   "userId": "number",
>   "value": "number"
>  }
>```
> authorization:`Bearer {token}`
></br>

>### Response api
>```json
>{
>	"ongId": "number",
>	"userID": "number",
>	"value": "number",
>	"id": "number"
>}
>```
></br>

## deletar ong:
:warning:**O usuario deve ser o dono para deletar a ong**
>**<font color=red>[DELETE]</font> /ongs/{id}**

>body: não requer</br>
>authorization:`Bearer {token}`

>### Response api
>```
>{}
>```
></br>


criado por Matheus Silva de Oliveira ❤️ 
para um projeto no curso da Kenzie Academy Brasil™
