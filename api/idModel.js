const db = require('../data/db-config')


async function getId () {
    return await db('mynumbers').first()
}

async function setId (newValue){
    return await db('mynumbers').first().update({id: newValue})
}
module.exports = {getId, setId}