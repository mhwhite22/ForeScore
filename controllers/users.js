const User = require('../models/user');
const Round = require('../models/round');

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('users/index', {title: 'Fore Score'})
}

function show (req, res) {
        // Round.find({user: user._id}, function(err, rounds){
        //     res.render('users/show', {title: 'My Rounds', rounds});
        // });
        //res.render('users/show', {title: 'My Rounds'});
        console.log("working");
}

// function show(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         Ticket.find({flight: flight._id}, function(err, tickets) {
//             res.render('flights/show', { title: 'Flight Details', flight, tickets});
//         });
//     });
// }


