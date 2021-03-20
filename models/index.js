import Sequelize from 'sequelize'
import allConfig from '../config/sequelize'
import UsersModel from './users'
import FitnessesModel from './fitnesses'
import PostsModel from './posts'
import ResourcesModel from './resources'
// import userFitnessesLinkingsModel from './userFitnessesLinkings'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfig[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Users = UsersModel(connection, Sequelize)
const Fitnesses = FitnessesModel(connection, Sequelize)
const Posts = PostsModel(connection, Sequelize)
const Resources = ResourcesModel(connection, Sequelize)
// const UserFitnessesLinkings = UserFitnessesLinkingsModel(connection, Sequelize, Users, Fitnesses)*/

/*???.belongsTo()
???.hasMany()
???.belongsToMany(??, { through: ??Table })
????.belongsToMany(??, { through: ??table })
*/
export default {
  Users,
  Op: Sequelize.Op,
  Fitnesses,
  Posts,
  Resources,
  //UserFitnessesLinkings,
}
