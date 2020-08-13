const router = require(`express`).Router();
const moviesRoute = require(`./movies`);
const seriesRoute = require(`./series`);

router.use(`/movies`, moviesRoute)
router.use(`/series`, seriesRoute)
router.get(`/`, (req, res) => {
    res.send(`hello masuk pak eko`)
})

module.exports = router