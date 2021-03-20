export default (connection, Sequelize) => connection.define('fitness', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  userID: { type: Sequelize.INTEGER, allowNull: false },
  pushUps: { type: Sequelize.INTEGER, allowNull: false },
  sitUps: { type: Sequelize.INTEGER, allowNull: false },
  boxJumps: { type: Sequelize.INTEGER, allowNull: false },
  kilometersRan: { type: Sequelize.INTEGER, allowNull: false },
  waterIntakeOz: { type: Sequelize.INTEGER, allowNull: false },
})
