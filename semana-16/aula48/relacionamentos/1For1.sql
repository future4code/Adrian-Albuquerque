CREATE TABLE relational_account (
 id INT PRIMARY KEY,
 balance FLOAT DEFAULT 0,
 user_id VARCHAR(255) NOT NULL,
 FOREIGN KEY (user_id) REFERENCES relational_user(id)
);

INSERT INTO relational_account VALUES
(659182, 1000.99, 'a'),
(662834, 1000.99, 'b');

SELECT * FROM relational_user;


- A chave extrangeira user_id faz referencia a coluna id da tabela relational_user

- Se akgyna das colubas é lida ou alterada com muitissima mais frequencia
- mais frequencia do que as demais, talvez valha a pena guardar em tabelas
- diferentes.
