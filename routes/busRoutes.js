const express=require('express')
const router=express.Router()
const busController=require('../controllers/busController')

router.post('/add',busController.addBus)
router.get('/',busController.getBus)
router.get('/available/:seats',busController.retrieveBusesWithAvailableSeats)



module.exports=router