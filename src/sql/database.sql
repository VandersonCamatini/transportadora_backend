CREATE DATABASE IF NOT EXISTS transportadora;

CREATE TABLE IF NOT EXISTS cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    telefone VARCHAR(12) NOT NULL
);

CREATE TABLE IF NOT EXISTS endereco_cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(250) NOT NULL, 
    numero VARCHAR(11) NOT NULL, 
    bairro VARCHAR(250) NOT NULL,
    estado VARCHAR(250) NOT NULL, 
    cidade VARCHAR(250) NOT NULL,
    idCliente INT NOT NULL,
    CONSTRAINT fk_idClienteEndereco FOREIGN KEY (idCliente) REFERENCES cliente (id)
);

CREATE TABLE IF NOT EXISTS carga(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idCliente INT NOT NULL, 
    dataEntrega DATE NOT NULL,
    dataPrevistaEntrega DATE NOT NULL,
    peso DECIMAL(10,2) NOT NULL, 
    largura DECIMAL(10,2) NOT NULL,
    altura DECIMAL(10,2) NOT NULL,
    comprimento DECIMAL(10,2) NOT NULL,
    statusCarga TINYINT(1) NOT NULL,
    CONSTRAINT fk_idCliente FOREIGN KEY (idCliente) REFERENCES cliente (id) 
);

CREATE TABLE IF NOT EXISTS endereco_carga(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(250) NOT NULL, 
    numero VARCHAR(11) NOT NULL, 
    bairro VARCHAR(250) NOT NULL,
    estado VARCHAR(250) NOT NULL, 
    cidade VARCHAR(250) NOT NULL,
    idCarga INT NOT NULL,
    CONSTRAINT fk_idCargaEndereco FOREIGN KEY (idCarga) REFERENCES carga (id)
);
