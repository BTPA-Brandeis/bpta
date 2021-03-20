import models from '../models'

export const getAllUsers = async (request, response) => {
  const users = await models.Users.findAll()

  return response.send(users)
}

export const getUserByUserLastName = async (request, response) => {
  const { userLastName } = request.params

  const user = await models.Users.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: userLastName },
        { userLastName: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ],
    },
    include: [{
      model: models.Fitness,
      include: [{ model: models.Posts }],
    }],
  })
  return user
    ? response.send(user)
    : response.sendStatus(404)
}
