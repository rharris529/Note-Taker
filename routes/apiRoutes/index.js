const router = require('express').Router();
const noteRoutes = require('../apiRoutes');

router.use(noteRoutes);

module.exports = router;