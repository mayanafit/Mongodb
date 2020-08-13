const db = require(`../config`);
const Series = db.collection(`series`);
const { ObjectID } = require('mongodb');

class SeriesModel {

    static findAll() {
        return Series.find().toArray();
    }

    static findOne (id) {
        return Series.findOne({ _id: ObjectID(id) })
    }

    static insertOne(newSeries) {
        return Series.insertOne(newSeries)
    }

    static updateOne(id, updateSeries) {
        return Series.updateOne({ _id: ObjectID(id) }, {$set: updateSeries})
    }

    static deleteOne(id) {
        return Series.deleteOne({ _id: ObjectID(id) })
    }
}

module.exports = SeriesModel