const router = require('express').Router()
const { Bottle, Category, User } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/'), withAuth, async (req, res) => {
    try{
        console.log('GETTING BOTTLES')
        const bottleData = await Bottle.findAll({
            where: {
                
            }
        })
    } catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = router