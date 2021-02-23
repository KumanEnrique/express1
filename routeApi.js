const express = require("express")
const router = express.Router()

router.get("/api",(req,res)=>{
    res.json({
        message:"soy un api"
    })
})

module.exports = router;