import express from 'express'
// import bodyParser from 'body-parser'
import path from 'path'
import { getAllUsers, getUserByUserLastName } from './controllers/users'

const app = express()
app.use(express.static('public'))

app.get('/api/users', getAllUsers)
app.get('/api/users/:getUsersByUsersLastName', getUserByUserLastName)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})

