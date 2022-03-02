const router = require('express').Router()
const ids = require('./idModel')


router.get("/", async(req,res) => {
    let myid = await ids.getId()
    res.json(myid)
})

router.post("/", async(req,res) => {
    await ids.setId(req.body.id)
    res.json('successfully updated')
})

module.exports = router