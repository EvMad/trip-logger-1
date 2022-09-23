// require router
// require path
const router = require('express').Router();
const path = require('path');

//router.get for each page view
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "././public/index.html"));
});




module.exports = router;