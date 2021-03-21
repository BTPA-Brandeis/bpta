const models = require( '../models')

const getAllResources = async (request, response) => {
  const resources = await models.Resources.findAll()

  return response.send(resources)
}

module.exports = { getAllResources }