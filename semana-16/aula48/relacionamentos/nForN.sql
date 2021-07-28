CREATE TABLE relational_sale (
 user_id VARCHAR(255),
 product_id VARCHAR(255),
 FOREIGN KEY (user_id ) REFERENCES relational_user(id),
 FOREIGN KEY (product_id ) REFERENCES relational_product(id)
);
INSERT INTO relational_sale VALUES
('b', 'okm'), ('b','uhb'), ('a','ygv'), ('b','ygv'),
('b','ijn'), ('b','tfc'), ('a','tfc');
SELECT * FROM relational_sale;


 Nessas relações, os elementos de uma das tabelas se
relacionam com vários da outra tabela
○ Vários produtos se referem a vários usuários
○ Então agora, apenas uma chave estrangeira não resolve