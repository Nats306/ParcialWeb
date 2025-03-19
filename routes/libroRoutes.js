const express = require('express');
const router = express.Router();
const libroController = require('../controller/libroController');

router.post('/', libroController.addLibro);
router.get('/', libroController.getLibros);
router.put('/:id', libroController.updateLibro);
router.put('/:id', libroController.changeStatus);

module.exports = router;