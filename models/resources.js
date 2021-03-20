export default (connection, Sequelize) => connection.define('resources', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  url: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  subject: { type: Sequelize.STRING, allowNull: false },
  phoneNo: { type: Sequelize.STRING },
})
