const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 100
    }
});

GenreSchema.virtual('url').get(function () {
    return `/catalog/genre/${this.id}`
})

module.exports = mongoose.model('Genre', GenreSchema)