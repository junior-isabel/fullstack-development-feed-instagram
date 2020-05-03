
const PostModel = require('../models/PostModel')

module.exports = {
  async Store(req, res) {
    const { idPost } = req.params
    const post = await PostModel.findByPk(idPost)
    if (post) {
      post.like += 1
      post.save()

    }
    res.json(post)
    req.io.emit('like', post)
  }
}