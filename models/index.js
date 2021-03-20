import Sequelize from 'sequelize'
import allConfig from '../config/sequelize'
import UsersModel from './users'
import WorkoutsModel from './workouts'
import PostsModel from './posts'
import ResourcesModel from './resources'


const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfig[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Users = UsersModel(connection, Sequelize)
const Workouts = WorkoutsModel(connection, Sequelize)
const Posts = PostsModel(connection, Sequelize)
const Resources = ResourcesModel(connection, Sequelize)

export default {
  Users,
  Op: Sequelize.Op,
  Workouts,
  Posts,
  Resources,
}
