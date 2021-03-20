module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('users', [
      { userFirstName: 'Carrye', userLastName: 'Gaulin', password: 'fucker', accessLevel: 1, email: 'carryegaulin111@gmail.com', DOB: '03/31/1978', profileImage: 'me.jpg', securityQuestionOne: 'work dammit', securityQuestionTwo: 'for real', locationZone: '7' },
    ]),

      await queryInterface.bulkInsert('workouts', [
        { userID: 1, pushUps: 0, sitUps: 0, boxJumps: 0, kilometersRan: 0, waterIntakeOz: 0 }
      ]),

      await queryInterface.bulkInsert('usersWorkoutsLinkings', [
        { userID: 1, WorkoutsID: 1 }
      ]),

      await queryInterface.bulkInsert('posts', [
        { accessLevelReq: 1, body: '', userID: 1 }
      ])

    return queryInterface.bulkInsert('resources', [
      { url: '', description: '', subject: '', phoneNo: '' }
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

    await queryInterface.bulkDelete('usuersWorkoutsLinkings')

    await queryInterface.bulkDelete('Workouts')

    return queryInterface.bulkDelete('users')
  }
};
