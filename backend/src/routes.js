const multer = require('multer')
const routes = require('express').Router()

const postController = require('./controllers/PostController')
const likeController = require('./controllers/LikeController')
const multerConfig = require('./config/multer')
const uploads = multer(multerConfig)
routes.get('/', (req, res) => {
    
    res.send('<h1>hello app</h1>')
})

routes.get('/posts', postController.Index)
routes.post('/posts', uploads.single('image'), postController.Create)
routes.post('/posts/:idPost/likes', likeController.Store)

module.exports = routes