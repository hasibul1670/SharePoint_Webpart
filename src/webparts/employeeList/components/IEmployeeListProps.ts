export interface IEmployeeListProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}
export interface IEmployee {
  department: string;
  phoneNumber: string;
  status: string;
  address: string;
  salary: string | number;
  fullName: string;
  id: string | number;
}
