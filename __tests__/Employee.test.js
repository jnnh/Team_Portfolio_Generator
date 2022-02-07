const Employee = require('../lib/Employee');

test('creates an Employee object', ()=>{
    const employee = new Employee('Jane', 123, 'jane@gmail.com');

    expect(employee.name).toBe('Jane');
    expect(employee.id).toBe(123);
    expect(employee.email).toBe('jane@gmail.com');
    expect(employee.role).toBe('Employee');
});
test('gets employee name', ()=>{
    const employee = new Employee('Jane', 123, 'jane@gmail.com');

    expect(employee.getName()).toBe('Jane');
});
test('gets employee Id', ()=>{
    const employee = new Employee('Jane', 123, 'jane@gmail.com');

    expect(employee.getId()).toBe(123);
});
test('gets employee email', ()=>{
    const employee = new Employee('Jane', 123, 'jane@gmail.com');

    expect(employee.getEmail()).toBe('jane@gmail.com');
})
test('gets employee role', ()=>{
    const employee = new Employee('Jane', 123, 'jane@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});