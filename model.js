const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    key: String,
    value: String,
    counts: [Number]
  },
  { timestamps: true }
);

const model = mongoose.model('records', schema);

module.exports = {
    model
}