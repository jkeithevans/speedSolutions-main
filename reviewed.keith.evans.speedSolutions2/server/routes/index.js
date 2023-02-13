const express = require('express');
const mongoController = require('../controllers/mongoController');

const router = express.Router();

// need to break routes into user routes, part routes, email routes so add 2 more routes pages

router.route('/createNewUser').post(mongoController.createNewUser);
// router.route('/login/:user').get(mongoController.getUser)
router.route('/login').post(mongoController.loginUser);
router.route('/addNewPart/:userId').post(mongoController.addPart);
router.route('/allParts').get(mongoController.allParts);
router.route('/parts/:categoryName').get(mongoController.findByCategory);
router.route('/viewPart/:id').get(mongoController.viewPart);
router.route('/sendEmailToSeller/:id').post(mongoController.attachEmail);
router.route('/email/:id').get(mongoController.removeViewedEmail);
// router.route('/email/:id').get(mongoController.removeViewedEmail)

// router.route('/list/:itemId')
//   .get(mongoController.getListItem)
//   .delete(mongoController.deleteItem)

module.exports = router;
