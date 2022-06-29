# ANHQV - Red Social

## Índice

* Sobre el proyecto
    * Instalación y despliegue
    * Tecnologías usadas
    * Origen
    * Objetivos
    * Concepto e inspiración

* Agradecimientos

* Autores

## Sobre el proyecto

### Instalación y despliegue 🔧

Para descargarte el repositorio, en Visual Studio, abre una terminal y ejecuta este comando:

```PowerShell
git clone https://github.com/RebecaASuesta/ProyectoBackEndIndividual
```

Posteriormente puedes descargarte la documentación de Postman [aquí](https://documenter.getpostman.com/view/21016838/Uz5JGurd).
 
Seguidamente tendrás que descargar los módulos externos con Node:
- Bcrypt
- Dotenv
- Express
- Jsonwebtoken
- Mongoose
- Multer
- Nodemailer

¡Recuerda modificar el archivo config/config.example.json con tus datos para que puedas usar el proyecto! 🙈

### Tecnologías usadas 🛠️

* JavaScript
* Node + Express
* Mongoose
* Postman
* MongoDB

### Origen

Este proyecto se propuso como un ejercicio en el [bootcamp de FullStack Development de The Bridge](https://www.thebridge.tech/bootcamps/bootcamp-fullstack-developer) para poner en práctica los conocimientos adquiridos sobre Backend, concretamente sobre las tecnologías Node + Express y MongoDB/Mongoose. Consiste en crear el backend de una red social.

### Objetivos

Crear una API REST capaz de:

- [X] Registro de usuarios usando Bcrypt.

- [X] Login de usuarios + token + middleware.

- [X] Que sea capaz de crear un CRUD.

- [X] Dar/quitar Like a un post.

- [X] Backend disponible en producción (Heroku).

Extras:

- [X] Middleware para comprobar la autoría del comentario a la hora de editar/eliminar el mismo.

- [X] Implementa el middleware multer para poder adjuntar imágenes al crear o actualizar un usuario.

- [ ] Implementa el middleware multer para poder adjuntar imágenes al crear o actualizar posts.

- [ ] Implementa el middleware multer para poder adjuntar imágenes al crear o actualizar comentarios.

- [ ] Implementación de followers.

- [ ] El endpoint que nos trae la información del usuario conectado, además que nos traiga los posts y el número de seguidores que tiene.

- [ ] Endpoint que nos trae la información del usuario conectado junto a sus post y número de followers, también que nos muestre el nombre de los followers que siguen al usuario conectado.

- [ ] El endpoint que trae todos los posts junto a los usuarios que hicieron ese post y junto a los comentarios del post que también traiga los usuarios que hicieron los comentarios.

- [X] Endpoint para buscar usuario por nombre.

- [X] Endpoint para buscar usuario por id.

- [ ] Aplica lo aprendido de testing con Jest y Supertest en alguna parte de tu proyecto, por ejemplo en la parte encargada de los endpoints de usuario.

- [X] Crea una documentación de tu proyecto.

- [X] Comments:

    - [X] CRUD comments.
    
    - [ ] Likes.

### Concepto e inspiración

Como ya viene siendo costumbre en mis proyectos, no he hecho exactamente lo que se pedía (una red social), aunque conserva la misma estructura y cumple con todos los apartados obligatorios que se especifican (y algunos extras), he decidido convertirlo en una Junta de Vecinos de Aquí No Hay Quien Viva:

Los Users son los Vecinos, los Posts son las Actas del Día, los Comments son Intervenciones y los Likes son los Votos a Favor. La Admin, obviamente, es Concha.

## Agradecimientos

Como siempre, muchas gracias a los profes ([Sofía](https://github.com/SofiaPinilla), [Geer](https://github.com/GeerDev) e [Iván](https://github.com/ivanpuebla10)). Pero además esta vez quiero aprovechar para agradecer a todos mis compis por su ayuda y por el apoyo que me han mostrado a lo largo del bootcamp (sobre todo en los malos momentos) y decir que estoy súper contenta por haberles conocido y me pone triste pensar que cuando esto acabe quizá no les vuelva a ver, y, en general, que les quiero mucho 💙

## Autores ✒️

### [Rebeca](https://github.com/RebecaASuesta) ✨