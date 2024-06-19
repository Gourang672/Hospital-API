import Doctor from "./doctor.schema.js"; // Importing Doctor schema
import Patient from "./patient.schema.js"; // Importing Patient schema


export default class UserController {
  // Login doctor function
  loginDoctor = async (req, res) => {
    try {
      // Finding doctor with the provided credentials
      const user = await Doctor.find(req.body);
      if (user) {
      
      // Sending success response
      return res.status(200).json({
        success: true,
        message: "Successfully logged in: doctor",
        token,
        data: doctor
      });
    } else {
      // Sending error response if doctor not found
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }} catch (err) {
      // Handling errors
      console.log("Error for creating doctor: " + err.message);
      res.status(400).json({
        success: false,
        message: "Error in login"
      });
    }
  }

  // Register doctor function
  registerDoctor = async (req, res) => {
    try {
      // Creating a new doctor record
      const doctor = await Doctor.create(req.body);
      // Sending success response
      return res.status(200).json({
        success: true,
        message: "Successfully registered: doctor",
        data: doctor
      });
    } catch (err) {
      // Handling errors
      console.log("Error for creating doctor: " + err.message);
      res.status(400).json({
        success: false,
        message: "Not registered"
      });
    }
  }

  // Register patient function
  registerPatient = async (req, res) => {
    try {
      // Assigning default doctor ID and current date
      req.body.doctor = "666d167aa1ec6f55e1726db9";
      req.body.date = Date.now();
      // Creating a new patient record
      const patient = await Patient.create(req.body);
      // Sending success response
      return res.status(200).json({
        success: true,
        message: "Successfully registered: patient",
        data: patient
      });
    } catch (err) {
      // Handling errors
      console.log("Error for creating patient: " + err.message);
      res.status(400).json({
        success: false,
        message: "Not registered"
      });
    }
  }

  // Create report for patient function
  createReport = async (req, res) => {
    try {
      // Finding the patient by ID
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        // Sending error response if patient not found
        return res.status(404).json({
          success: false,
          message: "Patient not found"
        });
      }
      // Adding current date to report and pushing report to patient's reports array
      req.body.date = Date.now();
      patient.reports.push(req.body); 
      await patient.save(); 
      // Sending success response
      return res.status(200).json({
        success: true,
        message: "Report created successfully",
        data: patient
      });
    } catch (err) {
      // Handling errors
      console.log("Error for creating report: " + err.message);
      res.status(400).json({
        success: false,
        message: "Error in making report"
      });
    }
  }

  // Get all reports of a patient function
  allReports = async (req, res) => {
    try {
      // Finding patient by ID
      const patient = await Patient.findById(req.params.id);
      // Sending success response with patient's reports
      return res.status(200).json({
        success: true,
        message: "fetched all reports",
        data: patient.reports
      });
    } catch (err) {
      // Handling errors
      console.log("Error for getting reports: " + err.message);
      res.status(400).json({
        success: false,
        message: "Cannot get"
      });
    }
  }

  // Check patients by report status function
  checkByStatus = async (req, res) => {
    try {
      // Finding patients with reports that have the specified status
      const patient = await Patient.find({
        reports: {
          $elemMatch: {
            status: req.params.status
          }
        }
      });
      // Sending success response with patients data
      return res.status(200).json({
        success: true,
        message: "fetched all patient",
        data: patient
      });
    } catch (err) {
      // Handling errors
      console.log("Error for checking by status: " + err.message);
      res.status(400).json({
        success: false,
        message: "Cannot get"
      });
    }
  }
}
