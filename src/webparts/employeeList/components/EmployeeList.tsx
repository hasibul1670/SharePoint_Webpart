import * as React from "react";
import styles from "./EmployeeList.module.scss";
import type { IEmployeeListProps, IEmployee } from "./IEmployeeListProps";
import { escape } from "@microsoft/sp-lodash-subset";

interface IEmployeeListState {
  employees: IEmployee[];
}

export default class EmployeeList extends React.Component<
  IEmployeeListProps,
  IEmployeeListState
> {
  constructor(props: IEmployeeListProps) {
    super(props);

    // Initialize state with an empty array of employees
    this.state = {
      employees: [],
    };
  }

  // Lifecycle method to fetch data when the component mounts
  componentDidMount() {
    // In a real-world scenario, you would fetch the employee data here
    // and update the state with the fetched data
    // For simplicity, I'll use a dummy data in this example
    const dummyData: IEmployee[] = [
      {
        id: 1,
        fullName: "John Doe",
        department: "HR",
        salary: 50000,
        phoneNumber: "123-456-7890",
        address: "123 Main St",
        status: "Active",
      },
      {
        id: 2,
        fullName: "Jane Smith",
        department: "IT",
        salary: 60000,
        phoneNumber: "987-654-3210",
        address: "456 Oak St",
        status: "Inactive",
      },
      // Add more dummy data as needed
    ];

    this.setState({ employees: dummyData });
  }

  public render(): React.ReactElement<IEmployeeListProps> {
    const {
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    const { employees } = this.state;

    return (
      <section
        className={`${styles.employeeList} ${
          hasTeamsContext ? styles.teams : ""
        }`}
      >
        <div className={styles.welcome}>
          <h2>Employee List</h2>
        </div>


        <div>
          <ul>
            {employees.map((employee) => (
              <li key={employee.id}>
                <strong>{employee.fullName}</strong>
                <ul>
                  <li>
                    <strong>Department:</strong> {employee.department}
                  </li>
                  <li>
                    <strong>Salary:</strong> {employee.salary}
                  </li>
                  <li>
                    <strong>Phone Number:</strong> {employee.phoneNumber}
                  </li>
                  <li>
                    <strong>Address:</strong> {employee.address}
                  </li>
                  <li>
                    <strong>Status:</strong> {employee.status}
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        
      </section>
    );
  }
}
