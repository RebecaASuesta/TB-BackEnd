## 1.Endpoints

### Ejercicio 1

- Crea las siguientes tablas usando Express y MySQL como hemos visto en clase:
    - Tabla Products
    - Tabla Categories
*Recuerda que en el caso de una relación muchos a muchos necesitarás una tabla intermedia.*

### Ejercicio 2

- Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde el postman
- Crea un endpoint para crear una categoría y añade 2 categorías nuevas desde el postman

### Ejercicio 3

- Crea un endpoint para actualizar un producto.
- Crea un endpoint para actualizar una categoría.

### Ejercicio 4

- Crea un endpoint que muestre todos los productos
- Crea un endpoint que muestre todas las categorías
- Crea un endpoint que muestra todos los productos con sus categorías
- Crea un endpoint donde puedas seleccionar un producto por id
- Crea un endpoint que muestre de forma descendente los productos.
- Crea un endpoint donde puedas seleccionar una categoría por id
- Crea un endpoint donde puedas buscar un producto por su nombre

### Ejercicio 5

- Crea un endpoint donde puedas eliminar un producto por su id

## 2.MVC

### 2.1.Crear la carpeta config

Crea una carpeta config  y que tenga un archivo database.js que contenga los datos de la conexión de la base de datos y crea otro archivo database.example.js que contenga lo mismo pero sin tus credenciales. Recuerda no subir tu archivo database.js a tu repositorio github.

### 2.2.Crear estructura de carpetas

- Products
    - Crea un archivo products.js dentro de una carpeta routes que contenga todas las rutas de products
    - Crea un ProductController.js que contenga todas las acciones de los productos

- Categories
    - Crea un archivo categories.js dentro de una carpeta routes que contenga todas las rutas de categories
    - Crea un CategoryController.js que contenga todas las acciones de los categories

## 3.1.Extra Endpoints

### Ejercicio 1

- Crea las siguientes tablas usando Express y MySQL como hemos visto en clase:
    - Tabla Users
    - Tabla Orders
*Recuerda que en el caso de una relación muchos a muchos necesitarás una tabla intermedia.*

### Ejercicio 2

- Crea un endpoint para añadir un usuario nuevo y añade 2 usuarios nuevos desde el postman
- Crea un endpoint para crear un pedido y añade 2 nuevos pedidos desde el postman

### Ejercicio 3

- Crea un endpoint para actualizar un usuario. 

### Ejercicio 4

- Crea un endpoint que muestre todos los usuarios
- Crea un endpoint que muestre todas los pedidos
- Crea un endpoint que muestra todos los usuarios con sus pedidos
- Crea un endpoint donde puedas seleccionar un usuario por id

### Ejercicio 5

- Crea un endpoint donde puedas eliminar un usuario por su id

## 3.2.Extra MVC

- Orders
    - Crea un archivo orders.js dentro de una carpeta routes que contenga todas las rutas de orders
    - Crea un OrderController.js que contenga todas las acciones de los orders

- Users
    - Crea un archivo users.js dentro de una carpeta routes que contenga todas las rutas de users
    - Crea un UserController.js que contenga todas las acciones de los  users

### Extra

- Crea una interfaz para el lado del cliente

## 4.Github

- Subir el proyecto a un repositorio en github
- Hacer commits con frecuencia
- Hacer un pequeño readme