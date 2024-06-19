import express from 'express';
import UserController from '../features/controller.js';

export const router=express.Router();
const userController=new UserController();
router.post('/doctors/login',userController.loginDoctor);
router.post('/doctors/register',userController.registerDoctor);
router.post('/patients/register',userController.registerPatient);
router.post('/patients/:id/create_report',userController.createReport);
router.get('/patients/:id/all_reports',userController.allReports);
router.get('/reports/:status',userController.checkByStatus);