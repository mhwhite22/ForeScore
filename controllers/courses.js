const Course = require('../models/Course');

module.exports = {
    index,
    new: newCourse,
    create,
    //show
}

function create(req, res) {
  Course.create(req.body);
  res.redirect('./index')
}

function index(req, res) {
   Course.find({user: req.user._id}, function(err, courses) {
      res.render('courses/index', {title: 'My Courses', courses});
 });
}

function newCourse(req, res) {
  res.render('courses/new', {title: 'Add A New Course'});
}