const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("Your DB")
};
