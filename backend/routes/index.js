const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts');


router.get('', postController.getPosts);

router.post('/createPost', postController.createPost);

router.post('/upVotePost', postController.upVotePost);

module.exports = router;