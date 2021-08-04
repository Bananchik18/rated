const express = require('express');
const router = express.Router();

const schema_controller = require('../../controllers/crud/schema.controller');


router.get('/schema', (req, res)=>{
    schema_controller.get_schema(res)
});
router.post('/schema', schema_controller.create_schema);

router.put('/schema/:id',schema_controller.update_schema);

router.delete('/schema/:id',schema_controller.delete_schema);

module.exports = router;