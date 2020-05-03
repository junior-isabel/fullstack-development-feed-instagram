const { Sequelize } = require('sequelize')
const databaseConfig = require('../config/database')
const sequelize = new Sequelize(databaseConfig)

const PostModel = require('../models/PostModel')

PostModel.init(sequelize)
