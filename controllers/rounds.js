const User = require('../models/user');
const Round = require('../models/round');

module.exports = {
    index,
    new: newRound,
    create
    //show
}

function create(req, res) {
  Round.create(req.body);
  res.redirect('rounds/index')
}

function index(req, res) {
    Round.find({user: req.user._id}, function(err, rounds) {
      res.render('rounds/index', {title: 'My Rounds', rounds});
  });
}

function newRound(req, res) {
  console.log('hitting');
  res.render('rounds/new', {title: 'Add A New Round'});
}

// function show (req, res) {
//     // Round.find({user: req.params.id}, function(err, rounds){
//     //     if (err) return console.log(err);
//     //     console.log(err);
//     //     res.render('rounds/show', {title: 'My Rounds', rounds, user: req.user});
//     // });
// }