import mongoose from 'mongoose';
const scheduleSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    house: {
        type: Object
    },
    date: {
        type: String
    },
    creatorName: {
        type: String,
    },
    creatorEmail: {
        type: String,
    },
    status: {
        type: String,
        default: 'waiting',
    },
});

var Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;