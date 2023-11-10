import express from "express";
const router = express.Router();
import { isAdmin, requireSigning } from '../middleware/authMiddleware.js'
import {
    allCategory,
    createCategory,
    deleteCategoryController,
    singleCategoryController,
    updateCategory
} from "../controller/categoryController.js";


//create category
router.post('/create-category', requireSigning, isAdmin, createCategory)
router.get('/all-category', allCategory)
router.put('/update-category/:id', requireSigning, isAdmin, updateCategory)
router.get('/single-category/:slug', singleCategoryController);
router.delete('/delete-category/:id', requireSigning, isAdmin, deleteCategoryController)

export default router;