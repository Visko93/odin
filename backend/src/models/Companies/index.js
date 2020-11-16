const mongoose = require("mongoose");
const data = require("./data/index");

const CompaniesSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  data: {
    type: mongoose.Schema.Types.ObjectId,
    child: data,
  },
});
