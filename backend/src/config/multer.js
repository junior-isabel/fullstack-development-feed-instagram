const path = require('path')
const multer = require('multer')

module.exports = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname,'..','..','uploads'))
        },
        filename: (req, file, cb) => {
            let extname = path.extname(file.originalname)
            cb(null, Date.now() + extname)
        }
    })
}