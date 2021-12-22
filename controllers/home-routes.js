const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      const  = await .findAll({
        include: [
          {
            model: ,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const  = .map(() =>
        .get({ plain: true })
      );
  
      res.render('homepage', {
        ,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });