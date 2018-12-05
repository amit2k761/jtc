const express = require('express');
const router = express.Router();


const { body } = require('express-validator/check');
const postController = require('../controllers/posts');



router.get('',postController.getPosts);

router.post('/createPost',postController.createPost);

router.post('/upVotePost',postController.upVotePost);

router.post('/downVotePost',postController.downVotePost);

module.exports = router;