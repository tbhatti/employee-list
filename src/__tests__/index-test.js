import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Employees from '../employees/index'


describe('Test divs inside application', function() {
  const wrapper = shallow(< Employees />)
  const instance = wrapper.instance()


  it('Page rendered successfully', function() {
    expect(wrapper.find('.container-main-employees').length).toBe(1)
    expect(wrapper.find('.container-employee').length).toBe(3)
  })


  it('Should hide all bios, except of employeesList[1]', () => {
    instance.toggleEmployeeBio(instance.state.employeesList[1], 1)
    expect(instance.state.employeesList[0].opened).toBe(false)
    expect(instance.state.employeesList[1].opened).toBe(true)
    expect(instance.state.employeesList[2].opened).toBe(false)
  })

  it('Should have 3 employees', () => {
    expect(instance.state.employeesList.length).toBe(3)
  })

  it('Shouldhide all bios except Employee[2]', () => {
    instance.collapseAllBios(2)
  })
})
