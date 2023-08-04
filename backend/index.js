const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes/route')
app.use(express.json())

app.use(cors({
    origin:"*",
}))

app.use(routes)

const port = process.env.port || 8080;
require('./conn')

app.listen(port,()=>{
    console.log(`server running at port ${port} `);
})