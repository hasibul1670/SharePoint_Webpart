// IEmployeeFormProps.ts
export interface IEmployeeFormProps {
  description: string;
  fullName: string;
  department: string;
  salary: number;
  phoneNumber: string;
  address: string;
  status: string;
  onSave: (formData: IEmployeeFormData) => void;
}

export interface IEmployeeFormData {
  fullName: string;
  department: string;
  salary: number;
  phoneNumber: string;
  address: string;
  status: string;
}
