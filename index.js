const express = require('express')
const app = express()
const port = 3000


let a, b;
let c =a+b;
app.get('/tin-tuc', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})