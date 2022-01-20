const router = require('express').Router();
const { Bottle, Category, User } = require('../../models');
const withAuth = require('../../utils/auth');
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// get all bottles for a user
router.get('/', async (req, res) => {
  try {
    console.log('GETTING BOTTLES');
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
    });
    const bottles = bottleData.map((bottle) => bottle.get({ plain: true }));
    res.render('homepage', { bottles, loggedIn: true }); 
    // res.json(bottles)
  } catch (err) {
    console.log('err', err);
    res.status(500).json(err);
  }
});

//POST route - create a new bottle
router.post('/', async (req, res) => {
  console.log('Hit the Post Route');
  try {
    const newBottle = await Bottle.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBottle);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//PUT route - update a bottle
router.put('/:id', async (req, res) => {
  try {
    var updatedInfo = {
      producer_name: req.body.producer_name,
      vintage: req.body.vintage,
      stock: req.body.stock,
      variety: req.body.variety,
      region: req.body.region,
      wine_name: req.body.wine_name,
      tasting_notes: req.body.tasting_notes,
      reviews: req.body.reviews,
      cellar_location: req.body.cellar_location,
    };

    if (req.body.wine_type) {
      updatedInfo.wine_type = req.body.wine_type;
    }

    if (req.body.category_id) {
      updatedInfo.category_id = req.body.category_id;
    }

    const bottle = await Bottle.update(updatedInfo, {
      where: {
        id: req.params.id,
      },
    });
    if (!bottle) {
      req
        .status(404)
        .json({ message: `I'm sorry, but that bottle doesn't seem to exist.` });
    }
    res.json(bottle);
  } catch (err) {
    console.log(err);
    res;
  }
});

//PUT route - update a bottle count
router.put('/count/:id', async (req, res) => {
  try {
    var bottleCount = {
      stock: req.body.stock,
    };

    const bottle = await Bottle.update(bottleCount, {
      where: {
        id: req.params.id,
      },
    });
    if (!bottle) {
      req
        .status(404)
        .json({ message: `I'm sorry, but that bottle doesn't seem to exist.` });
    }
    res.status(200).json(bottle);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//DELETE route - delete an entire bottle
router.delete('/:id', async (req, res) => {
  try {
    const deletedBottle = await Bottle.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedBottle) {
      res
        .status(404)
        .json({ message: `I'm sorry, we couldn't delete that bottle.` });
    } else {
        res.status(200).json(deletedBottle)
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//get routes for filtered results

//get route for filter by producer_name
router.get('/filter/producer', withAuth, async (req, res) => {
  try {
    console.log('GETTING BOTTLES');
    let { term } = req.query
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
      where:
        // filterParams
        {
          producer_name: { [Op.like]: '%' + term + '%'},
          user_id: req.session.user_id,
        }
    }
    );
    const bottles = bottleData.map((bottle) => bottle.get({ plain: true }));
    res.render('filtered', { 
      bottles, 
      logged_in: req.session.logged_in,}); 
    // res.json(bottles)
  } catch (err) {
    console.log('err', err);
    res.status(500).json(err);
  }
});

//get route for filter by region
router.get('/filter/region', withAuth, async (req, res) => {
  try {
    console.log('GETTING BOTTLES');
    let { term } = req.query
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
      where:
        // filterParams
        {
          region: { [Op.like]: '%' + term + '%'},
          user_id: req.session.user_id,
        }
    }
    );
    const bottles = bottleData.map((bottle) => bottle.get({ plain: true }));
    res.render('filtered', { 
      bottles, 
      logged_in: req.session.logged_in,}); 
    // res.json(bottles)
  } catch (err) {
    console.log('err', err);
    res.status(500).json(err);
  }
});

//get route for filter by wine type
router.get('/filter/wine-type', withAuth, async (req, res) => {
  try {
    console.log('GETTING BOTTLES');
    let { term } = req.query
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
      where:
        // filterParams
        {
          wine_type: { [Op.like]: '%' + term + '%'},
          user_id: req.session.user_id,
        }
    }
    );
    const bottles = bottleData.map((bottle) => bottle.get({ plain: true }));
    res.render('filtered', { 
      bottles, 
      logged_in: req.session.logged_in,}); 
    // res.json(bottles)
  } catch (err) {
    console.log('err', err);
    res.status(500).json(err);
  }
});

//get route for filter by vintage
router.get('/filter/vintage', withAuth, async (req, res) => {
  try {
    console.log('GETTING BOTTLES');
    let { term } = req.query
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
      where:
        // filterParams
        {
          vintage: { [Op.like]: '%' + term + '%'},
          user_id: req.session.user_id,
        }
    }
    );
    const bottles = bottleData.map((bottle) => bottle.get({ plain: true }));
    res.render('filtered', { 
      bottles, 
      logged_in: req.session.logged_in,}); 
    // res.json(bottles)
  } catch (err) {
    console.log('err', err);
    res.status(500).json(err);
  }
});

//get route for filter by category
router.get('/filter/category', withAuth, async (req, res) => {
  try {
    console.log('GETTING BOTTLES');
    let { term } = req.query
    let { user_id } = req.session
    console.log('TERM: ', term, 'USER ID: ', user_id)
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
      where:
        // filterParams
        {
          category_id: { [Op.like]: term },
          user_id: { [Op.like]: user_id },
        }
    }
    );
    const bottles = bottleData.map((bottle) => bottle.get({ plain: true }));
    res.render('filtered', { 
      bottles, 
      logged_in: req.session.logged_in,}); 
    // res.json(bottles)
  } catch (err) {
    console.log('err', err);
    res.status(500).json(err);
  }
});

module.exports = router;
