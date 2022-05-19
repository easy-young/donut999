CREATE DATABASE react;
USE react;

CREATE TABLE user (
    idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(30) NOT NULL,
    userpw VARCHAR(50) NOT NULL,
    level INT NOT NULL DEFAULT 1,
    available CHAR(1) NOT NULL DEFAULT 'Y',
    UNIQUE (email)
);

CREATE TABLE shop (
    idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    station VARCHAR(10) NOT NULL,
    line VARCHAR(16) NOT NULL,
    address VARCHAR(60) NOT NULL,
    parking CHAR(1) DEFAULT 'N',
    operhour VARCHAR(50),
    website VARCHAR(100),
    menu VARCHAR(350),
    beverage VARCHAR(20),
    tel VARCHAR(20),
    protein CHAR(1) DEFAULT 'N',
    photo CHAR(1) DEFAULT 'N',
    special CHAR(1) DEFAULT 'N',
    more VARCHAR(50),
    intro VARCHAR(500)
);

CREATE TABLE register (
    idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    store VARCHAR(30) NOT NULL,
    menu VARCHAR(30) NOT NULL,
    address VARCHAR(60) NOT NULL,
    contact VARCHAR(10) NOT NULL,
    sns VARCHAR(100) NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);