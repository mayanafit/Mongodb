const router = require(`express`).Router();
const SeriesController = require(`../controllers/SeriesController`);

router.get(`/`, SeriesController.findAll)
router.get(`/:id`, SeriesController.findOne)
router.post(`/`, SeriesController.insertOne)
router.put(`/:id`, SeriesController.updateOne)
router.delete(`/:id`, SeriesController.deleteOne)

module.exports = router