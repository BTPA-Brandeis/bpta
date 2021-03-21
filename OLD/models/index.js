const Sequelize = require('sequelize')
const allConfig = require('../config/sequelize')
const UsersModel = require('./users')
const WorkoutsModel = require('./workouts')
const PostsModel = require('./posts')
const ResourcesModel = require('./resources')


const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfig[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Users = UsersModel(connection, Sequelize)
const Workouts = WorkoutsModel(connection, Sequelize)
const Posts = PostsModel(connection, Sequelize)
const Resources = ResourcesModel(connection, Sequelize)

module.exports = {
  Users,
  Op: Sequelize.Op,
  Workouts,
  Posts,
  Resources,
}
