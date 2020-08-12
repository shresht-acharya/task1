const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');
console.log('Router Loaded');

router.get('/', controller.crud);
router.post('/create-crud', controller.newCrud);
router.get('/delete-crud', controller.deleteCrud);

module.exports = router;