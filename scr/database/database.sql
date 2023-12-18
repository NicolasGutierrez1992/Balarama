CREATE DATABASE APIPRICE;

CREATE TABLE recordArticulos(
    CodBar varchar(40),
    Nombre varchar(40),
    Precio float
);

INSERT INTO recordArticulos (CodBar,Nombre,Precio) VALUES (123,'Prueba1',10.2);