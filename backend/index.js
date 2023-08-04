const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())

app.use(cors({
    origin:"*",
}))

const port = process.env.port || 8080;
require('./conn')

app.listen(port,()=>{
    console.log(`server running at port ${port} `);
})