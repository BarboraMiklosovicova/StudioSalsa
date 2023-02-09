const mongoose = require("mongoose");

const danceRoleType ={
    leader: "leader",
    follower: "follower"
}


const CourseSchema = new mongoose.Schema ({
    name: {
        type: String,
        require: true,

    },
    previousKnowledge: {
        type: String,

    },
    instructors:{
        type: [String],
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate:{
        type: Date,
        require: true
    },
    startTime:{
        type: String,
        require: true
    },
    endTime:{
        type: String,
        require: true
    },
    dayOfWeek:{
        type: String,
        require: true
    },
    occasions:{
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    danceType:{
        type: String,

    },
    level: {
        type: Number,
        require: true
    },
    term: {
        type: String,
        require: true
    },
    classLengthMins:{
        type: Number,
    },
    couplesDance: {
        type: Boolean,
        require: true
    },
    maxParticipants: {
        type: Number,
        require: true
    },
    registrations:{
        type:[{
            name:{
                type: String,
            },
            partner: {
                type: String,
            },
            email: {
                type: String,
            },
            danceRole:{
                type: String,
              enum: Object.values(danceRoleType),
            },
            totalPrice:{
                type: Number,
            },
            course: {
                type: [mongoose.Schema.Types.ObjectId],
                ref: "Course"
            }}
        ]
    }
})

module.exports = mongoose.model("Course", CourseSchema);