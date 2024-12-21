const express = require('express');
const authenticateToken = require('../middleware/auth');
const customerController = require('../controllers/customerController');

const router = express.Router();

router.get('/capital/get-customer', authenticateToken, customerController.getCustomers);
router.post('/capital/post-customer', authenticateToken, customerController.postCustomer);

module.exports = router;
