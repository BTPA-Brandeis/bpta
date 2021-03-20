'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('users', [
      { userFirstName: '', userLastName: '', password: '', accessLevel: '', email: '', DOB: '', profileImage: '', securityQuestionOne: '', securityQuestionTwo: '', locationZone: '' },
    ]),

      await queryInterface.bulkInsert('fitness', [
        { userID: '', pushUps: '', sitUps: '', boxJumps: '', kilometersRan: '', waterIntakeOz: '' }
      ]),

      await queryInterface.bulkInsert('usersFitnessLinkings', [
        { userID: '', fitnessID: '' }
      ]),

      await queryInterface.bulkInsert('posts', [
        { accessLevelReq: '', body: '', userID: '' }
      ])

    return queryInterface.bulkInsert('resources', [
      { url: '', description: '', subject: '' }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.bulkDelete('resources')

    await queryInterface.bulkDelete('posts')

    await queryInterface.bulkDelete('usuersFitnessLinkings')

    await queryInterface.bulkDelete('fitness')

    return queryInterface.bulkDelete('users')
  }
};
