create database react;
use react;

CREATE TABLE user (
    idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(30) NOT NULL,
    userpw VARCHAR(50) NOT NULL,
    level INT NOT NULL DEFAULT 1,
    available VARCHAR(3) NOT NULL DEFAULT 'on',
    UNIQUE (email)
);

CREATE TABLE shop (
    idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    station VARCHAR(10) NOT NULL,
    line VARCHAR(16) NOT NULL,
    address VARCHAR(60) NOT NULL,
    parking CHAR(2) DEFAULT '불가',
    operhour VARCHAR(50),
    website VARCHAR(100),
    menu VARCHAR(350),
    beverage VARCHAR(20),
    tel VARCHAR(20),
    guiter VARCHAR(50),
    intro VARCHAR(500)
);