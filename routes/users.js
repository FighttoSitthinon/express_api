var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definition:
 *   users:
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    "name":"222",
    "email":"222",
    "age":"10",
    "sex":"1s",
  });
});

router.get('/hi', function(req, res, next) {
  res.send('Hi');
});

module.exports = router;
