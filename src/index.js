const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors())

app.use(express.json())
app.get('/home', async (req, res) => {
	try{
		res.send("hello. this is a test.")
	} catch(error){
		res.send(error)
	}
})

const PORT = process.env.PORT || 80
app.listen(PORT)
