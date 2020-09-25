const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router()

router.use(authMiddleware)

router.get('/teste', async (req,res) =>{
    return res.json({message: 'opa testado'})
})

module.exports = router