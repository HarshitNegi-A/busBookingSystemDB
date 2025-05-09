const User = require('../models/user');

// GET all users
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        const resultArray = users.map((user) => `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `).join("");

        res.status(200).send(`
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>${resultArray}</tbody>
            </table>
        `);
    } catch (err) {
        console.error("❌ Error fetching users:", err);
        res.status(500).send(err.message);
    }
};

// POST add a user
const addUsers = async (req, res) => {
    try {
        const { email, name } = req.body;
        const user = await User.create({ email, name });
        console.log("✅ User inserted:", user.toJSON());

        res.status(200).send(`User with name ${name} successfully added.`);
    } catch (err) {
        console.error("❌ Error adding user:", err);
        res.status(500).send(err.message);
    }
};

// PUT update user
const updateUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const [updatedCount] = await User.update(
            { name, email },
            { where: { id } }
        );

        if (updatedCount === 0) {
            return res.status(400).send("User not found");
        }

        res.status(200).send(`User with ID ${id} successfully updated.`);
    } catch (err) {
        console.error("❌ Error updating user:", err);
        res.status(500).send(err.message);
    }
};

// DELETE user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCount = await User.destroy({ where: { id } });

        if (deletedCount === 0) {
            return res.status(400).send("User not found");
        }

        res.status(200).send(`User with ID ${id} has been deleted.`);
    } catch (err) {
        console.error("❌ Error deleting user:", err);
        res.status(500).send(err.message);
    }
};

module.exports = {
    getUsers,
    addUsers,
    updateUsers,
    deleteUser
};



// const connection = require('../utils/db-connection');
// const db=require('../utils/db-connection')

// const getUsers=(req,res)=>{
//     const selectQuery="select * from users"
//     db.execute(selectQuery,(err,result)=>{
//         if(err){
//             console.log(err)
//             res.status(500).send(err.message)
//             connection.end()
//             return;
//         }
//         console.log("Users' data is fetched")
//         console.log(result)
//         const resultArray=result.map((data)=>(
//             `<tr>
//             <td>${data.name}<td>
//             <td>${data.email}<td>
//             <tr>`
//         ))
//         res.status(200).send(`
//             <table>
//             <thead>
//             <tr>
//             <th>Name</th>
//             <th>Email</th>
//             </tr>
//             </thead>
//             <tbody>${resultArray}</tbody>
//             </table>
//             `)
//     })
// }

// const addUsers=(req,res)=>{
//     const {email,name}=req.body
//     const insertQuery='INSERT INTO USERS(email,name) VALUES (?,?)';

//     db.execute(insertQuery,[email,name],(err)=>{
//         if(err){
//             console.log(err)
//             res.status(500).send(err.message)
//             connection.end()
//             return
//         }
//         console.log("Values has been inserted")
//         res.status(200).send(`User with name ${name} successfully added.`)
//     })

// }

// const updateUsers=(req,res)=>{
//     const {id}=req.params
//     const {name,email}=req.body
//     const updateQuery="UPDATE users set name=?,email=? where id=?"

//     db.execute(updateQuery,[name,email,id],(err,result)=>{
//         if(err){
//             console.log(err)
//             res.status(500).send(err.message)
//             connection.end()
//             return;
//         }
//         if(result.affectedRows===0){
//             res.status(400).send("User not found")
//             return;
//         }
//         console.log("User has been updated")
//         res.status(200).send(`User with name ${id} successfully updated.`)
//     })

// }

// const deleteUser=(req,res)=>{
//     const {id}=req.params;
//     const deleteQuery="DELETE FROM users Where id= ?"

//     db.execute(deleteQuery,[id],(err,result)=>{
//         if(err){
//             console.log(err.message)
//             res.status(500).send(err.message)
//             return
//         }

//         if(result.affectedRows===0){
//             res.status(400).send("user not found")
//             return
//         }
//         res.status(200).send(`User with ${id} is deleted`)
//     })
// }

// module.exports={
//     getUsers,
//     addUsers,
//     updateUsers,
//     deleteUser
// }