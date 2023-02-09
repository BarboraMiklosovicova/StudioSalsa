require("dotenv").config();
const mongoose = require('mongoose')

const Course = require('./models/Course')
const Event = require('./models/Event')
const { courses } = require('../seedDb/courses')
const { events } = require('../seedDb/events')

const seedSalsaDb = async () => {
  let conn
  try {
   
    mongoose.set('strictQuery', false) 
    conn = await mongoose.connect(process.env.MONGO_URI)

   
    console.log('Clearing database...')
    await Course.deleteMany()

    await Event.deleteMany()

   
    console.log('Adding data...')
 
    await Course.create(courses)

    await Event.create(events)

    console.log('Database successfully populated with data...')
  } catch (error) {
    // Log eny eventual errors to Terminal
    console.error(error)
  } finally {
    // Disconnect from database
    if (conn) conn.disconnect()
    // End Node process
    process.exit(0)
  }
}

seedSalsaDb()