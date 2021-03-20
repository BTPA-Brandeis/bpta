import Sequelize from 'sequelize'
import allConfigs from '../configs/sequelize'
import Fitness from './fitness'
import posts from './posts'
import resources from './resources'
import users from './users'
import userFitnessLinkings from './userFitnessLinkings'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

/*const Fitness = FitnessModel(connection, Sequelize)
const Posts = PostsModel(connection, Sequelize)
const Resources = ResourcesModel(connection, Sequelize)
const Users = UsersModel(connection, Sequelize)
const UserFitnessLinkings = UserFitnessLinkingsModel(connection, Sequelize, Users, Fitness)

/*Novels.belongsTo(Authors)
Authors.hasMany(Novels)
Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })
*/
export default {
  Fitness,
  Posts,
  Resources,
  Users,
  UserFitnessLinkings,
  SequelizeOp,
}
