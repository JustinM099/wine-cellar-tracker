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
            res.status(404).json({ message: 'No such bottle. Maybe you lost it?' })
            return
        }
        const bottle = bottleData.get({ plain: true })
        res.render('placeholder', { bottle, loggedIn: true }) //TODO: insert handlebars where it says 'placeholder'
    } catch (err) {
        console.log('err', err)
        res.status(500).json(err)
    }
})

//POST route - create a new bottle
router.post('/', withAuth, async (req, res) => {
    try {
        const newBottle = await Bottle.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(newBottle)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

//PUT route - update a bottle
router.put('/:id', async (req, res) => {
    try {
        const bottle = await Bottle.update({
            producer_name: req.body.producer_name,
            vintage: req.body.vintage,
            stock: req.body.stock,
            variety: req.body.variety,
            region: req.body.region,
            wine_name: req.body.wine_name,
            tasting_notes: req.body.tasting_notes,
            reviews: req.body.reviews,
            wine_type: req.body.wine_type,
            cellar_location: req.body.cellar_location,
            category_id: req.body.category_id
        },
            {
                where: {
                    id: req.params.id
                }
            })
        if (!bottle){
            req.status(404).json({message: `I'm sorry, but that bottle doesn't seem to exist.`})
        }
        res.json(bottle)
    } catch (err) {
        console.log(err)
        res
    }
})

//DELETE route - delete an entire bottle
router.delete('/:id', async (req, res) => {
    try {
        const deletedBottle = await Bottle.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!deletedBottle) {
            res.status(404).json({message: `I'm sorry, we couldn't delete that bottle.`})
        }

    } catch (err){
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router