/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropdown, PrimaryButton, TextField } from "@fluentui/react";
import * as React from "react";
import { useState } from "react";

import {
  IEmployeeFormData,
  IEmployeeFormProps,
} from "../EmployeeTypes/EmployeeFormTypes";

export const EmployeeForm: React.FC<IEmployeeFormProps> = (props) => {
  const [formData, setFormData] = useState<IEmployeeFormData>({
    fullName: "",
    department: "",
    salary: 0,
    phoneNumber: "",
    address: "",
    status: "",
  });

  const handleSaveClick = () => {
    props.onSave(formData);
  };

  const handleInputChange = (
    fieldName: keyof IEmployeeFormData,
    value: string | number | undefined
  ) => {
    // Ensure that value is never undefined
    const sanitizedValue = value === undefined ? "" : value;

    setFormData({
      ...formData,
      [fieldName]: sanitizedValue,
    });
  };

  return (
    <div className="form-container">
      <TextField
        label="Full Name"
        value={formData.fullName}
        onChange={(e, newValue) => handleInputChange("fullName", newValue)}
        className="form-input"
      />
      <TextField
        label="Department"
        value={formData.department}
        onChange={(e, newValue) => handleInputChange("department", newValue)}
        className="form-input"
      />
      <TextField
        label="Salary"
        type="number"
        value={formData.salary.toString()}
        onChange={(e, newValue: any) =>
          handleInputChange("salary", parseInt(newValue))
        }
        className="form-input"
      />
      <TextField
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={(e, newValue) => handleInputChange("phoneNumber", newValue)}
        className="form-input"
      />
      <TextField
        label="Address"
        value={formData.address}
        onChange={(e, newValue) => handleInputChange("address", newValue)}
        className="form-input"
      />
      <Dropdown
        label="Status"
        selectedKey={formData.status}
        options={[
          { key: "active", text: "Active" },
          { key: "inactive", text: "Inactive" },
        ]}
        onChange={(e, option) =>
          handleInputChange("status", option!.key as string)
        }
        className="form-input"
      />
      <PrimaryButton
        text="Save"
        onClick={handleSaveClick}
        className="form-button"
        style={{ padding: "10px" }}
      />
    </div>
  );
};
