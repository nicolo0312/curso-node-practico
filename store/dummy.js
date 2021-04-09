const db = {
    'user':[{
        id:1, 
        name:'nicolas'
    }]
}

async function list(table){
    return db[table] || []

}

async function get(table,id){
    let collection = await list(table)
    let result     = collection.filter(item => item.id == id)[0];
    return result;
}

async function upsert(table,data){  
    if(!db[table]){
        db[table]=[]
    }
    db[table].push(data)
    console.log(db);
}

async function remove(table,id){
    let collection = await get(table,id)
    return true;
}

async function update(table,id,data){
    let collection = await list(table)
    let result     = collection.filter(item => item.id == id)[0];
    if(data.name){
        result.name = data.name
    }
    if(data.username){
        result.username = data.username
    }
    if(data.password){
        result.password = data.password
    }
    return result
}

async function query(table,q){
    let collection = await list(table)
    let keys = Object.keys(q)
    let key = keys[0]
    let result = collection.filter(item => item[key] === q[key])[0]
    return result;
}

module.exports ={
    list,
    get,
    upsert,
    remove,
    update,
    query
}