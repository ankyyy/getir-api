const express = require('express')
const Ajv = require('ajv')
const router = express.Router()
const handlers = require('./handler')

const ajv = new Ajv()
const schema = {
    type: "object",
    properties: {
        "startDate": { type: "string" },
        "endDate": { type: "string" },
        "minCount": { type: "number" },
        "maxCount": { type: "number" },
    },
    additionalProperties: false,
    required: ["startDate", "endDate", "minCount", "maxCount"]
}

router.post('/records', (req, res, next) => {
    if (!ajv.validate(schema, req.body)) {
        return res.status(400).send('Bad Request:Payload not correct')
    }
    next()
}, async (req, res) => {
    try {
        const records = await handlers.getRecords(req.body)
        res.send({ code: 0, msg: 'Success', records })
    } catch (e) {
        res.status(500).send('Internal server error')
    }
})


module.exports = router