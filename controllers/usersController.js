
const connection = require('../utils/db-connection');
const db=require('../utils/db-connection')

const addUsers=(req,res)=>{
    const {email,name}=req.body
    const insertQuery='INSERT INTO USERS(email,name) VALUES (?,?)';

    db.execute(insertQuery,[email,name],(err)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            connection.end()
            return
        }
        console.log("Values has been inserted")
        res.status(200).send(`User with name ${name} successfully added.`)
    })

}

const updateUsers=(req,res)=>{
    const {id}=req.params
    const {name,email}=req.body
    const updateQuery="UPDATE users set name=?,email=? where id=?"

    db.execute(updateQuery,[name,email,id],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            connection.end()
            return;
        }
        if(result.affectedRows===0){
            res.status(400).send("User not found")
            return;
        }
        console.log("User has been updated")
        res.status(200).send(`User with name ${id} successfully updated.`)
    })

}

const deleteUser=(req,res)=>{
    const {id}=req.params;
    const deleteQuery="DELETE FROM users Where id= ?"

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }

        if(result.affectedRows===0){
            res.status(400).send("user not found")
            return
        }
        res.status(200).send(`User with ${id} is deleted`)
    })
}

module.exports={
    addUsers,
    updateUsers,
    deleteUser
}