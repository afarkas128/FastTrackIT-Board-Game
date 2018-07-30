var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var mysql = require('mysql');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "fast-track-it-board-game-project-db"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM players_location", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    });
});

module.exports = router;


