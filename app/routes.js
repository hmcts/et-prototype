const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// router.post('/which-part', function (req, res) {
//   req.session.data['working'] = 'yes';
//     res.redirect('/vary-an-order/2-which-part')
// })

router.post('/which-order-answer', function (req, res) {
  res.redirect('/vary-an-order/2-which-part')
})

router.post('/which-part-answer', function (req, res) {
  res.redirect('/vary-an-order/3-how')
})

router.post('/how-answer', function (req, res) {
  res.redirect('/vary-an-order/4-why')
})

router.post('/why-answer', function (req, res) {
  res.redirect('/vary-an-order/5-supporting-materials')
})

router.post('/why-answer', function (req, res) {
  res.redirect('/vary-an-order/5-supporting-materials')
})

router.post('/supporting-materials-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var supportingMaterials = req.session.data['supporting-materials']

  // Check whether the variable matches a condition
  if (supportingMaterials == "Yes"){
    // Send user to Upload
    res.redirect('/vary-an-order/6-upload-documents')
  } else {
    // Send user to R92
    res.redirect('/vary-an-order/7-Rule92')
  }
})

router.post('/submitted-rule92', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var rule92 = req.session.data['rule-92']

    // Check whether the variable matches a condition
    if (rule92 == "yes"){
      // Send user to rule92-yes-submitted
      res.redirect('/vary-an-order/8-rule92-yes-submitted')
    } else {
      // // Send user to rule92-no-submitted
      res.redirect('/vary-an-order/9-rule92-no-submitted')
    }
  })

// router.post('/upload-documents-done', function (req, res) {
//     res.redirect('/vary-an-order/7-Rule92')
//   }

router.post('/restrict-supporting-materials-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var supportingMaterials = req.session.data['supporting-materials']

  // Check whether the variable matches a condition
  if (supportingMaterials == "Yes"){
    // Send user to Upload
    res.redirect('/research-22Aug/restrict-5-upload-documents')
  } else {
    // Send user to R92
    res.redirect('/research-22Aug/restrict-6-Rule92')
  }
})

router.post('/restrict-submitted-rule92', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var rule92 = req.session.data['rule-92']

    // Check whether the variable matches a condition
    if (rule92 == "yes"){
      // Send user to rule92-yes-submitted
      res.redirect('/research-22Aug/restrict-8-rule92-yes-submitted')
    } else {
      // // Send user to rule92-no-submitted
      res.redirect('/research-22Aug/restrict-9-rule92-no-submitted')
    }
  })

  router.post('/witness-documents-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var documents = req.session.data['witness-documents']

      // Check whether the variable matches a condition
      if (documents == "Yes"){
        // Send user to the second document question
        res.redirect('/research-22Aug/witness-7-copies')
      } else {
        // // Send user to next question instead
        res.redirect('/research-22Aug/witness-9-supporting-materials')
      }
    })

    router.post('/witness-supporting-materials-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var supportingMaterials = req.session.data['supporting-materials']

      // Check whether the variable matches a condition
      if (supportingMaterials == "Yes"){
        // Send user to Upload
        res.redirect('/research-22Aug/witness-10-upload-documents')
      } else {
        // Send user to R92
        res.redirect('/research-22Aug/witness-11-check-your-answers')
      }
    })

    router.post('/respondent-address-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var respondentAddress = req.session.data['respondent-correct-address']

      // Check whether the variable matches a condition
      if (respondentAddress == "Yes"){
        // Send user to Preferred contact name
        res.redirect('/et3-research/09-contact-name')
      } else {
        // Enter new address
        res.redirect('/et3-research/06-new-respondent-address')
      }
    })


module.exports = router
