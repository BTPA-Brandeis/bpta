module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      userFirstName: { type: Sequelize.STRING, allowNull: false },
      userLastName: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING, allowNull: false },
      accessLevel: { type: Sequelize.INTEGER, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false },
      DOB: { type: Sequelize.STRING, allowNull: false },
      profileImage: { type: Sequelize.STRING, allowNull: false },
      securityQuestionOne: { type: Sequelize.STRING, allowNull: false },
      securityQuestionTwo: { type: Sequelize.STRING, allowNull: false },
      locationZone: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('fitnesses', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      userID: { type: Sequelize.INTEGER, allowNull: false },
      pushUps: { type: Sequelize.INTEGER, allowNull: false },
      sitUps: { type: Sequelize.INTEGER, allowNull: false },
      boxJumps: { type: Sequelize.INTEGER, allowNull: false },
      kilometersRan: { type: Sequelize.INTEGER, allowNull: false },
      waterIntakeOz: { type: Sequelize.INTEGER, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('usersFitnessesLinkings', {
      userID: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' } },
      fitnessesID: { type: Sequelize.INTEGER, references: { model: 'fitnesses', key: 'id' } },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })
    await queryInterface.createTable('posts', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      accessLevelReq: { type: Sequelize.INTEGER, allowNull: false },
      body: { type: Sequelize.STRING, allowNull: false },
      userID: { type: Sequelize.INTEGER, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })
    return queryInterface.createTable('resources', {
      ID: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      url: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.STRING, allowNull: false },
      subject: { type: Sequelize.STRING, allowNull: false },
      phoneNo: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('resources')
    await queryInterface.dropTable('posts')
    await queryInterface.dropTable('userFitnessesLinkings')
    await queryInterface.dropTable('fitnesses')
    return queryInterface.dropTable('users')
  },
}


