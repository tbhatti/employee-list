import React from 'react'
import EmployeesData from '../mock-data/employees.json'

class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
			employeesList: EmployeesData.employees
		}
	}

	renderEmployeeNames () {
		return (
			<div className="container-main-employees">
				{ this.state.employeesList.map(function(employee, index) {
					return <div className="container-employee" key={index} >
						<label className="employee-name" onClick={() => this.toggleEmployeeBio(employee, index)}>{employee.name}</label>
						{employee.opened ?
							<label className="employee-bio" onClick={() => alert("Name:"+employee.name + " \nBio: " + employee.bio)}>{employee.bio}</label>
						: null}
					</div>
				}, this)}
			</div>
		)
	}

	/** click Handler for Employee Name Label*/

	toggleEmployeeBio (employee, index) {
		this.collapseAllBios(index)
		const employees = this.state.employeesList
		employee.opened = !employee.opened
		this.updatePageState(employees)
	}

	/** Change all 'employee.opened = false', else clicked one */

	collapseAllBios (currentIndex) {
	const employees = this.state.employeesList
		employees.forEach((employee, index) => {
			if (currentIndex !== index) {
				employees[index].opened = false
			}
		}, this)
		this.updatePageState(employees)
	}

	/** Update page state */

	updatePageState (employees) {
		this.setState({employees})
	}

	render () {
		return (
			<div>
				{this.state.employeesList.length > 0 ? this.renderEmployeeNames() : null}
			</div>
		)
	}
}

export default Employee
