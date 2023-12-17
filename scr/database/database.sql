CREATE DATABASE APIPRICE;

CREATE TABLE saveArticulos(
    CodBar int,
    Nombre varchar(40),
    Precio float
);

INSERT INTO saveArticulos (CodBar,Nombre,Precio) VALUES (123,'Prueba1',10.2);