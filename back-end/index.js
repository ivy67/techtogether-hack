//imports the firebase database object we can use
const db = require('./firebase-config')

//imports express so you can use it
const express = require('express')

//use this variable to use express
const app = express()
const cors = require('cors')

//imports axios
const axios = require('axios')

app.use(cors())
app.use(express.static('build'))
//eases use of json
app.use(express.json())


// END POINTS

//end point 2
app.get('/get_songs', async (request, response) => {
  
  //front end will send you the string "happy"
  const mood = request.body // user input

  /**
   * request.body from front-end is going to be 
   * {
   *  "mood": "happy"
   * }
   * 
   * "happy" <--
   */

    //put code here
   
    try{

      //put code here
      //repeat this?
        const songList = db.collection('moods').doc('happy');
        const doc = await songList.get();
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
        }
      
    }
    catch(error){
    console.log(error)
  }

  response.send(`<h1>completed</h1>`)

}) 

const unknownEndpoint = (request, response) => {
    response.status(400).send({error: 'unknown endpoint'})
  }
  
//use of middleware is denoted by following
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})