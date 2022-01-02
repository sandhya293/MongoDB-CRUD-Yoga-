const mongoose = require("mongoose");
mongoose.pluralize(null);

const yogaSchema = mongoose.Schema( {
    name: String,
    steps: String,
    time: String
});

const yogaModel = mongoose.model("Yoga",yogaSchema);

module.exports= yogaModel;