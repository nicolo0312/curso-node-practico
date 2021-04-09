module.exports = {
    api:{
        port:process.env.PORT || 3000
    },
    jwt:{
        secret: process.env.JWT_SECRET ||'notasecret!'
    },
    mysql:{
        host: process.env.MYSQL_HOSY || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'Uwz2AYTPz9',
        password: process.env.MYSQL_PASS || 'saYasBdqZm',
        database: process.env.MYSQL_DATABASE || 'Uwz2AYTPz9'

    }
}