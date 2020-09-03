const Course = require('../models/course')
const Round = require('../models/round');

module.exports = {
    index,
    new: newRound,
    create,
    show
}

function create(req, res) {
  req.body.user = req.user;
  let newRound = new Round(req.body);
  newRound.save(function(e) {
    if (e) {
      return;
    }
  res.redirect('/rounds')
  })
}

function index(req, res) {
    Round.find({user: req.user._id}).populate('course').exec(function(err, rounds) {
      res.render('rounds/index', {title: 'My Rounds', rounds});
  });
}

function newRound(req, res) {
  Course.find({user: req.user._id}, function(err, courses) {
    res.render('rounds/new', {title: 'Add A New Round', courses});
  })
}

function show (req, res) {
    Round.findById(req.params.id).populate('course').exec(function(err, rounds){
        if (err) return console.log(err);
        res.render('rounds/show', {title: '', rounds, user: req.user});
    });
}