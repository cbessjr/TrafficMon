const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const isAuthenticated = require("../../config/middleware/isAuthenticated.js");
var passport = require("../../config/passport");


//Matches with "/api/users"
router.route("/")
	.post(usersController.create);

//Matches with "/api/users/:id"
router.route("/:id")
	.delete(usersController.remove);

//Matches with "/api/users/current-user"
router.get("/current-user", isAuthenticated, (req, res) => {
	console.log(req.user);
	res.json({
		username: req.user.userName,
		id: req.user.id
	});
});

//Matches with "/api/users/login"
router.route("/login")
	.post(passport.authenticate("local"), function (req, res) {
		if (req.user) {
			res.status(200).json(req.user);
		} else {
			res.status(401);
		}
	});

//Matches with "/api/users/logout"
router.get("/logout", function (req, res) {
	req.logout();
	res.redirect("/logout");
});

module.exports = router