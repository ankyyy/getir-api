const express = require('express')
const router = express.Router()
const handlers = require('./handler')

router.post('/records', async (req, res) => {
    try {
        const records = await handlers.getRecords(req.body)
        res.send({ code: 0, msg: 'Success', records })
    } catch (e) {
        res.status(500).send('Internal server error')
    }
})


module.exports = router