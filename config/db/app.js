import express, { json } from 'express'
import userRouter from './routers/user'
import itemRouter from './routers/item'
import cartRouter from './routers/cart'
import './db/mongoose'

const port = process.env.PORT 

const app = express()

app.use(json())
app.use(userRouter)
app.use(itemRouter)
app.use(cartRouter)




app.listen(3000, function() {
    console.log("server listening on port " + 3000)
    });