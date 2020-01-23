const express = require('express');
const router = express.Router();
const Hero = require('./models/hero');


router.get('/heroes', function(req, res){
    Hero.find({}).then(function(result){
        res.send(Heroes);
    });
});

router.get('/heroes/:id', function(req, res){
    Hero.findOne({_id: '5bd820ded9df915a90339e71' }).then(function(hero){
        res.send(hero);
    })
});


router.post('/heroes',function(req,res,next){
  const {name,role} = req.body;

  Hero.create(req.body)
  .then(function(result){
    res.send(result);
  })
  .catch(next)
});

router.put('/heroes/:id', function(req, res){
    Hero.findOneAndUpdate({_id: req.params.id},req.body).then(function(result){
      Hero.findOne({_id: req.params.id}).then(function(hero){
          res.send(hero);
      });
        });
});

router.delete('/heroes/:id', function(req, res){
    Hero.findOneAndRemove({_id: req.params.id}).then(function(result){
    res.send(result);
    });
});

module.exports = router;
