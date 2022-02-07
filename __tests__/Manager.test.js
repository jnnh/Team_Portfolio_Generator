const Manager = require('../lib/Manager');

test('creates a Manager object', ()=>{
    const manager = new Manager('Jane', 123, 'jane@gmail.com', 4);

    expect(manager.name).toBe('Jane');
    expect(manager.id).toBe(123);
    expect(manager.email).toBe('jane@gmail.com');
    expect(manager.office).toBe(4);
    expect(manager.role).toBe('Manager');
});
test('gets manager name', ()=>{
    const manager = new Manager('Jane', 123, 'jane@gmail.com');

    expect(manager.getName()).toBe('Jane');
});
test('gets manager Id', ()=>{
    const manager = new Manager('Jane', 123, 'jane@gmail.com');

    expect(manager.getId()).toBe(123);
});
test('gets manager email', ()=>{
    const manager = new Manager('Jane', 123, 'jane@gmail.com');

    expect(manager.getEmail()).toBe('jane@gmail.com');
})
test('gets manager role', ()=>{
    const manager = new Manager('Jane', 123, 'jane@gmail.com');

    expect(manager.getRole()).toBe('Manager');
});