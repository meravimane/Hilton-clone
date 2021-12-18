const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema(
    {
        area: {type:String, required:true},
        city: {type:String, required:true},
        country: {type:String, required:true},
        crawl_date: {type:Date, required:true},
        highlight_value: {type:String, required:true},
        hotel_overview: {type:String, required:true},
        hotel_star_rating: {type:String, required:true},
        in_your_room: {type:String, required:true},
        is_value_plus: {type:String, required:true},
        latitude: {type:String, required:true},
        longitude: {type:String, required:true},
        mmt_location_rating: {type:String, required:true},
        mmt_review_rating: {type:String, required:true},
        mmt_review_score: {type:String, required:true},
        mmt_traveller_type_review_count: {type:String, required:true},
        mmt_tripadvisor_count: {type:String, required:true},
        pageurl: {type:String, required:true},
        property_address: {type:String, required:true},
        property_id: {type:String, required:true},
        property_name: {type:String, required:true},
        property_type: {type:String, required:true},
        query_time_stamp: {type:String, required:true},
        site_review_count: {type:String, required:true},
        site_review_rating: {type:String, required:true},
        sitename: {type:String, required:true},
        state: {type:String, required:true},
        traveller_rating: {type:String, required:true},
    }

);


module.exports = mongoose.model("hotelDetail", hotelSchema)