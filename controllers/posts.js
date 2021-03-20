import models from '../models'

export const getAllPosts = async (request, response) => {
  const posts = await models.Posts.findAll()

  return response.send(posts)
}