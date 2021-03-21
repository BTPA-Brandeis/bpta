const models = require( '../models')

const getAllPosts = async (request, response) => {
  const posts = await models.Posts.findAll()

  return response.send(posts)
}

module.exports = { getAllPosts }