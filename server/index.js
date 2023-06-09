const express = require('express')
const path = require('path');

const app = express()
const port = 3000

const statics = path.join(__dirname + '/../client/dist');

app.use(express.static(statics));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`SDC Lilac App listening on port ${port}`)
})