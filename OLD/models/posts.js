export default (connection, Sequelize) => connection.define('posts', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  accessLevelReq: { type: Sequelize.INTEGER, allowNull: false },
  body: { type: Sequelize.INTEGER, allowNull: false },
  userID: { type: Sequelize.INTEGER, allowNull: false },
})
