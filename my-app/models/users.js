export default (connection, Sequelize) => connection.define('users', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  userFirstName: { type: Sequelize.STRING, allowNull: false },
  userLastName: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  accessLevel: { type: Sequelize.INTEGER, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  DOB: { type: Sequelize.STRING, allowNull: false },
  profileImage: { type: Sequelize.STRING, allowNull: false },
  securityQuestionOne: { type: Sequelize.STRING, allowNull: false },
  securityQuestionTwo: { type: Sequelize.STRING, allowNull: false },
  locationZone: { type: Sequelize.INTEGER, allowNull: false },
})