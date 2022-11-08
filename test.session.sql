-- DROP TABLE coinvalues;


CREATE TABLE coinvalues(
    id INT NOT NULL AUTO_INCREMENT ,
    valuedate DATE,
    coinvalue DECIMAL(10,2),
    PRIMARY KEY(id),
    INDEX `valueindex` (`coinvalue` DESC)
);
