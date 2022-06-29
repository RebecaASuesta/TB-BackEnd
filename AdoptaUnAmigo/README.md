# 🐾 Adopta un Amigo

## Índice

* Sobre el proyecto
    * Instalación y despliegue
    * Tecnologías usadas
    * Origen
    * Objetivos
    * Concepto e inspiración

* Retos presentados

* Agradecimientos

* Autores

## Sobre el proyecto

### 💫 Instalación y despliegue

Para descargarte el repositorio, en Visual Studio, abre una terminal y ejecuta el comando siguiente:

````
git clone https://github.com/RebecaASuesta/AdoptaUnAmigo
````

Posteriormente puedes descargarte nuestros endpoints para Postman en [este enlace ↗ ](https://documenter.getpostman.com/view/21015186/Uz5ArJQZ)
 
Seguidamente tendrás que descargar los módulos externos con node (Express,Sequelize,Bcrypt, etcetc). Para ello, realiza el siguiente comando.

```
npm i
```
Si no tienes instalado Sequelize, puedes instalarlo de forma global con el siguiente comando. ¿No conoces Sequelize? Aquí más [info ↗](https://sequelize.org/)
```
npm install sequelize-cli -g
```
Modificar la base de datos, dentro de config/config.example.json para que puedas usar el proyecto.  

````
"development": {
      "username": "Your user", 
      "password": "Your password",
      "database": "Your database's name",
      "host": "Your host",
      "dialect": "mysql",
      "jwt_secret": "Your jwt password"
````
Después de crear la base de datos, aprovecha los seeds que proporcionamos con ella. Ejecuta los siguientes comandos: 

````
sequelize db:create

sequelize db:migrate

sequelize db:seed:all
````
Finalmente levanta el servidor con el siguiente comando para arrancar node.

````
npm start
````



### 💻 Tecnologías usadas

* JavaScript
* Node
* Express
* Bcrypt
* jsonwebtoken
* MySQL / Sequelize
* Postman
* MySQL Workbench

### Origen

Este proyecto está pensado como un ejercicio en The Bridge que nos permita poner en práctica los nuevos conocimientos adquiridos sobre Backend, concretamente utilizando Node+Express y Sequelize. Vienen de la mano, el saber gestionar bases de datos con  MySQL y diversos módulos externos que nos han ayudado a desarrollar el proyecto. 

<img src="https://i.imgur.com/s6KIrOg.png" alt="database diagram" width="500"/>

### ⚔️ Objetivos

- [X] Crear una API REST capaz de:

    - [X] Registro de usuarios usando Bcrypt.

    - [X] Login de usuarios + token + middleware.

    - [X] Que sea capaz de crear un CRUD.

    - [X] Al menos una relación Many to Many y otra One to Many.

    - [X] Utilización de seeders.

### 🚀  Endpoints 

A lo largo del proyecto hemos realizado los siguientes endpoints con su respectivo testeo con Postman, comfirmando la información que devolvía cada uno. 

#### 🙋‍♀️ USUARIOS 🙋‍♀️

* Endpoint para crear nuevo usuario
* Endpoint para mostrar todos usuarios con sus adopciones
* Endpoint para buscar usuario por ID
* Endpoint para actualizar un usuario por ID
* Endpoint para eliminar un usuario por ID
* Endpoint para hacer login 
* Endpoint para hacer logout

#### 🐯 ADOPCIONES (aka Pedidos) 🐯

* Endpoint para crear nueva adopción
* Endpoint para mostrar todas las adopciones
* Endpoint para buscar adopciones por ID
* Endpoint para actualizar adopciones por ID
* Endpoint para eliminar adopciones por ID

#### 🙉 ANIMALES (aka Productos) 🙉

* Endpoint para crear ficha de un animal 
* Endpoint para mostrar todas las fichas animales
* Endpoint para buscar animales por ID
* Endpoint para buscar animales por nombre
* Endpoint para buscar animales por sexo 
* Endpoint para mostrar todos los animales ordenados por edad 
* Endpoint para actualizar fichas de animales por ID
* Endpoint para eliminar fichas de animales  por ID

#### 🐊 ESPECIES (aka categorías) 🐊

* Endpoint para crear una especie
* Endpoint para mostrar todas las especies
* Endpoint para buscar especie por ID
* Endpoint para buscar especie por nombre
* Endpoint para actualizar especies por ID
* Endpoint para eliminar especies por ID

#### 🐘 TAMAÑOS (aka subcategoría) 🐘

* Endpoint para crear tamaños 
* Endpoint para mostrar todos los tamaños
* Endpoint para actualizar tamaño por ID
* Endpoint para eliminar tamaño por ID

### Otros Objetivos

- [X] Uso de ramas con git, cuando se termine el proyecto deberán quedar dos ramas la master o main y la develop.

- [X] Presentación de README excelente.

- [ ] Extras:

    - [X] Rol de Admin

    - [ ] Multer

    - [ ] Comentarios

### 🌟 Concepto e inspiración

Aunque se pedía que el proyecto consitiera en una tienda online (e-commerce), estuvimos hablando sobre intereses comunes entre los dos autores y surgió la idea de que la temática fuera sobre animales. Por supuesto estamos totalmente en contra de su compra/venta, así que convertimos la tienda online en una página para adoptar animales en la que cualquier persona puede registrarse como usuario y buscar a su compañero ideal. Con esta idea detrás diseñamos una base de datos con relaciones de Uno a Muchos y Muchos a Muchos. 

## Retos presentados

A continuación se explican las situaciones donde nos vimos con un reto personal para lograr superar la tarea.
### </i>Relación Muchos/Muchos</i>

1️⃣ Relacionar tablas muchos a muchos. Dado que era requisito del proyecto, diseñamos una relación muchos a muchos entre (Especie)  y (Tamaño). Al utilizar Sequelize necesitábamos de una tabla intermedia que guardase la información e interrelacionase ambas. 

### <i>Definir Controladores</i>

2️⃣  Para los diversos endpoints que pedía el ejercicio teníamos que desarrollar funciones que cumplieran con el objetivo. No obstante, dada la temática del proyecto, acabamos diseñando endpoints propios para aprovechar al máximo la base de datos. 

### <i>Interrelacionar Tablas</i>

3️⃣  Según el diagrama de la base de datos, podemos ver la relación entre tablas. Y es fácil utilizar una Foreign Key para obtener información en la tabla secundaria. Pero gracias a las relaciones de include con Sequelize podíamos lograr el efecto opuesto. De esta forma podríamos mostrar información de una tabla junto con otra de una sola vez. 

### <i>Nomenclatura Tablas</i>

4️⃣  Para un correcto funcionamiento de Sequelize, desarrollamos el proyecto en inglés. Al crear los modelos le estamos dando información para crear las migraciones y sus respectivas tablas de información. Debido a este nombre, Sequelize es capaz de crear las relaciones que unirán las tablas, por lo que es esencial que sea identificativo.  Nuestro principal reto fue renombrar las especies de animales (species) por <i>Familias(Family)</i>, en inglés. Porque el término species no distingue de singular y plural, y Sequeliz es muy delicado con estos términos. 

### <i>Creación de Seeds</i>

5️⃣ Recurso muy fácil de implementar pero que inicialmente ocasionaba muchos errores al no definir correctamente qué datos necesitabamos tener en nuestra base de datos para ejecutar los endpoints correctamente. 


## 🔜 Futuras Implementaciones

* Cambiar la función crear usuario por registrar usuario. 
* Definir una confirmación de usuario por correo electrónico.
* Validar el registro de usuarios. 
* Rediseñar la tabla de animales para utilizar datos ENUM.
* Añadir Comentarios de usuarios a la ficha de cada animal. 
* Integrar Multer en el proyecto.

##  ♥️ Agradecimientos

A todos los compis([Mike](https://github.com/MrSetOne),[Xavi](https://github.com/xavi-mat),[Germán](https://github.com/Molerog),[Vane](https://github.com/vaneebg/)...) y profes en general ([Sofía](https://github.com/SofiaPinilla), [Geer](https://github.com/GeerDev) e [Iván](https://github.com/ivanpuebla10)]) y en concreto a la asociación [Quiero Adptar UN AMIGO](https://www.facebook.com/Quiero-Adoptar-UN-AMIGO-Valencia-Espa%C3%B1a-1520106018237232/) por servir como inspiración para este proyecto.


## Autores

### [Fran](https://github.com/franpd8) 🐱

### [Rebeca](https://github.com/RebecaASuesta) 🐶