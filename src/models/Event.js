const mongoose = require ("mongoose");

const LocationSchema = new mongoose.Schema({
  venue: String,
  street: String,
  zipCode: String,
  city: String,
});

const EventSchema = new mongoose.Schema ({
  name: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
  startTime: {
    type: String,
    require: true,
  },
  endTime: {
    type: String,
    require: true,
  },
  location: {
    type: LocationSchema,
    require: true,
  }
});

module.exports = mongoose.model("Event", EventSchema);