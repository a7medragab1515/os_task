const express = require("express")
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Ahmed Mohamed Ragab Mahmoud \n -- Section 1')
})

app.listen(PORT, () => {
    console.log('Example app listening at http://localhost:'+PORT)
})