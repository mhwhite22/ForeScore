const User = require('../models/user');

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('users/index', {title: 'Fore Score'})
}

function show (req, res) {
    res.render('users/show', {title: 'My Rounds'})
    //search for rounds and display
}