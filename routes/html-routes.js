// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const router = require("express").Router();

  router.get("/exercise", function(req, res) {
    res
			.sendFile(path.join(__dirname, "../public/exercise.html"))
  });

  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  });

  // router.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"))
  //   .catch((err) => {
	// 		res.status(400).json(err);
	// 	});
  // });

module.exports = router;