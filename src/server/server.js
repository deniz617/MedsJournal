const path = require('path')
const express = require('express')
const exp = require('constants')
const { version } = require('os')
const app = express()
const port = 4444

app.set('views', path.join(__dirname, 'views'))
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/api', (req, res) => {
    res.send(`Express version ${version}`)
})
app.get('/api/add', (req, res) => {
   // TODO add to database 
})
app.get('/api/download', (req, res) => {

})
app.get('/api/get_entries:count', (req, res) => {

})

app.use((req, res) => {
    res.status(404).send('404 Not found :)')
})
app.use((err, req, res) => {
    console.error(err.stack)
    res.status(500).send("Error~") 
})
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})