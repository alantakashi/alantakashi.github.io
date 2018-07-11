import loki from 'lokijs'

const lokidb = new loki('db.json')
const posts = lokidb.addCollection('posts')

const getPosts = async (req, res, next) => {
  console.log(posts.find({}))
  res.end(JSON.stringify(posts.find({})))
  // return res.status(200).json(posts.find({}))
}

const createPost = async (req, res) => {
  const { title } = req.body
  posts.insert({ title: title, upvote: 0, downvote: 0 })

  return res.status(200).json(posts.data)
}

export { getPosts, createPost }
