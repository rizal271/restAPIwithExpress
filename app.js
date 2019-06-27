require(`dotenv`).config()

const express = require(`express`)
const bodyParser = require(`body-parser`)
const app = express()
const port = process.env.SERVER_PORT || 3333
const isEmpty = require(`lodash.isempty`)


const categoryRoute = require('./src/routes/routes')
const shelfRoute = require(`./src/routes/shelf_routes`)
const bookRoute = require(`./src/routes/book_routes`)

app.listen(port, () => {
  console.log(`\n App listening on port ${port} \n`)
}) // Create listening app

app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: false })) // body type

app.use('/category', categoryRoute)
app.use(`/shelf`, shelfRoute)
app.use(`/book`, bookRoute)