import mongoose from 'mongoose';
const scheduleSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    house: String,
    date: {
        type: Date
    },
    creatorName: {
        type: String,
    },
    creatorEmail: {
        type: String,
    },
    isMarked: {
        type: Boolean,
        default: false,
    },
});

var Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;