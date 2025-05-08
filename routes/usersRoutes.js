const express=require('express')
const router=express.Router()
const usersController=require('../controllers/usersController')

router.get('/',usersController.getUsers)
router.post('/add',usersController.addUsers)
router.put('/update/:id',usersController.updateUsers)
router.delete('/delete/:id',usersController.deleteUser)


module.exports=router