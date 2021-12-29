CREATE DATABASE Demo_React;

CREATE TABLE users{
    user_id SERIAL NOT NULL,
    Firstname varchar(255) NOT NULL,
    Surname varchar(255) NOT NULL
);

INSERT INTO users (firstname, surname)
VALUES
('John', 'Doe'),
('Alfred', 'Pennyworth'),
('Bruce', 'Wayne'),
('Don', 'Jon'),
('Stan', 'Smith'),
('Steve', 'Smith');