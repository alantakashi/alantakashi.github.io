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

  console.log('postToUpVote', postToUpVote[req.params.key])
  // console.log('post', post[req.params.key])

  return res.status(200).json({message: 'done'})
}

export { getPosts, createPost, postUpVote }
