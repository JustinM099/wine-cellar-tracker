const router = require('express').Router()
const { Bottle, Category, User } = require('../../models')
const withAuth = require('../../utils/auth')

//get all bottles for a user
router.get('/'), withAuth, async (req, res) => {
    try {
        console.log('GETTING BOTTLES')
        const bottleData = await Bottle.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                    attributes: ['id', 'username']
                }
            ]
        })
        const bottles = bottleData.map(bottle => bottle.get({ plain: true }))
        res.render('placeholder', { bottles, loggedIn: true }) //TODO: insert handlebars where it says 'placeholder'
    } catch (err) {
        console.log('err', err)
        res.status(500).json(err)
    }
}

//get one bottle for a user -- TODO: finish this one
router.get('/:id', withAuth, async (req, res) => {
    try {
        const bottleData = await Bottle.findOne({
            where: {
                id: req.params.id,
                user_id: req.session.user_id //ensure that each user gets their own bottles

            },
            include: [
                {
                    model: User,
                    attributes: ['id', 'username']
                }
            ]

        })
        if (!bottleData) {
            res.status(404).json({message: 'No such bottle. Maybe you lost it?'})
            return
        }
        const bottle = bottleData.get({ plain: true })
        res.render('placeholder', {bottle, loggedIn: true}) //TODO: insert handlebars where it says 'placeholder'
    }catch(err){
        console.log('err', err)
        res.status(500).json(err)
    }
})

module.exports = router