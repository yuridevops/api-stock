const express = require('express')
const authRoutes = require('./controllers/authController')
const testeRoutes = require('./controllers/testeController')


const app = express()

app.use(express.json())
app.use(authRoutes)
app.use(testeRoutes)

app.get('/', (req, res)=>{
    res.send({message: 'opa'})
})

app.listen(3000)