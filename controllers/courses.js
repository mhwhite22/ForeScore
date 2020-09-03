const Course = require("../models/course");

module.exports = {
  index,
  new: newCourse,
  create,
  show,
  edit,
  update,
  delete: deleteOne
};

function deleteOne(req, res) {
  let courseId = req.params.id
  Course.findByIdAndRemove(courseId, function (err) {
    res.redirect('/courses');
  })
}

function update(req, res) {
  Course.findOne({ _id: req.params.id }, function (err, course) {
    course.name = req.body.name;
    course.location = req.body.location;
    course.par = req.body.par;
    course.yardage = req.body.yardage;
    course.slope = req.body.slope;
    course.numHoles = req.body.numHoles;
    course.save(function (e) {
      if (e) {
        return res.redirect(`back`);
      }
      res.redirect("/courses");
    });
  });
}

function edit(req, res) {
  Course.findById(req.params.id, function (err, course) {
    res.render("courses/edit", { title: "Edit Course Details", course });
  });
}

function show(req, res) {
  Course.findById(req.params.id, function (err, course) {
    res.render("courses/show", { title: "Course Details", course });
  });
}

function create(req, res) {
  req.body.user = req.user;
  let course = new Course(req.body);
  course.save(function (e) {
    res.redirect("/courses");
  });
}

function index(req, res) {
  Course.find({ user: req.user._id }, function (err, courses) {
    res.render("courses/index", { title: "My Courses", courses });
  });
}

function newCourse(req, res) {
  res.render("courses/new", { title: "Add A New Course" });
}
