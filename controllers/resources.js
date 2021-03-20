import models from '../models'

export const getAllResources = async (request, response) => {
  const resources = await models.Resources.findAll()

  return response.send(resources)
}