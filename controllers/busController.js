const Bus = require('../models/Bus');

// Add a new bus
const addBus = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;

        const bus = await Bus.create({ busNumber, totalSeats, availableSeats });
        console.log("✅ Bus added:", bus.toJSON());

        res.status(200).send(`Bus with number ${busNumber} successfully added`);
    } catch (err) {
        console.error("❌ Error adding bus:", err);
        res.status(500).send(err.message);
    }
};

// Get all buses
const getBus = async (req, res) => {
    try {
        const buses = await Bus.findAll();
        console.log("✅ Buses fetched:", buses);

        const resultArray = buses.map(data => (
            `<tr>
                <td>${data.busNumber}</td>
                <td>${data.availableSeats}</td>
            </tr>`
        )).join("");

        res.status(200).send(`
            <table border="1">
                <thead>
                    <tr>
                        <th>Bus Number</th>
                        <th>Available Seats</th>
                    </tr>
                </thead>
                <tbody>${resultArray}</tbody>
            </table>
        `);
    } catch (err) {
        console.error("❌ Error fetching buses:", err);
        res.status(500).send(err.message);
    }
};

// Get buses with availableSeats > X
const retrieveBusesWithAvailableSeats = async (req, res) => {
    try {
        const { seats } = req.params;
        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [require('sequelize').Op.gt]: parseInt(seats)
                }
            }
        });

        if (buses.length === 0) {
            return res.status(400).send("No buses found with more than " + seats + " seats.");
        }

        const resultArray = buses.map(data => (
            `<tr>
                <td>${data.busNumber}</td>
                <td>${data.availableSeats}</td>
            </tr>`
        )).join("");

        res.status(200).send(`
            <table border="1">
                <thead>
                    <tr>
                        <th>Bus Number</th>
                        <th>Available Seats</th>
                    </tr>
                </thead>
                <tbody>${resultArray}</tbody>
            </table>
        `);
    } catch (err) {
        console.error("❌ Error retrieving buses:", err);
        res.status(500).send(err.message);
    }
};

module.exports = {
    addBus,
    getBus,
    retrieveBusesWithAvailableSeats
};


// const connection = require('../utils/db-connection');
// const db=require('../utils/db-connection')

// const addBus=(req,res)=>{
//     const {busNumber,totalSeats,availableSeats}=req.body;
//     const insertQuery="insert into buses(busnumber,totalseats,availableseats) values(?,?,?)"
//     db.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err)=>{
//         if(err){
//             console.log(err)
//             res.status(500).send(err.message)
//             connection.end()
//             return;
//         }
//         console.log("Bus has added")
//         res.status(200).send(`Bus with ${busNumber} busnumber successfully added`)
//     })
// }

// const getBus=(req,res)=>{
//     const getBus="select * from buses"
//     db.execute(getBus,(err,result)=>{
//         if(err){
//             console.log(err)
//             res.status(500).send(err.message)
//             connection.end()
//             return;
//         }
//         console.log("Buses' data is fetched")
//         console.log(result)
//         const resultArray=result.map((data)=>(
//             `<tr>
//             <td>${data.busNumber}<td>
//             <td>${data.availableSeats}<td>
//             <tr>`
//         )).join("")
//         res.status(200).send(`
//             <table>
//             <thead>
//             <tr>
//             <th>Bus Number</th>
//             <th>Available Seats</th>
//             </tr>
//             </thead>
//             <tbody>${resultArray}</tbody>
//             </table>
//             `)
//     })
// }

// const retrieveBusesWithAvailableSeats=(req,res)=>{
//     const {seats}=req.params
//     const retrieveQuery="select * from buses where availableSeats>?"
//     db.execute(retrieveQuery,[seats],(err,result)=>{
//         if(err){
//             console.log(err)
//             res.status(500).send(err.message)
//             connection.end()
//             return;
//         }
//         if(result.length==0){
//                 res.status(400).send("Bus not found")
//                 return;
//         }
//         console.log("Buses' data is fetched")
//         console.log(result)
//         const resultArray=result.map((data)=>(
//             `<tr>
//             <td>${data.busNumber}<td>
//             <td>${data.availableSeats}<td>
//             <tr>`
//         )).join("")
//         res.status(200).send(`
//             <table>
//             <thead>
//             <tr>
//             <th>Bus Number</th>
//             <th>Available Seats</th>
//             </tr>
//             </thead>
//             <tbody>${resultArray}</tbody>
//             </table>
//             `)
//     })
// }


// module.exports={
//     addBus,
//     getBus,
//     retrieveBusesWithAvailableSeats
// }