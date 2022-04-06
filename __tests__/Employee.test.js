const Employee = require('../lib/Employee')

test('chooses engineer or intern', () => {
    const employee = new Employee('kiks')

    expect(employee.name).toBe('kiks');
    expect(employee.role).toHaveProperty('Engineer');
    expect(employee.role).toHaveProperty('Intern');
})