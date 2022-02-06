const Employee = require('../lib/Employee');

test('creates an Employee object', ()=>{
    const employee = new Employee('Jane');

    expect(employee.name).toBe('Jane');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});
test('gets employee name', ()=>{
    const employee = new Employee('Jane');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});
test('gets employee Id', ()=>{
    const employee = new Employee('Jane');

    expect(employee.getId()).toEqual(employee.id);
});
test('gets employee email', ()=>{
    const employee = new Employee('Jane');

    expect(employee.getEmail()).toEqual(employee.email);
})
test('gets employee role', ()=>{
    const employee = new Employee('Jane');

    expect(employee.getRole()).toBe('Employee');
});