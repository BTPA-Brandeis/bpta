export default (connection, Sequelize, Users, Fitness) => connection.define('userFitnessLinkings', {
  userId: { type: Sequelize.INTEGER, references: { model: Users, key: 'id' } },
  fitnessId: { type: Sequelize.INTEGER, references: { model: Fitness, key: 'id' } },
})
