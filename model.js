const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    key: String,
    value: String,
    counts: [Number]
  },
  { timestamps: true }
);

const recordsModel = mongoose.model('records', schema);

module.exports = {
  recordsModel
}