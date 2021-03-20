import Sequelize from 'sequelize'
import allConfig from '../config/sequelize'
/*import posts from './posts'
import Fitness from './fitness'
import resources from './resources'
import users from './users'
import userFitnessLinkings from './userFitnessLinkings' */

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfig[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

// const Users = UsersModel(connection, Sequelize)
/*const Fitness = FitnessModel(connection, Sequelize)
const Posts = PostsModel(connection, Sequelize)
const Resources = ResourcesModel(connection, Sequelize)
const UserFitnessLinkings = UserFitnessLinkingsModel(connection, Sequelize, Users, Fitness)*/

/*???.belongsTo()
???.hasMany()
???.belongsToMany(??, { through: ??Table })
????.belongsToMany(??, { through: ??table })
*/
export default {
  /*Users,
  Fitness,
  Posts,
  Resources,
  SequelizeOp,
  UserFitnessLinkings,*/
}
