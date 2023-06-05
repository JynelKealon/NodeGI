// Imports the express modules and sets it to variables 
const express = require('express');
const app = express();
const employees = require('./employee.json');

//Grabbing the information that is held within the 'employee' JSON file
app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employees/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID);
  const employee = employees.employees.find(emp => emp.employeeID === employeeID);
  
//   If thwe employee information is found then their info will appear, if not an error message will appear
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found.' });
  }
});

// Shows what port the server is running on 
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
