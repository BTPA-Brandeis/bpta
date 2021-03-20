import models from '../models'

export const getAllFitnesses = async (request, response) => {
  const fitnesses = await models.Fitnesses.findAll()

  return response.send(fitnesses)
}

export const saveNewFitnesses = async (request, response) => {
  try {
    const { userID, pushUps, sitUps, boxJumps, kilometersRan, waterIntakeOz } = request.body

    if (!userID || !pushUps || !sitUps || !boxJumps || !kilometersRan || !waterIntakeOz) {
      return response
        .status(400)
        .send('The following fields are required: userID, pushUps, sitUps, boxJumps, kilometersRan, waterIntakeOz')
    }

    const newFitnesses = await models.Fitnesses.create({ userID, pushUps, sitUps, boxJumps, kilometersRan, waterIntakeOz })

    return response.status(201).send(newFitnesses)
  } catch (error) {
    return response.status(500).send('Unable to save new fitnesses, please try again')
  }
}

