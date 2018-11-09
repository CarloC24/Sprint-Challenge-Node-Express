const express = require('express');

const projectF = require('./projectFunctions');

const router = express.Router();

router.get('/', projectF.get);

router.get('/:id', projectF.getId);

router.post('/', projectF.addAction);

router.put('/:id', projectF.updateAction);

router.delete('/:id', projectF.delete);

module.exports = router;
