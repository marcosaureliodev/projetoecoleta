// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// utilizar o objeto de banco de dados, para nossa operações
db.serialize(() => {

  //Com comandos SQL eu irei:

  // 1 Criar uma tabela
  db.run(`
          CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
      );
  `)

  // 2 Inserir dados na tabela
  const query = `
      INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
      ) VALUES (?,?,?,?,?,?,?);
    `
  db.run(query, [
    "",
  ])

  // 3 Consultar dados na tabela


  // 4 Deletar um dado na tabela
})

/* 
Comando para execução do banco de dados 
node src/database/db.js 
*/