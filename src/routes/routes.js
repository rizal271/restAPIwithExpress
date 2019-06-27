const express = require('express')
const Route = express.Router()

const categoryController = require('../controllers/category_controllers')

Route
  .get('/', categoryController.getCategory)
  .post(`/`, categoryController.insertCategory)
  .patch(`/:id_category`, categoryController.updateCategory)
  .delete(`/:id_category`, categoryController.deleteCategory)
 


module.exports = Route
