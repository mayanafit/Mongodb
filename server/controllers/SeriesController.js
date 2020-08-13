const Series = require(`../models/series`);

class SeriesController {
    static async findAll (req, res) {
        try {
            const series = await Series.findAll();
            res.status(200).json(series)
        } catch(err) {
            res.status(500).json({message: err})
        }
    }

    static async findOne (req, res) {
        const SeriesId = req.params.id
        try {
            const series = await Series.findOne(SeriesId)
            if (!series) {
                res.status(404).json({message: 'cant find the data'})
            } else {
                res.status(200).json(series)
            }
        } catch(err) {
            res.status(500).json({message: err})
        }
    }

    static async insertOne (req, res) {
        const tags = req.body.tags.split(`,`)
        const newSeries = {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: +req.body.popularity,
            tags,
        }
        try {
            const result = await Series.insertOne(newSeries)
            res.status(200).json(result.ops[0])
        } catch(err) {
            res.status(500).json({message: err})
        }
    }

    static async updateOne (req, res) {
        const SeriesId = req.params.id
        const tags = req.body.tags.split(`,`)
        const updateSeries = {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: +req.body.popularity,
            tags,
        }
        try {
            const result = await Series.updateOne(SeriesId, updateSeries)
            if (result.matchedCount === 1) {
                res.status(200).json(result)
            } else {
                res.status(404).json({message: 'cant find the data'})
            }
        } catch(err) {
            res.status(500).json({message: err})
        }
    }


    static async deleteOne (req, res) {
        const SeriesId = req.params.id
        try {
            const result = await Series.deleteOne(SeriesId)
            if (result.deletedCount === 1) {
                res.status(200).json(result)
            } else {
                res.status(404).json({message: 'cant find the data'})
            }
        } catch(err) {
            res.status(500).json({message: err})
        }
    }
}


module.exports = SeriesController