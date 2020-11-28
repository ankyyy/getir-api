const { model } = require('./model');

async function getRecords({ startDate, endDate, minCount, maxCount }) {
  const records = await model.aggregate([
    {
      $addFields: {
        totalCount: {
          $sum: '$counts',
        },
      },
    },
    {
      $match: {
        totalCount: {
          $gt: minCount,
          $lt: maxCount,
        },
        createdAt: {
          $gt: new Date(startDate),
          $lt: new Date(endDate),
        },
      },
    },
    {
      $project: {
        key: 1,
        createdAt: 1,
        totalCount: 1,
        _id: 0,
      },
    },
  ]);
  return records;
}

module.exports = {
  getRecords,
};
