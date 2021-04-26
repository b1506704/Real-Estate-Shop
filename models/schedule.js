import mongoose from 'mongoose';
const scheduleSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    house: {
        type: Object,
        unique: true
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
    isMarked: {
        type: Boolean,
        default: false,
    },
});

var Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;