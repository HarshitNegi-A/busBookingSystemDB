const express=require('express')
const app=express()
const usersRoutes=require('./routes/usersRoutes')
const busRoutes=require('./routes/busRoutes')
const sequelize = require('./utils/db-connection');
const User = require('./models/user');
const Bus = require('./models/Bus');
const Booking = require('./models/Booking');
const Payment = require('./models/Payment');

sequelize.sync({ alter: true })  // or { force: true } for development
  .then(() => {
    console.log('✅ All tables synced successfully');
  })
  .catch((err) => {
    console.error('❌ Error syncing tables:', err);
  });

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to bus booking system</h1>")
})


app.use('/users',usersRoutes)
app.use('/buses',busRoutes)



app.listen(3000,()=>console.log("Server is running now..."))
