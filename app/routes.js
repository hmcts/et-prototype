const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// router.post('/which-part', function (req, res) {
//   req.session.data['working'] = 'yes';
//     res.redirect('/vary-an-order/2-which-part')
// })

router.post('/which-part-answer', function (req, res) {
  res.redirect('/vary-an-order/2-which-part')
})

module.exports = router
