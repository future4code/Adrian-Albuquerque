-- Commands in MySQL to create tables used by the app

CREATE TABLE semana20_users (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM("NORMAL", "ADMIN")
);

CREATE TABLE semana20_tasks (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    deadline VARCHAR(255) NOT NULL,
    author_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (author_id) REFERENCES semana20_users(id)
);

-- Commands in MySQL to delete the tables above

DROP TABLE semana20_users;
DROP TABLE semana20_tasks;
