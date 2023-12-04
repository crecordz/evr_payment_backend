const router = require('express').Router();
const { errors } = require('celebrate');

const { pay } = require('../controllers/pay');

router.post('/pay', pay);

router.use(errors());
module.exports = router;
