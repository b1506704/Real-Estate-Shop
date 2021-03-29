import mongoose from 'mongoose';

const houseSchema = mongoose.Schema({
    id: String,
    category: String,
    imgUrl: String,
    price: Number,
    isBought: Boolean,
    accOwner: String,
    location: String,
    area: Number,
    direction: String,
    frontArea: String
});

var House = mongoose.model('House', houseSchema);

export default House;