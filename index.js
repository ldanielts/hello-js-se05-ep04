const knex = require("./config.js").knex;

 knex("jogador").select().then(ret => {
    console.log(ret)
    //process.exit(0) // finalizar execução do script
  })

  knex("jogador").select().where("nomejogador", "Kant").then(ret => {
      console.log(ret);
      //process.exit(0);
  })

  const atacante = {
      numerojogador:11,
      nomejogador: 'Pascalote'
  }

  const atacante2 = {
    numerojogador:11,
    nomejogador: 'Pascalino'
}

 /* knex("jogador").insert(atacante, 'nomejogador').then(j => console.log(j));
  knex("jogador").insert(atacante2).then(j => console.log(j));*/