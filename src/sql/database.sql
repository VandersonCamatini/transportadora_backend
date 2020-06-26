CREATE DATABASE IF NOT EXISTS transportadora;

CREATE TABLE IF NOT EXISTS cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    telefone varchar(11) NOT NULL
);

CREATE TABLE IF NOT EXISTS endereco_cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(250) NOT NULL, 
    numero VARCHAR(11) NOT NULL, 
    bairro VARCHAR(250) NOT NULL,
    id_cliente INT NOT NULL,
    CONSTRAINT fk_idClienteEndereco FOREIGN KEY (id_cliente) REFERENCES cliente (id)
)

CREATE TABLE IF NOT EXISTS carga(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL, 
    data_entrada DATE NOT NULL,
    data_prevista_entrega DATE NOT NULL,
    peso DECIMAL(10,2) NOT NULL, 
    largura DECIMAL(10,2) NOT NULL,
    altura DECIMAL(10,2) NOT NULL,
    comprimento DECIMAL(10,2) NOT NULL,
    status_carga TINYINT(1) NOT NULL,
    CONSTRAINT fk_idCliente FOREIGN KEY (id_cliente) REFERENCES cliente (id) 
);

CREATE TABLE IF NOT EXISTS endereco_carga(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(250) NOT NULL, 
    numero VARCHAR(11) NOT NULL, 
    bairro VARCHAR(250) NOT NULL,
    id_carga INT NOT NULL,
    CONSTRAINT fk_idCargaEndereco FOREIGN KEY (id_carga) REFERENCES carga (id)
)
