const Post = require('../models/posts');

exports.getPost = (req, res, next) => {
    return new Promise((resolve, reject) => {
        Post.find()
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err)
            })
    })
}

exports.createPost = (req, res, next) => {
    let postData = req.body.post
    return new Promise((resolve, reject) => {
        const post = new Post({
            post: postData.trim()
        });
        post.save()
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            })
    })
}

exports.upVotePost = (req, res, next) => {
    return new Promise((resolve, reject) => {
        let postId = req.body.postId;
        Post.findByIdAndUpdate(postId, { $inc: { likes: 1 } }, { new: true })
            .then(result => {
                if (!result) {
                    const error = new Error('Post not found');
                    error.statusCode = 404;
                    throw error;
                }
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })
}
