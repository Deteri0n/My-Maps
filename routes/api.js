/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/maps", (req, res) => {
    // let query = `SELECT * FROM maps`;
    // console.log(query);

    let user_id = req.session.user_id ? req.session.user_id : null;
    if (user_id) {
    // Put is name instead of login button && display his maps and favorite maps
    } else {
    // Put a login button and display random mapsà
      res.render("../views/maps");
    }

    // db.query(query)
    //   .then(data => {
    //     const widgets = data.rows;
    //     res.json({ widgets });
    //   })
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    //   });
  });
  return router;
};

// GET Route for maps at /maps

// GET Route for editing a map at /maps/:id/edit

// GET Route for specific map at /maps/:id

// GET Route for a new map at /maps/new
// POST Route for a new map at /maps

// POST Route for favourite a map /maps/:id/favorite
// POST Route for favourite a map /maps/:id/favorite

// POST Route for updating an existing map on /maps/:id

// POST Route for deleting an existing map on /maps/:id
