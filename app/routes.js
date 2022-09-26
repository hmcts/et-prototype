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
// ET3 round 1
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

    router.post('/claimant-employment-dates', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var employeeDates = req.session.data['claimant-employee-dates']

      // Check whether the variable matches a condition
      if (employeeDates == "No"){
        // Send user to Preferred contact name
        res.redirect('/et3-research/22-claimant-employment-dates')
      } else {
        // Enter new address
        res.redirect('/et3-research/23-employment-continuing')
      }
    })

    router.post('/claimant-pay-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var claimantPay = req.session.data['claimant-pay']

      // Check whether the variable matches a condition
      if (claimantPay == "No"){
        // Send user to Preferred contact name
        res.redirect('/et3-research/28-claimant-pay')
      } else {
        // Enter new address
        res.redirect('/et3-research/29-claimant-notice')
      }
    })

    router.post('/contesting-the-claim-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var contesting = req.session.data['contest']

      // Check whether the variable matches a condition
      if (contesting == "Yes"){
        // Send user to Preferred contact name
        res.redirect('/et3-research/33-contest-the-claim')
      } else {
        // Enter new address
        res.redirect('/et3-research/34-check-your-answers')
      }
    })

    router.post('/contract-claim-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var contractClaim = req.session.data['ECC']

      // Check whether the variable matches a condition
      if (contractClaim == "Yes"){
        // Send user to Preferred contact name
        res.redirect('/et3-research/36-contract-claim-details')
      } else {
        // Enter new address
        res.redirect('/et3-research/37-check-your-answers')
      }
    })

// ET3 round 2
    router.post('/2-respondent-address-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var respondentAddress = req.session.data['respondent-correct-address']

      // Check whether the variable matches a condition
      if (respondentAddress == "Yes"){
        // Send user to Preferred contact name
        res.redirect('/et3-research-2/09-contact-name')
      } else {
        // Enter new address
        res.redirect('/et3-research-2/06-new-respondent-address')
      }
    })

    router.post('/2-claimant-employment-dates', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var employeeDates = req.session.data['claimant-employee-dates']

      // Check whether the variable matches a condition
      if (employeeDates == "No"){
        // Send user to Preferred contact name
        res.redirect('/et3-research-2/22-claimant-employment-dates')
      } else {
        // Enter new address
        res.redirect('/et3-research-2/23-employment-continuing')
      }
    })

    router.post('/2-claimant-pay-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var claimantPay = req.session.data['claimant-pay']

      // Check whether the variable matches a condition
      if (claimantPay == "No"){
        // Send user to Preferred contact name
        res.redirect('/et3-research-2/28-claimant-pay')
      } else {
        // Enter new address
        res.redirect('/et3-research-2/29-claimant-notice')
      }
    })

    router.post('/2-contesting-the-claim-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var contesting = req.session.data['contest']

      // Check whether the variable matches a condition
      if (contesting == "Yes"){
        // Send user to Preferred contact name
        res.redirect('/et3-research-2/33-contest-the-claim')
      } else {
        // Enter new address
        res.redirect('/et3-research-2/34-check-your-answers')
      }
    })

    router.post('/2-contract-claim-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var contractClaim = req.session.data['ECC']

      // Check whether the variable matches a condition
      if (contractClaim == "Yes"){
        // Send user to Preferred contact name
        res.redirect('/et3-research-2/36-contract-claim-details')
      } else {
        // Enter new address
        res.redirect('/et3-research-2/37-check-your-answers')
      }
    })





module.exports = router
