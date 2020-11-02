let postsModel = require('../Model/postsModel')

module.exports = {
    posts(req, res) {

        postsModel.posts((err, data) => {

        })
    }
}