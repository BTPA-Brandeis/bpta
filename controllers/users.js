import models from '../models'

export const getAllUsers = async (request, response) => {
  const users = await models.Users.findAll()

  return response.send(users)
}

export const getUserByLastName = async (request, response) => {
  const { userLastName } = request.params

  const user = await models.Users.findOne({
    where: { userLastName },
  })

  return response.send(user)
}
