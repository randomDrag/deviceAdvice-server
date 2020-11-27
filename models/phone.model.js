const mongoose = require('mongoose');

let PhoneInfoSchema = mongoose.Schema({

    BRAND_NAME: {
        type: String,
        required : true
    },NAME:{
        type: String,
        required : true
    },PRICE_RANGE:{
        type: String,
        required : true
    },PRICE : {
        type: String,
        required : true
    },CAMERA_RATING:{
        type: String,
        required : true
    },GAMING_RATING :{
        type: String,
        required : true
    },DISPLAY_RATING:{
        type: String,
        required : true
    },TOTAL_RATING :{
        type: String,
        required : true
    },FLIPKART:{
        type: String,
        required : true
    },AMAZON:{
        type: String,
        required : true
    },DEVICE_SPECS:{
        type: String
    },IMAGE_LINK_1 :{
        type: String
    },IMAGE_LINK_2 :{
        type: String
    }

});

module.exports = mongoose.model('phoneinfo', PhoneInfoSchema);