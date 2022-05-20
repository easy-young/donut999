CREATE DATABASE react;
USE react;

CREATE TABLE black (
    email VARCHAR(30) NOT NULL
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

CREATE TABLE review (
    idx INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    sidx INT ,
    email VARCHAR(30) NOT NULL,
    flavor INT,
    atmosphere INT,
    cheap INT,
    service INT,
    text VARCHAR(300),
    FOREIGN KEY (sidx) REFERENCES shop (idx)
);


insert into review(sidx, email, flavor, atmosphere, cheap, service, text ) 
values(1,'619049@naver.com', 5, 5, 5, 5, '와 정말 맛있어요!');
insert into review(sidx, email, flavor, atmosphere, cheap, service, text ) 
values(2,'619049@naver.com', 5, 5, 5, 5, '와 정말 비싸요!');