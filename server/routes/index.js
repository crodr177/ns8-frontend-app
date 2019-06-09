var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/photos', (req, res, next) => {
  axios.get('https://jsonplaceholder.typicode.com/photos/1').then(resp => {
    res.json(resp.data)
  })
})

router.get('/users', (req, res, next) => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
    res.json(resp.data)
  })
})

router.get('/post', (req, res, next) => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1').then(resp => {
    res.json(resp.data)
  })
})

router.get('/comments', (req, res, next) => {
  axios.get('https://jsonplaceholder.typicode.com/comments?postId=1').then(resp => {
    res.json(resp.data)
  })
})

module.exports = router;
