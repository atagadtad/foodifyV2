const express = require("express");
const router = express.Router();
const app = express();

module.exports = db => {
  router.get("/", (req, res) => {
    res.render("index");
  });
  router.get("/pins", (req, res) => {
    db.query(
      `
    SELECT *
    FROM pins;
    `
    )
      .then(data => {
        const pins = data.rows;
        console.log(pins);
        res.json({ data: pins });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  router.post("/pinsCollection", (req, res) => {
    for (coord of req.body.data) {
      console.log("coord: ", coord);
      const values = [`${coord.lat}`, `${coord.lng}`, "2"];
      db.query(
        `
      INSERT INTO pins (latitude, longitude, map_id)
      VALUES ($1, $2, $3)
      RETURNING *;
      `,
        values
      ).then(res => {
        res.rows[0];
      });
    }
  });
  return router;
};
