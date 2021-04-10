import mongoose from 'mongoose';
const houseSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    category: String,
    imgUrl: String,
    price: {
        type: Number,
        min: 0
    },
    isBought: {
        type:Boolean,
        default: false,
    },
    houseOwner: String,
    houseSeller: String,
    area: Number,
    front: Number,
    direction: String,
    address: String
});

var House = mongoose.model('House', houseSchema);

export default House;