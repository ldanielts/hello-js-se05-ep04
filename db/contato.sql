CREATE TABLE `contato` ( 
    `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, 
    `nome` TEXT NOT NULL UNIQUE, 
    `telefone` TEXT NOT NULL, 
    `data_cadastro` timestamp NOT NULL 
)