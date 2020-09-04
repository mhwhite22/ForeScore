var express = require("express");
var router = express.Router();
const roundsCtrl = require("../controllers/rounds");

router.get("/", roundsCtrl.index);
router.get("/new", roundsCtrl.new);
router.post("/", roundsCtrl.create);
//router.get("/:id", roundsCtrl.show);  *** feature under development

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
