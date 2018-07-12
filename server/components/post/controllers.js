import loki from 'lokijs'

const lokidb = new loki('db.json')
const posts = lokidb.addCollection('posts')

const getPosts = async (req, res, next) => {
  res.end(JSON.stringify(posts.find({})))
}

const createPost = async (req, res) => {
  const { title } = req.body
  posts.insert({ title: title, upvote: 0, downvote: 0 })

  return res.status(200).json(posts.data)
}

const postUpVote = async (req, res) => {
  const postToUpVote = posts.find({})
  postToUpVote[req.params.key].upvote += 1
  posts.update(postToUpVote[req.params.key])

  return res.status(200).json(posts.data)
}

const postDownVote = async (req, res) => {
  const postToDownVote = posts.find({})
  postToDownVote[req.params.key].downvote += 1
  posts.update(postToDownVote[req.params.key])

  return res.status(200).json(posts.data)
}

export { getPosts, createPost, postUpVote, postDownVote }
