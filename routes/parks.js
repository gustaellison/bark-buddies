const express = require('express');
const router = express.Router();

const parkCtrl = require('../controllers/parks');

router.get('/', parkCtrl.index);
router.get('/new', parkCtrl.new);//HAS TO GO ABOVE

router.get('/:id', parkCtrl.show);
router.post('/', parkCtrl.create)

module.exports = router;