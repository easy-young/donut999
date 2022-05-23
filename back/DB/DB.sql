CREATE DATABASE react;
USE react;

CREATE TABLE black (
    email VARCHAR(30) NOT NULL
    ADD PRIMARY KEY (email);

);

CREATE TABLE shop (
    idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    stationKor VARCHAR(12) NOT NULL,
    station VARCHAR(25) NOT NULL,
    line VARCHAR(16) NOT NULL,
    address VARCHAR(60) NOT NULL,
    parking CHAR(1) DEFAULT 'N',
    operhour VARCHAR(50),
    website VARCHAR(100),
    menu VARCHAR(350),
    beverage VARCHAR(400),
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

CREATE TABLE review (
    idx INT NOT NULL,
    email VARCHAR(30) NOT NULL,
    flavor INT NOT NULL,
    atmosphere INT NOT NULL,
    cheap INT NOT NULL,
    service INT NOT NULL,
    text VARCHAR(300) NOT NULL,
    FOREIGN KEY (idx) REFERENCES shop (idx)
);