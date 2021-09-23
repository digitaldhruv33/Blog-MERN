import express from 'express'
import Connection from './database/db.js';
import Router from './routes/routes.js'
import cors from 'cors'
import bodyparser from 'body-parser'

const app = express()


app.use(cors())
app.use(bodyparser.json({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))
app.use("/", Router)


const PORT = 8000;



app.listen(PORT, ()=>{console.log(`server is running on ${PORT}`)})
Connection()

