DROP DATABASE IF EXISTS contactos;
CREATE DATABASE contactos;

/* Poner en uso la base de datos */
USE contactos;

/* Crear tabla Pedido */
CREATE TABLE contactanos (
     IDCON int AUTO_INCREMENT,
     NOMCON varchar(200),
     CORRCON varchar(100),
     CELCON char(9),
     ASAUCON varchar(150),
     DESCON   text,
     PRIMARY KEY (IDCON)
);

INSERT INTO contactanos
(NOMCON, CORRCON, CELCON, ASAUCON, DESCON)
VALUES
('José Ramírez', 'jose.ramirez@outlook.com', '974815236', 'Arroz con Pollo', 'Por favor enviar a la dirección Av. Miraflores 253, San Vicente de Cañete'),
('Ana Guerra Solano', 'ana.guerra@gmail.com', '981526321', 'Sopa Seca de Gallina', 'Necesito 4 platos');

SELECT * FROM contactanos;