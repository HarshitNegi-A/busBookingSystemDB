const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('busBookingSystem', 'root', 'Harshit@123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // optional
});

(async()=>{
    try{
    await sequelize.authenticate()
    console.log("Connection to the database has been created")
}
catch(err){
    console.log(err)
}
})()

module.exports = sequelize;


// const mysql=require('mysql2')

// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Harshit@123',
//     database:'busBookingSystem',
//     multipleStatements: true 
// })

// connection.connect((err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log("Connection has been created")

//     connection.query(`
//         CREATE TABLE IF NOT EXISTS Users (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             email VARCHAR(255) NOT NULL UNIQUE
//         )
//     `, (err) => {
//         if (err) console.error("❌ Error creating Users table:", err);
//         else console.log("✅ Users table ready");
//     });

    
//     connection.query(`
//         CREATE TABLE IF NOT EXISTS Buses (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             busNumber VARCHAR(50) NOT NULL UNIQUE,
//             totalSeats INT NOT NULL,
//             availableSeats INT NOT NULL
//         )
//     `, (err) => {
//         if (err) console.error("❌ Error creating Buses table:", err);
//         else console.log("✅ Buses table ready");
//     });

//     connection.query(`
//         CREATE TABLE IF NOT EXISTS Bookings (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             seatNumber INT NOT NULL
//         )
//     `, (err) => {
//         if (err) console.error("❌ Error creating Bookings table:", err);
//         else console.log("✅ Bookings table ready");
//     });

//     connection.query(`
//         CREATE TABLE IF NOT EXISTS Payments (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             amountPaid DECIMAL(10, 2) NOT NULL,
//             paymentStatus VARCHAR(50) NOT NULL
//         )
//     `, (err) => {
//         if (err) console.error("❌ Error creating Payments table:", err);
//         else console.log("✅ Payments table ready");
//     });

// })


// module.exports=connection