const models = require( '../models')

const getAllWorkouts = async (request, response) => {
  const workouts = await models.Workouts.findAll()

  return response.send(workouts)
}

const saveNewWorkouts = async (request, response) => {
  try {
    const { userID, pushUps, sitUps, boxJumps, kilometersRan, waterIntakeOz } = request.body

    if (!userID || !pushUps || !sitUps || !boxJumps || !kilometersRan || !waterIntakeOz) {
      return response
        .status(400)
        .send('The following fields are required: userID, pushUps, sitUps, boxJumps, kilometersRan, waterIntakeOz')
    }

    const newWorkouts = await models.Workouts.create({ userID, pushUps, sitUps, boxJumps, kilometersRan, waterIntakeOz })

    return response.status(201).send(newWorkouts)
  } catch (error) {
    return response.status(500).send('Unable to save new workouts, please try again')
  }
}

module.exports = { getAllWorkouts, saveNewWorkouts}

