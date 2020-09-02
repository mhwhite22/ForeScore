const Course = require('../models/course');

module.exports = {
    index,
    new: newCourse,
    create,
    show,
    edit,
    update
}

function update(req, res) {
  // req.body = !!req.body.done;
  // Course.update(req.params.id, req.body);
  // res.redirect(`/courses/${req.params.id}`)
  Course.findById(req.params.id).update(req.body);
  res.redirect(`/courses/${req.params.id}`);
}

function edit(req, res) {
  Course.findById(req.params.id, function (err, course) {
    res.render('courses/edit', {title: 'Edit Course Details', course})
  });
}

function show(req, res) {
  Course.findById(req.params.id, function(err, course) {
    res.render('courses/show', {title: 'Course Details', course})
  })
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