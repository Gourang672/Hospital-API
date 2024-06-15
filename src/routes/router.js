import express from 'express';
import UserController from '../features/controller.js';
import Auth from'./middleware/auth.middleware.js';

export const router=express.Router();
const auth = new Auth()
const userController=new UserController();
router.post('/doctors/login',auth.verify, userController.loginDoctor);
router.post('/doctors/register',userController.registerDoctor);
router.post('/patients/register',auth.verify,userController.registerPatient);
router.post('/patients/:id/create_report',auth.verify,userController.createReport);
router.get('/patients/:id/all_reports',userController.allReports);
router.get('/reports/:status',userController.checkByStatus);