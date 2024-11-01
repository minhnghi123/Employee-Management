const Employee = require("../models/employee.model");
module.exports.createUser = async (req, res) => {
  try {
    const dataInfo = req.body;
    const newEmployee = new Employee(dataInfo);
    await newEmployee.save();
    res.json({
      message: "Employee created successfully",
      Employee: newEmployee,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
module.exports.getUser = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json({
      code: 200,
      success: employees,
    });
  } catch (error) {
    res.json({ error: error });
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    const dataInfo = req.body;
    const id = req.params.id;
    await Employee.updateOne(
      {
        _id: id,
      },
      dataInfo
    );
    res.json({
      success: 200,
      message: "Employee updated successfully",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
module.exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await Employee.deleteOne({ _id: id });
    res.json({
      success: 200,
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
