

const getOne=(req,res)=>{
    let sql=`SELECT * from user WHERE username=${req.username}`
    try{
        let result=db.query(sql)
        if(req.password===result.password){
            res.status(200).send(result)
        }
        else{
            res.send("Wrong Password")
        }
    } catch(err){
        res.status(500).send(err)
    }
}