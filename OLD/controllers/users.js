import models from '../models'

export const getAllUsers = async (request, response) => {
  const users = await models.Users.findAll()

  return response.send(users)
}
