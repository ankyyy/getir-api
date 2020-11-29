const mongoose = require('mongoose');

module.exports = {
    connect: () => mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }),
    disconnect: () => mongoose.disconnect()
}