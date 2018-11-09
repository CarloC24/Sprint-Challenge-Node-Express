const express = require('express');

const actionF = require('./actionFunctions');

const router = express.Router();

router.get('/', actionF.get);

router.get('/:id', actionF.getId);

router.post('/', actionF.addAction);

router.put('/:id', actionF.updateAction);

router.delete('/:id', actionF.delete);

module.exports = router;
