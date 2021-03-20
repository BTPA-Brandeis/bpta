export default (connection, Sequelize, Users, Fitnesses) => connection.define('userFitnessesLinkings', {
  userId: { type: Sequelize.INTEGER, references: { model: Users, key: 'id' } },
  fitnessesId: { type: Sequelize.INTEGER, references: { model: Fitnesses, key: 'id' } },
})
