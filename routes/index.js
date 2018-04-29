var express = require('express');
var router = express.Router();
const {models} = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET credits page. */
router.get('/credits', function (req, res, next) {
    res.render('credits', { title: 'Express' });
});

/* GET quizzes page. */
router.get('/quizzes', function (req, res, next) {
    models.quiz.findAll()
        .then(quizzes =>{
            var JsonQuizzes=JSON.stringify(quizzes);
            res.render('quizzes',{quizzes:JsonQuizzes});
            })
        .catch(error =>{
            console.log(error);
        })

});

module.exports = router;
