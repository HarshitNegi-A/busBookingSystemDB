const express=require('express')
const app=express()
const db=require('./utils/db-connection')
const usersRoutes=require('./routes/usersRoutes')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to bus booking system</h1>")
})


app.use('/users',usersRoutes)



app.listen(3000,()=>console.log("Server is running now..."))
