const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    fathername: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);
const Employee = mongoose.model("Employee", employeeSchema, "employee");
module.exports = Employee;
