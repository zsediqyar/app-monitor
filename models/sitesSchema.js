const mongoose = require('mongoose');

//MONGO DB SCHEMA
const sitesSchema = new mongoose.Schema ({
    name: String,
    url: String,
    remarks: String,
    status: []
});

const Sites = mongoose.model ('Sites', sitesSchema);

module.exports = Sites;