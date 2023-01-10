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
| [**Cria usuario**](#criar-usuario) | <font color=green>[POST]</font> |  /users  | <font color=red>NÃO</font> | <font color=green> SIM </font> | 
| [**Login**](#login) | <font color=green>[POST]</font> | /login | <font color=red>NÃO</font> | <font color=green> SIM </font> |
| [**usuario por Id**](#user-por-id)|  <font color=blueviolet>[GET]</font> | /users/{id} | <font color=green> SIM </font> | <font color=red>NÃO</font> |  
| [**Doações feitas**](#doações-feitas) | <font color=blueviolet>[GET]</font> |  /users/donates/{id} | <font color=green> SIM </font> | <font color=red>NÃO</font>|
| [**Editar usuario**](#editar-usuario) | <font color=yellow>[PATCH]</font> | /users/{id} | <font color=green> SIM </font> | <font color=green> SIM </font> |
| [**Deletar usuario**](#deletar-usuario) | <font color=red>[DELETE]</font> | /users/{id} | <font color=green> SIM </font> | <font color=red>NÃO</font> | 


## ONGS
| Requisição | Metodo | Endpoint | Token? | Body? | 
| :---: | :---: | :---: | :---: | :---: |
| [**Cria ong**](#criar-ong) | <font color=green>[POST]</font> |  /users  | <font color=red>NÃO</font> | <font color=green> SIM </font> |
| [**Editar ONG**](#editar-ong) | <font color=yellow>[PATCH]</font> | /ongs/{id} | <font color=green> SIM </font> | <font color=green> SIM </font>|
| [**ONG por Id**](#ong-por-id)|  <font color=blueviolet>[GET]</font> | /ong/{id} | <font color=green> SIM </font> | <font color=red>NÃO</font> | 
| [**Todas as ONG's**](#todas-as-ongs)|  <font color=blueviolet>[GET]</font> | /ong | <font color=red>NÃO</font>| <font color=red>NÃO</font> | 
| [**Doar para ONG**](#doar-para-ong) | <font color=green>[POST]</font> | /donates | <font color=green> SIM </font> | <font color=green> SIM </font> |
| [**Doações recebidas**](#doações-recebidas) | <font color=blueviolet>[GET]</font> |  /ong/donates/{ID} | <font color=green> SIM </font> | <font color=red>NÃO</font>|  
| [**Ajudar ONG**](#ajudar-ong) | <font color=green>[POST]</font> | /donates | <font color=green> SIM </font> | <font color=green> SIM </font> | 
| [**Deletar ONG**](#deletar-ong) | <font color=red>[DELETE]</font> | /ongs/{id} | <font color=green> SIM </font> | <font color=red>NÃO</font> | 


# Users

## criar usuario:

>### Request
>**<font color=green>[POST] </font>/users**

>#### body
```json
    "avatar":"link",
    "background":"link",
    "bio":"string",
    "email": "email",
    "name": "string",
    "password": "string",
    "userType": "user",
```
>### Response api
``` json
    {
        "accessToken": "string",
        "user": {
            "email": "string",
            "avatar": "string",
            "background": "string",
            "name": "string",
            "userType": "user",
            "id": "number"
        }
    }
``` 
</br>


## login:
>### Request
>**<font color=green>[POST] </font>/users**

>#### **body**
```json
{
    "email": "string",
    "password": "string"
}
```

>### Response api

``` json
{
	"accessToken": "string",
	"user": {
		"email": "string",
		"avatar": "string",
		"background": "string",
		"bio": "string",
		"name": "string",
		"userType": "string",
		"id": "number"
	}
}
```

## doações feitas:
>### Request
>**<font color=blueviolet>[GET]</font> /user/donates/{ID}**
>#### body 
>não requer</br> 
>**authorization**:`Bearer {token}`

>### Response api
```json
[
	{
		"user": {
			"userId": "number",
			"name": "string",
			"avatar": "string"
		},
		"ong": {
			"ongId": "number",
			"name": "string",
			"avatar": "string"
		},
		"public": "boolean",
		"value": "number",
		"id": "number"
	}
]
```
</br>

## user por Id:
>### Request
>**<font color=blueviolet>[GET]</font> /user/{ID}**
>body não requer</br> 
>authorization:`Bearer {token}`

>### Response api
```json
{
	"email": "string",
	"password": "string",
	"avatar": "string",
	"background": "string",
	"bio": "string",
	"name": "string",
	"userType": "user",
	"id":"number"
}
``` 
</br>

## editar usuario:

:warning:**O usuario deve ser dono do perfil para editar**
> ### Request
>**<font color=yellow>[PATCH] </font>/users/{id}**

>#### body
```json
  {
    "email": "string",
    "password": "string",
    "name": "string",
    "avatar": "string",
    "background": "string"
  }
```
> **authorization**:
```java script 
    Bearer {token}
```
</br>

> ### Response api
``` json
{
	"email": "string",
	"password": "string",
	"avatar": "string",
	"background": "string",
	"name": "string",
	"userType": "user",
	"id": "number",
	"bio": "string"
}
```
</br>

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

>### Request
>**<font color=green>[POST] </font>/users**

>#### body
```json
    "avatar":"link",
    "background":"link",
    "bio":"string",
	"category":"string",
    "email": "email",
    "name": "string",
    "password": "string",
    "userType": "ownerOng",
	"metas": "number",
```
>### Response api
``` json
    {
        "accessToken": "string",
        "user": {
            "email": "string",
            "avatar": "string",
            "background": "string",
            "name": "string",
			"metas": "number",
            "userType": "ownerOng",
            "id": "number"
        }
    }
``` 
</br>

## todas as ongs:
>### Request
>**<font color=blueviolet>[GET]</font> /users/ong**
>body **não requer**</br> 
>authorization:**não requer**

>### Response api
>```json
>{
>	"name": "string",
>	"userId": "number",
>	"bio": "string",
>	"category": "string",
>	"id": "number",
>	"background": "string",
>	"avatar": "string"
>},
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


## ong por Id:
>### Request
>**<font color=blueviolet>[GET]</font> /ong/{id}**
>body não requer</br> 
>authorization:`Bearer {token}`

>### Response api
```json
{
	"email": "string",
	"password": "string",
	"avatar": "string",
	"background": "string",
	"category": "string",
	"metas": "number",
	"name": "string",
	"userType": "owerOng",
	"id": "string",
	"bio": "string"
}
``` 
</br>


## editar ong:
>**<font color=yellow>[PATCH]</font> /ongs/{id}**

body
```json
{
	"name":"string",
	"bio":"string",
	"background":"string",
	"avatar":"string"
}
```
authorization:`Bearer {token}`
</br>

>### Request api
```json
{
	"name": "string",
	"userId": "number",
	"bio": "string",
	"category": "string",
	"id": "number",
	"background": "string",
	"avatar": "string"
}
```
</br>


## doar para ong: 
>### Request
>**<font color=green>[POST]</font> /donates**

body
```json
 {
   "ong":{"ongId":"number","name":"string","avatar":"string"},
   "user":{"userId": "number","name":"string","avatar":"string"},
   "value": "number",
   "public": "true/false"
  }
```
 authorization:`Bearer {token}`
</br>

>### Response api
```json
{
	"ong":{"ongId":"number","name":"string","avatar":"string"},
   "user":{"userId": "number","name":"string","avatar":"string"},
	"value": "number",
	"id": "number"
}
```
</br>

## doações recebidas:
>### Request
>**<font color=blueviolet>[GET]</font> /ong/donates/{ID}**

body não requer</br> 
authorization:`Bearer {token}`

### Response api
```json
[
   {
		"user":{"userId": "number","name":"string","avatar":"string"},
		"ong":{"ongId":"number","name":"string","avatar":"string"},
		"value": "number",
       "public": "true/false",
		"id": "number"
	},
   {
		"user":{"userId": "number","name":"string","avatar":"string"},
		"ong":{"ongId":"number","name":"string","avatar":"string"},
		"value": "number",
       "public": "true/false",
		"id": "number"
	},
]
```
</br>


## deletar ong:
:warning:**O usuario deve ser o dono para deletar a ong**
>**<font color=red>[DELETE]</font> /ongs/{id}**

>body: não requer</br>
>authorization:`Bearer {token}`

>### Response api
```json
{}
```
</br>


criado por Matheus Silva de Oliveira ❤️ 
para um projeto no curso da Kenzie Academy Brasil™
