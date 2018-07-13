import loki from 'lokijs'

const lokidb = new loki('db.json')
const posts = lokidb.addCollection('posts')

const getPosts = async (req, res, next) => {
  res.end(JSON.stringify(posts.find({})))
}

const createPost = async (req, res) => {
  const { title } = req.body
  const guid = s4().toUpperCase()

  posts.insert({ title: title, upvote: 0, downvote: 0, guid })

  return res.status(200).json(posts.data)
}

const postUpVote = async (req, res) => {
  const postToUpVote = posts.find({'guid': req.params.guid})
  postToUpVote[0].upvote += 1
  posts.update(postToUpVote)

  return res.status(200).json(posts.data)
}

const postDownVote = async (req, res) => {
  const postToDownVote = posts.find({'guid': req.params.guid})
  postToDownVote[0].downvote += 1
  posts.update(postToDownVote)

  return res.status(200).json(posts.data)
}

function s4 () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

export { getPosts, createPost, postUpVote, postDownVote }
