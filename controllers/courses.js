const Course = require('../models/course');

module.exports = {
    index,
    new: newCourse,
    create,
    //show
}

function create(req, res) {
  req.body.user = req.user;
  //Course.create(req.body);
  let course = new Course(req.body)
  course.save(function(e) {
  res.redirect('/courses')
  });
}

function index(req, res) {
   Course.find({user: req.user._id}, function(err, courses) {
      res.render('courses/index', {title: 'My Courses', courses});
 });
}

function newCourse(req, res) {
  res.render('courses/new', {title: 'Add A New Course'});
}