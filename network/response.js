exports.success= (req,res,msg,status)=>{
    let statusCode = status || 200
    let statusMsg  = msg || ''
    res.status(status).send({
        error:null,
        status:status,
        body: msg
    })
}

exports.error= (req,res,msg,status)=>{
    let statusCode = status || 500
    let statusMsg  = msg || 'Internet server error'
    res.status(status).send({
        error:true,
        status:status,
        body: msg
    })

}