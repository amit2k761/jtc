const postService = require('../services/postServices');

exports.getPosts = (req, res, next) => {
    postService.getPost(req)
        .then(result => {
            res.json({
                status: 200,
                message: 'success',
                data: result
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}

exports.createPost = (req, res, next) => {
    postService.createPost(req)
        .then(result => {
            res.json({
                status: 201,
                message: 'success',
                data: result
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}


exports.upVotePost = (req, res, next) => {
    postService.upVotePost(req)
        .then(result => {
            res.json({
                status: 201,
                message: 'success',
                data: result
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}
