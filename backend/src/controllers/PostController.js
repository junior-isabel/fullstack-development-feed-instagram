const sharp = require('sharp')
const path = require('path')
const fs = require('fs')
const PostModel = require('../models/PostModel')
module.exports = {
  async Index(req, res) {
    const posts = await PostModel.findAll({order: [['updatedAt', 'DESC']]})
    res.json(posts)
  },
  async Create (req, res) {
    const { author, description, place, hashtags } = req.body
    const { filename: image } = req.file
    console.log(req.body)
    await sharp(req.file.path)
    .resize(1200)
    .jpeg({ quality: 80 })
    .toFile(path.resolve(req.file.destination, 'resized', image.split('.')[0]+'@3x.jpeg'))
    
    await sharp(req.file.path)
    .resize(500)
    .jpeg({ quality: 70 })
    .toFile(path.resolve(req.file.destination, 'resized', image.split('.')[0]+'@2x.jpeg'))
    
    await sharp(req.file.path)
    .resize(80)
    .jpeg({ quality: 70, chromaSubsampling: '4:4:4' })
    .toFile(path.resolve(req.file.destination, 'resized', image.split('.')[0]+'@1x.jpeg'))

    fs.unlinkSync(req.file.path)
    const post = await PostModel.create({author, description, place, hashtags, image: image.split('.')[0]+'.jpeg'})
    post.urlImage = `/files/${image}`
    res.json(post)
    req.io.emit('post', post)
  }
}