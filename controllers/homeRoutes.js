const router = require('express').Router();
const { User, Bottle, Category } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Add a comment describing the functionality of the withAuth middleware
router.get('/', withAuth, async (req, res) => {
  try {
    const bottleData = await Bottle.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
        {
          model: Category,
        },
      ],
      where: {
        user_id: req.session.user_id,
      },
      order: [
        ['producer_name', 'ASC'],
        ['vintage', 'ASC'],
        ['wine_name', 'ASC']
      ]
    });

    const bottles = bottleData.map((bottle) => bottle.get({ plain: true }));

    res.render('homepage', {
      bottles,
      // TODO: Add a comment describing the functionality of this property
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/addBottle', async (req, res) => {
  res.render("addBottle")
})

router.get('/login', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/add', withAuth, (req, res) => {
  res.render('addbottle', {
    logged_in: req.session.logged_in,
    user_id: req.session.user_id,
  });
});

router.get('/update/:id', withAuth, async (req, res) => {
  console.log('entering update');
  try {
    const bottleData = await Bottle.findOne({
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
        {
          model: Category,
        },
      ],
      where: {
        id: req.params.id,
      },
    });

    console.log('bottleData!!!', bottleData);

    const bottle = bottleData.get({ plain: true });

    res.render('editbottle', {
      bottle,
      // TODO: Add a comment describing the functionality of this property
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
