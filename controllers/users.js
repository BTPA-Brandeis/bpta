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

export const saveNewUser = async (request, response) => {
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
