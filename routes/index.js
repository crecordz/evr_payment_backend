const router = require('express').Router();
const checkRouter = require('./pay');
const NotFoundError = require('../errors/not-found-err');

router.use(checkRouter);
router.use((req, res, next) => next(new NotFoundError('Страница не найдена')));

module.exports = router;
