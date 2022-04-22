# PokeInfo

Frontend y Backend para una pokedex con la capacidad de gestionar usuarios

## Tabla de datos

|Nombre|Datos|
|------|-----|
|Sebastian Alejandro Vásquez Cartagena| 202109114 |
|Hector Josue Orozco Salazar| Sección B|



# Backend

El Backend se realizó como una REST API en Nodejs. 
Es necesario tener Nodejs instalado en el sistema para poder correr el servidor.
Para correr el servidor ingresar a la carpeta llamada "server" y ejecutar el comando `npm install` para instalar todas las [dependencias](#-dependecias).
<br/>
De no dar una configuración específica el servidor correrá por defecto en el puerto 5000.

### Comprobar que la API funciona correctamente
En el navegador escribir `http://localhost:5000/` de funcionar se obtendrá un pequeño mensaje de bienvenida formateado en html.



## Endpoints

La API es capaz de obtener pokemons de la base de datos, loguear usuarios y autenticarlos por medio de los distintos endpoints especificados a continuación.

### `/`
Este endpoint utiliza el metodo `get`, devuelve un mensaje formateado en html que confirma la API esté funcionando


### `/api/auth/login`
Este endpoint utiliza un método `post`. recibe un Json formateado con username, password. Este comprueba que el usuario y contraseña pertenezca a algún usuario en la base de datos. De encontrarlos devuelve el username, avatar y token del usuario. De lo contrario solo se devuelve un código con un mensaje de error.


### `/api/users/test`
Utiliza un método `get`, este endpoint requiere de que el token del usuario ingresado sea enviado por medio de los encabezados de la request. De ser exitosa la comprobación del token devuelve un código 200 con un mensaje de confirmación, de haber ocurrido algún error devuelve un código de error 403 si no se envió un token y otro código 401 si el token fue rechazado.

### `/api/users/all`
Utiliza un método `get` y por seguridad requiere un token válido en el encabezado para devolver todos los usuarios en la base de datos con su respectiva información personal.


### `/api/pokemon/`
Con un método `get` devuelve todos los pokemones en la base de datos en formato Json.

### `/api/pokemon/id/:id`
Método `get` el id del pokemon se obtiene como parte de la url. Y devuelve el pokemon encontrado en la base de datos en formato Json.


### `/api/pokemon/name/:name`
Método `get` el nombre del pokemon se obtiene como parte de la url. Y devuelve el pokemon encontrado en la base de datos en formato Json.


### `/api/pokemon/type/:type`
Método `get` el tipo de los pokemons se obtiene como parte de la url. Y devuelve los pokemons encontrados en la base de datos en unalista de objetos Json.


### `/api/pokemon/all/:param`
Método `get` el parametro de búsqueda "global" se obtiene como parte de la url. Y devuelve los pokemons encontrados en la base de datos en una lista de objetos Json.


## Configuración

### Cambiar Puerto
Para cambiar el puesto en el que corre el servidor es necesario crear una variable global en la terminal llamada SERVPORT y asignarla a cualquier valor que se requiera.

* **Bash, Zsh** `$ export SERVPORT=5001`


* **Fish** `$ set -x SERVPORT 5001`


* **CMD** `set SERVPORT=5001`


* **Powershell** `$env:SERVPORT = 5001`


### Cambiar firma del JWT
Si se desea alargar o acortar el "secreto" del servido para generar token jwt existe un archivo llamado .env en la carpeta backend. En el que se puede configurar el token secreto del servidor.


## Dependencias 

* **bcryp**: Librería utilizada para encriptar y desencriptar contraseñas en la base de datos
* **cors**: Librería para permitir la conexión con otros dominios.
* **dotenv**: Librería para habilitar la configuración global con un archivo .env
* **express**: Librería para gestionar de forma sensilla los endpoints de la API.
* **jsonwebtoken**: Para permitir la autenticación de usuarios logueados con una cookie almacenada en el navegador

### Dependencias de desarrollo

* **morgan**: reinicia el servidor cuando se realiza un cambio en este.



# Frontend
El Frontend se realizó con el apoyo de la tecnología React.
Para correr el servidor del frontend escribir en la terminal `npm start` por defecto el servidor correrá en el puerto 3000, para acceder desde el navegador escribir `http://localhost:3000/`


## Manual de uso
![página de inicio](screenshots/homepage.png)


## React
React es una libreria para JavaScript que facilita el trabajo de crear interfaces de usuario. Se gestiona por medio de "componentes", lo que permite mantener de forma ordenada pequeñas piezas de código y así crear interfaces complejas.
<br/>
React usa una extensión de sitaxis llamada JSX, que permite crear mezclar de forma
explícita la lógica de renderización con la lógica de la interfaz de usuario. 

