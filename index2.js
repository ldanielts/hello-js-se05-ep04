const knex = require("knex") ({
    client: 'sqlite3',
    connection: {
      filename: "./db/contato.db"
    },
    useNullAsDefault: "true"
})

if (process.argv.length < 3){
    console.log('usage: node index2.js operation data')
    return
}

insert = function(newData) {
    var data = newData.split(",");
    var contato = {
        nome: data[0], 
        telefone: data[1],
        data_cadastro: data[2]
    }
    knex("contato").insert(contato).then(ret => console.log(contato)).catch(err=>console.log(err));
}

update = function(updatedData) {
    var data = updatedData.split(",");
    var contato = {
        id: data[0],
        nome: data[1], 
        telefone: data[2],
        data_cadastro: data[3]
    }
    knex("contato").update(contato).where("id", contato.id).then(ret => console.log(contato)).catch(err=>console.log(err));
}

remove = function(id) {
    knex("contato").delete().where("id", id).then(ret=>{
        console.log(ret);
        select();
    }).catch(err=>console.log(err));
}

select = function() {
    knex("contato").select().then(ret=>console.log(ret));
}

switch (process.argv[2]) {
    case "insert":
        insert(process.argv[3]);
        break;
    case "update":
        update(process.argv[3]);
        break;
    case "delete":
        remove(process.argv[3]);
    case "select":
        select();
        break;
    default:
        console.log("Error: operation unknown");    
}



  