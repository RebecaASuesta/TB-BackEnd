# NoSQL & MongoDB

## 1. Desarrollar el Proyecto

A continuación, creará su propia base de datos de red social con las siguientes colecciones:
- Users
- Posts
    - Comments

```Powershell
mongosh> use redSocialDB
redSocialDB> db.createCollection('Users')
redSocialDB> db.createCollection('Posts')
```

## 2. Ejecute las siguientes consulta

A continuación tendrás que realizar las siguientes consultas MongoDB:

### 2.1 INSERTAR DATOS

- Insertar al menos 15 publicaciones nuevas con almenos 2 comentarios por publicación:
    - Title
    - Body
    - Username
    - Comments
        - Username
        - Body

```Powershell
db.posts.insertMany([
    { title: "Post 1", body: "Holi 1", username: "User 1", comments:
    [{ username: "User 2", body: "Adiós 1" },
    { username: "User 3", body: "Adiós 2" }]},

    { title: "Post 2", body: "Holi 2", username: "User 2", comments:
    [{ username: "User 4", body: "Adiós 1" },
    { username: "User 5", body: "Adiós 2" }]},

    { title: "Post 3", body: "Holi 3", username: "User 3", comments:
    [{ username: "User 6", body: "Adiós 1" },
    { username: "User 7", body: "Adiós 2" }]},

    { title: "Post 4", body: "Holi 4", username: "User 4", comments:
    [{ username: "User 8", body: "Adiós 1" },
    { username: "User 9", body: "Adiós 2" }]},

    { title: "Post 5", body: "Holi 5", username: "User 5", comments:
    [{ username: "User 10", body: "Adiós 1" },
    { username: "User 11", body: "Adiós 2" }]},

    { title: "Post 6", body: "Holi 6", username: "User 6", comments:
    [{ username: "User 12", body: "Adiós 1" },
    { username: "User 13", body: "Adiós 2" }]},

    { title: "Post 7", body: "Holi 7", username: "User 7", comments:
    [{ username: "User 14", body: "Adiós 1" },
    { username: "User 15", body: "Adiós 2" }]},

    { title: "Post 8", body: "Holi 8", username: "User 8", comments:
    [{ username: "User 1", body: "Adiós 1" },
    { username: "User 2", body: "Adiós 2" }]},

    { title: "Post 9", body: "Holi 9", username: "User 9", comments:
    [{ username: "User 3", body: "Adiós 1" },
    { username: "User 4", body: "Adiós 2" }]},

    { title: "Post 10", body: "Holi 10", username: "User 10", comments:
    [{ username: "User 5", body: "Adiós 1" },
    { username: "User 6", body: "Adiós 2" }]},

    { title: "Post 11", body: "Holi 11", username: "User 11", comments:
    [{ username: "User 7", body: "Adiós 1" },
    { username: "User 8", body: "Adiós 2" }]},

    { title: "Post 12", body: "Holi 12", username: "User 12", comments:
    [{ username: "User 9", body: "Adiós 1" },
    { username: "User 10", body: "Adiós 2" }]},

    { title: "Post 13", body: "Holi 13", username: "User 13", comments:
    [{ username: "User 11", body: "Adiós 1" },
    { username: "User 12", body: "Adiós 2" }]},

    { title: "Post 14", body: "Holi 14", username: "User 14", comments:
    [{ username: "User 13", body: "Adiós 1" },
    { username: "User 14", body: "Adiós 2" }]},

    { title: "Post 15", body: "Holi 15", username: "User 15", comments:
    [{ username: "User 15", body: "Adiós 1" },
    { username: "User 1", body: "Adiós 2" }]},
])
```

- Insertar al menos 10 nuevos usuarios:
    - Username
    - Email
    - Age

```Powershell
db.users.insertMany([
    {username: "User 1", email: "user1@gmail.com", age: 21},
    {username: "User 2", email: "user2@gmail.com", age: 22},
    {username: "User 3", email: "user3@gmail.com", age: 23},
    {username: "User 4", email: "user4@gmail.com", age: 24},
    {username: "User 5", email: "user5@gmail.com", age: 25},
    {username: "User 6", email: "user6@gmail.com", age: 26},
    {username: "User 7", email: "user7@gmail.com", age: 27},
    {username: "User 8", email: "user8@gmail.com", age: 28},
    {username: "User 9", email: "user9@gmail.com", age: 29},
    {username: "User 10", email: "user10@gmail.com", age: 30},
    {username: "User 11", email: "user11@gmail.com", age: 31},
    {username: "User 12", email: "user12@gmail.com", age: 32},
    {username: "User 13", email: "user13@gmail.com", age: 33},
    {username: "User 14", email: "user14@gmail.com", age: 34},
    {username: "User 15", email: "user15@gmail.com", age: 35}
])
```

### 2.2 ACTUALIZAR DATOS
 
- Actualizar publicaciones:
    - Actualiza todos los campos de una publicación
    - Cambiar el body de una publicación
    - Actualizar comentarios:
        - Cambiar el body de un comentario

```Powershell
db.posts.updateOne({ title: "Post 1" },
{ $set: { title: "Primer post", body: "Guau", username: "Oriol", comments:
    [{ username: "Rebeca", body: "En cuanto llegue a casa, te saco a pasear" },
    { username: "Miguel", body: "Tranqui, ya le he sacado yo" }]}}
)

db.posts.updateOne({ title: "Post 2"},
{ $set: { title: "Post 2", body: "Hola, buenos días", username: "User 2", comments:
    [{ username: "User 4", body: "Adiós 1" },
    { username: "User 5", body: "Adiós 2" }]}}
)

db.posts.updateOne({ title: "Post 3"},
{ $set: { title: "Post 3", body: "Holi 3", username: "User 3", comments:
    [{ username: "User 6", body: "Hasta luego" },
    { username: "User 7", body: "Adiós 2" }]}}
)
```

- Actualizar usuarios:
    - Actualiza todos los campos de un usuario
    - Cambiar el email de dos usuarios es decir hacer la query dos veces.
    - Aumenta en 5 años la edad de un usuario

```Powershell
db.users.updateOne({ username: "User 1" },
{ $set: {username: "Oriol", email: "oriol@gmail.com", age: 3}}
)

db.users.updateOne({ username: "User 2" },
{ $set: {email: "rebeca@gmail.com"}}
)

db.users.updateOne({ username: "User 3" },
{ $set: {email: "miguel@gmail.com"}}
)

db.users.updateOne({ username: "User 4" },
{ $inc: {age: 5}}
)
```

### 2.3 OBTENER DATOS

- Seleccionar todas las publicaciones
- Selecciona las publicaciones que coincidan con el username indicado
- Seleccione todos los usuarios con una edad mayor a 20
- Seleccione todos los usuarios con una edad inferior a 23
- Seleccione todos los usuarios que tengan una edad entre 25 y 30 años
- Muestra los usuarios de edad menor a mayor y viceversa
- Seleccione el número total de usuarios
- Seleccione todas las publicaciones de la siguiente manera: Título de la publicación: "título de las publicaciones"
- Selecciona solo 2 usuarios
- Busca por title 2 publicaciones

```Powershell
db.posts.find({ username: 'User 5' })

db.users.find({ age: { $gt: 20 }})

db.users.find({ age: { $lt: 23 }})

db.users.find({ $and: [{age: { $gte: 25 }}, {age: { $lte: 30}}]})

db.users.find().sort({ age: 1 })
db.users.find().sort({ age: -1 })

db.users.find().count()

db.posts.find().forEach((doc) => {
    print("Título de la publicación: " + doc.title)
})

db.users.find().limit(2)

db.posts.createIndex({ title: 'text' })
db.posts.find({
    $text: {
        $search: "Post"
    }
}).limit(2)
```

### 2.4 BORRAR DATOS

- Elimina a todos los usuarios con una edad mayor a 30

```Powershell
db.users.deleteMany({ age: { $gt: 30}})
```

## 3 Extra

- Seleccione el número total de publicaciones que tienen más de un comentario
- Seleccione la última publicación creada
- Selecciona 5 publicaciones y que sean las últimas creadas
- Elimina todas las publicaciones que tengan más de un comentario

```Powershell
# Todos mis posts tienen 2 comments, modifico algunos para que tengan solo uno
db.posts.updateOne({ title: "Post 6" },
{ $set: { comments:
    [{ username: "User 12", body: "Adiós" }]}}
)
db.posts.updateOne({ title: "Post 7" },
{ $set: { comments:
    [{ username: "User 14", body: "Adiós" }]}}
)
db.posts.find( { $and : [
    { comments: { $not: { $size: 0}}},
    { comments: { $not: { $size: 1}}}
]}).count()

db.posts.find().sort({ _id: -1 }).limit(1)

db.posts.find().sort({ _id: -1 }).limit(5)

db.posts.deleteMany( { $and : [
    { comments: { $not: { $size: 0}}},
    { comments: { $not: { $size: 1}}}
]})
```