## 1. Ejercicios 

### Ejercicio 1

- Crear una carpeta con el nombre ej1
- Inicializar un proyecto de Node.js utilizando NPM dentro de la carpeta ej1
- El nombre del proyecto tiene que ser Ejercicio 1. 
- Crear un archivo index.js
- Configurar el proyecto para que al hacer npm start se ejecute el código del archivo index.js. Como resultado debe mostrar por consola el siguiente mensaje:
    - Mi primer script en The Bridge!!!

### Ejercicio 2

- Crear una carpeta con el nombre ej2
- Inicializar un proyecto de Node.js utilizando NPM dentro de la carpeta ej2
- El nombre del proyecto tiene que ser Ejercicio 2
- Crear un archivo index.js
- Instalar el módulo logplease como solo dependencia de desarrollo de nuestro proyecto
- Leer la documentación del módulo para aprender a usarlo
- Configurar el proyecto para que al ejecutar npm start ejecute el código del archivo index.js. Mostrar en consola:
    - Hola Mundo de Node (usando el método debug)
    - Noticias de última hora, Node.js me encanta!! (usando el método info)
    - Tirando warnings como campeones (usando el método warn)
    - Algo no está bien!!! (usando el método error)

### Ejercicio 3

- Crear una carpeta con el nombre ej3
- Inicializar un proyecto de Node.js utilizando NPM dentro de la carpeta ej3
- El nombre del proyecto tiene que ser Ejercicio 3
- Crear un archivo index.js
- Crear un archivo numeros.js
- Declarar una función con el nombre esPar, esta función acepta un número como parámetro. Retorna un valor booleano true en caso de que el valor sea par y false en caso de que no lo sea. Exportar la función index.js.
- Instalar el módulo logplease como solo dependencia de desarrollo de nuestro proyecto.
- Importar el módulo logplease. Importar el módulo numeros. Llamar a la función esPar con los siguientes valores:
    - 2, 3, 101, 201, 202, 100
- Si el número es par mostrar en consola el siguiente mensaje utilizando los métodos indicados del módulo logplease:
    - El número es par (utilizar el método info)
    - El número no es par (utilizar el método error)

## 2. Ejercicios parte 2 Routing con Node.js

- Crea código HTML para servir una página web clásica (Home| ¿Quiénes somos? | ¿Dónde Estamos? | ¿Qué hacemos? | Contacto... etc...)
- Ahora sirve respuesta a la petición de cada ruta (endpoint) los ficheros HTML correspondientes: home.html, contact.html, about.html...
- Realiza las modificaciones necesarias para que nuestro script se ejecute con npm start.