var express = require('express');
var mysql = require('mysql');
var router = express.Router();

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "fast-track-it-board-game-project-db"
});


/* GET users listing. */
router.get('/', function(req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        connection.query("SELECT * FROM players_location", function (err, result, fields) {
            connection.release();
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    });
});

router.post('/update', function(req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) throw err;

        const player = parseInt(req.body.player);
        const playerPosition = parseInt(req.body.playerPosition);

        //TODO - sa va asigurati ca in tabelul vostru aveti 2 coloane - una cu player (de tip int)
        //TODO - si inca una cu playerPosition (tot de tip int)
        let sql = `UPDATE players_location SET playerPosition = '${playerPosition}' WHERE player = ${player}`;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json({success: true});
        });
    });
});

module.exports = router;