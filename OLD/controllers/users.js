const models = require( '../models')

const getAllUsers = async (request, response) => {
  const users = await models.Users.findAll()

  return response.send(users)
}

const getUserByLastName = async (request, response) => {
  const { userLastName } = request.params

  const user = await models.Users.findOne({
    where: { userLastName },
  })

  return response.send(user)
}

const saveNewUser = async (request, response) => {
  try {
    const { userFirstName, userLastName, password, accessLevel, email, DOB, profileImage, securityQuestionOne, securityQuestionTwo, locationZone } = request.body

    if (!userFirstName || !userLastName || !password || !accessLevel || !email || !DOB || !profileImage || !securityQuestionOne || !securityQuestionTwo || !locationZone) {
      return response
        .status(400)
        .send('The following fields are required: userFirstName, userLastName, password, accessLevel, email, DOB, profileImage, securityQuestionOne, securityQuestionTwo, locationZone')
    }

    const newUser = await models.Users.create({ userFirstName, userLastName, password, accessLevel, email, DOB, profileImage, securityQuestionOne, securityQuestionTwo, locationZone })

    return response.status(201).send(newUser)
  } catch (error) {
    return response.status(500).send('Unable to save new user, please try again')
  }
}

const deleteUser = async (request, response) => {
  try {
    const { ID } = request.params
    const user = await models.Users.findOne({ where: { ID } })
    await models.Users.destroy({ where: { ID } })
    return response.sendStatus(204)
  } catch (error) {
    return response.status(500).send('Unable to delete user, please try again')
  }
}

const updateUser = async (request, response) => {
  try {
    const { ID } = request.params
    const {
      userFirstName, userLastName, password, accessLevel, 
      email, DOB, profileImage, securityQuestionOne, securityQuestionTwo, locationZone
    } = request.body
    const user = await models.Users.findOne({ where: { ID } })
    if (!user) return response.status(404).send(`Can't find user with id: ${ID}`)
    await models.Users.update({
      userFirstName, userLastName, password, accessLevel,
      email, DOB, profileImage, securityQuestionOne, securityQuestionTwo, locationZone
    }, {
      where: { ID },
    })
    return response.send(`Successfully updated the user: ${ID}.`)
  } catch (error) {
    return response.status(500).send('Unknown error while updating user, please try again')
  }
}

module.exports = {
  getAllUsers,
  getUserByLastName,
  saveNewUser,
  deleteUser,
  updateUser
}