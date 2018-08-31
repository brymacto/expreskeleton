const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, _next) => {
  res.json([
    { name: 'Exoskeleton' },
    { name: 'Endoskeleton' },
    { name: 'Pliant skeleton' },
    { name: 'Rigid skeleton' },
    { name: 'Cytoskeleton' },
    { name: 'Hydroskeleton' },
  ]);
});

module.exports = router;
