-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2022-12-13 22:38:36.8

-- tables
-- Table: CLIENTES
CREATE TABLE CLIENTES (
    CODCLI char(5) NOT NULL COMMENT 'Contiene el código del Cliente',
    DNICLI char(8) NOT NULL COMMENT 'Contiene el DNI del Cliente',
    NOMCLI varchar(40) NOT NULL COMMENT 'Contiene el nombre del Cliente',
    APECLI varchar(40) NOT NULL COMMENT 'Contiene el apellido del Cliente',
    DIRCLI varchar(80) NOT NULL COMMENT 'Contiene la dirección del Cliente',
    CELCLI char(9) NOT NULL COMMENT 'Contiene el celular del Cliente',
    EMACLI varchar(80) NULL COMMENT 'Contiene el email del Cliente',
    CONSTRAINT CLIENTES_pk PRIMARY KEY (CODCLI)
) COMMENT 'Contiene la información del Cliente';

-- Table: CONTACTANOS
CREATE TABLE CONTACTANOS (
    IDCON i NOT NULL COMMENT 'contiene el id de la persona',
    NOMCON varchar(200) NOT NULL COMMENT 'Contiene el nombre de la persona
',
    CORRCON varchar(100) NOT NULL COMMENT 'Contiene el correo de la persona',
    CELCON char(9) NOT NULL COMMENT 'Contiene el celular de la persona',
    ASAUCON varchar(150) NOT NULL COMMENT 'Contiene el asunto de la persona',
    DESCON text NOT NULL COMMENT 'Contiene la descripción de la persona',
    CONSTRAINT PROVEEDOR_pk PRIMARY KEY (IDCON)
) COMMENT 'Contiene todos los datos necesarios para la tabla contactanos';

-- End of file.

