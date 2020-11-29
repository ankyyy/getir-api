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

const validator = (req,res,next)=>{
    if (!ajv.validate(schema, req.body)) {
        return res.status(400).send({ code: 1, msg: 'Bad Request:Payload not correct' })
    }
    next()
}

router.post('/records', validator, async (req, res) => {
    try {
        const records = await handlers.getRecords(req.body)
        res.send({ code: 0, msg: 'Success', records })
    } catch (error) {
        console.log('Internal server error',error)
        res.status(500).send({ code: 2, msg: 'Internal server error' })
    }
})


module.exports = router