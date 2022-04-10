const Employee = require('../lib/Employee')

test('collects employee data', () => {
    const employee = new Employee('kiks', '1', 'loco.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    
})