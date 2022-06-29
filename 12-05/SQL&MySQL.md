# SQL & MySQL

Cheat Sheet 🤓

## 1. Crea una base de datos

A continuación, crearás una base de datos. El objetivo de este proyecto es aprender a trabajar en una base de datos y hacer consultas SQL.

### 1.1. Crea una base de datos

Crea una base de datos que se llame my_company_database. La base de datos deberá contener la siguiente tabla:
- employees. A su vez tendrá los siguientes campos:   
    - id
    - birth_date
    - first_name
    - last_name
    - gender

``` SQL
//En la terminal:
CREATE DATABASE my_company_database;
USE DATABASE my_company_database;

//En el Workbench:
CREATE TABLE employees(
	id INT AUTO_INCREMENT,
		birth_date DATE,
		first_name VARCHAR(100),
		last_name VARCHAR(100),
		gender VARCHAR(100),
    PRIMARY KEY(id)
);
```

### 1.2. Añade columnas nuevas a la tabla creada

- Añade 3 columnas nuevas a la tabla:
- Columna "salary"
- Columna "title"
- Columna "title_data"

``` SQL
ALTER TABLE employees ADD salary INT(10);
ALTER TABLE employees ADD title VARCHAR(100);
ALTER TABLE employees ADD title_date DATE;
```

## 2. Ejecute las siguientes consultas SQL

A continuación, deberá realizar las siguientes consultas SQL:

### 2.1 Insertar datos

Inserte al menos 15 nuevos empleados:
- Al menos 3 empleados deben tener el mismo nombre.
- Los salarios de los empleados deben oscilar en un rango de 5000 y 50.000 y deben variar entre diferentes géneros.
- Todos los empleados tienen un título.
- Al menos 5 títulos son de 2020.

``` SQL
INSERT INTO employees (birth_date, first_name, last_name, gender, salary, title, title_date)
values ('2019-01-01', 'Oriol', 'Suesta', 'perro', 50000, 'jefe supremo de perritos', '2020-01-01'),
('2000-01-01', 'Oriol', 'García', 'NB', 5000, 'vicepresidente ejecutivo', '2020-01-01'),
('1989-01-01', 'Oriol', 'Villanueva', 'NB', 49999, 'bedel', '2020-01-01'),
('1994-09-29', 'Rebeca', 'La Mejor', 'NB', 49999, 'guapa', '2020-01-01'),
('1995-08-01', 'Miguel', 'El Mejor', 'hombre', 49999, 'guapo', '2020-01-01'),
('1998-01-01', 'Sandra', 'Lopez', 'mujer', 49999, 'psicóloga', '2021-01-01'),
('1999-01-01', 'Aarón', 'Lopez', 'hombre', 49999, 'sociólogo y politólogo', '2022-01-01'),
('1997-01-01', 'Andrea', 'Lopez', 'mujer', 49999, 'radióloga', '2021-01-01'),
('1996-09-29', 'María', 'Lopez', 'mujer', 5001, 'pesada', '2002-01-01'),
('1994-05-05', 'Irene', 'Antón', 'mujer', 49999, 'dibuja cosas', '2018-01-01'),
('1994-09-10', 'Lidia', 'Lopez', 'mujer', 49999, 'ilustradora', '2022-01-01'),
('1994-10-09', 'Tamara', 'de los Dolores', 'mujer', 49999, 'traductora', '2018-01-01'),
('1969-04-20', 'Julián', 'del Horto', 'patata', 49999, 'patatero', '2022-01-01'),
('1974-08-28', 'Xavier', 'Matoses', 'aguacate', 49999, 'fundador de los X-men', '1940-01-01'),
('2012-05-05', 'Orion', 'Talavera', 'perro', 49999, 'solo quiere que le dejen en paz', '2012-01-01');
```

### 2.2 Actualizar datos

- Actualizar a los empleados.
*Si lo hacemos desde la terminal seguid el enunciado tal cual, si lo estáis haciendo con workbench actualizadlo por (primary_key), es decir, el valor único y en este caso será el id.*
- Cambiar el nombre de un empleado. Para ello, genere una consulta que afecte solo a un determinado empleado en función de su nombre, apellido y fecha de nacimiento.

``` SQL
UPDATE employees SET first_name = 'Michael' WHERE id = 13;
```

### 2.3 Obtener datos

- Seleccione todos los empleados con un salario superior a 20.000.
- Seleccione todos los empleados con un salario inferior a 10.000.
- Seleccione todos los empleados que tengan un salario entre 14.000 y 50.000.
- Seleccione el número total de empleados.
- Selecciona los títulos del año 2019.
- Seleccione solo el nombre de los empleados en mayúsculas.
- Seleccionar el nombre de los empleados sin que se repita ninguno.

``` SQL
SELECT * FROM employees WHERE salary >= 20000;
SELECT * FROM employees WHERE salary <= 10000;
SELECT * FROM employees WHERE salary between 14000 AND 50000;
SELECT COUNT(ID) FROM employees;
SELECT * FROM employees WHERE title_date = '2019-01-01';
SELECT UCASE(first_name) FROM employees;
SELECT DISTINCT first_name FROM employees;
```

### 2.4 Borrar datos

- Elimina el empleado con id = 5.
*Si lo hacemos desde la terminal seguid el enunciado tal cual, si lo estáis haciendo con workbench actualizadlo por (primary_key), es decir, el valor único y en este caso será el id.*
- Eliminar a todos los empleados con un salario superior a 20.000.

``` SQL
DELETE FROM employees WHERE id = 5;
DELETE FROM employees WHERE salary >= 20000;
```