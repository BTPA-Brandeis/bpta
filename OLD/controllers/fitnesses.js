import models from '../models'

export const getAllFitnesses = async (request, response) => {
  const fitnesses = await models.Fitnesses.findAll()

  return response.send(fitnesses)
}