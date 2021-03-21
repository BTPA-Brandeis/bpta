const userWorkoutLinkings = (connection, Sequelize, Users, Workouts) => connection.define('userWorkoutsLinkings', {
  userId: { type: Sequelize.INTEGER, references: { model: Users, key: 'id' } },
  workoutsId: { type: Sequelize.INTEGER, references: { model: Workouts, key: 'id' } },
})

module.exports = userWorkoutLinkings
