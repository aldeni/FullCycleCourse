USE dockerdesafio02;

CREATE TABLE people (
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(25),
    PRIMARY KEY(id)
);

INSERT INTO people (name) VALUES ('Jose');
