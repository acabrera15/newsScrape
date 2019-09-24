var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const News = mongoose.model('News', {
    headline: String,
    summary: String,
    URL: String
});

module.exports = News;