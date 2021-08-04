/*module.exports.id = 1;

module.exports.auth_get_user1 = (req, res) => {
    console.dir("FDS")
}*/
const CrudController = require('../../controllers/crud/crud.controller');
const express = require('express');
const router = express.Router();


router.get('/get/:table/', (req, res, next) => {
    CrudController.getValue(req, res, next);
})

router.get('/get/:table/:id', (req, res, next) => {
    CrudController.getValueById(req, res, next);
})

router.post('/create/:table/', (req, res, next) => {
    CrudController.createValue(req, res, next);
})

router.put('/update/:table/:id/', (req, res, next) => {
    CrudController.updateValue(req, res, next);
})

router.delete('/delete/:table/:id/', (req, res, next) => {
    CrudController.deleteValue(req, res, next);
})

module.exports = router;
