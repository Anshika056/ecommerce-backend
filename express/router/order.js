const router = require("express").Router()
const {addOrder,cancleOrder}=require("../controllers/order")
router.post("/order/add",addOrder)
router.get("/order/remove/:id",cancleOrder)

module.exports=router;