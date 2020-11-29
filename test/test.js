require('dotenv').config()
require('../database')


const { getRecords } = require('../handler')

describe('My Test Suite', () => {
    afterAll(()=>{
        require('./teardown')
    })
    it('My Test Case', async () => {
        const input = {
            "startDate": "2015-01-26",
            "endDate": "2015-02-2",
            "minCount": 2700,
            "maxCount": 3000
        }
        const result = [
            {
                "key": "QVzkaxzj",
                "createdAt": new Date("2015-01-29T17:16:17.055Z"),
                "totalCount": 2902
            },
            {
                "key": "ncigoAXR",
                "createdAt": new Date("2015-01-29T05:16:15.836Z"),
                "totalCount": 2713
            },
            {
                "key": "Icrnhwth",
                "createdAt": new Date("2015-01-27T11:51:26.129Z"),
                "totalCount": 2918
            },
            {
                "key": "ttVqYttn",
                "createdAt": new Date("2015-01-26T05:32:30.685Z"),
                "totalCount": 2912
            }
        ]
        const response = await getRecords(input);
        expect(result).toEqual(response);
    });
});