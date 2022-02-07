const Intern = require('../lib/Intern');

test('creates a Intern object', ()=>{
    const intern = new Intern('Jane', 123, 'jane@gmail.com', 'Carleton');

    expect(intern.name).toBe('Jane');
    expect(intern.id).toBe(123);
    expect(intern.email).toBe('jane@gmail.com');
    expect(intern.school).toBe('Carleton');
    expect(intern.role).toBe('Intern');
});
test('gets intern name', ()=>{
    const intern = new Intern('Jane', 123, 'jane@gmail.com', 'Carleton');

    expect(intern.getName()).toBe('Jane');
});
test('gets intern Id', ()=>{
    const intern = new Intern('Jane', 123, 'jane@gmail.com', 'Carleton');

    expect(intern.getId()).toBe(123);
});
test('gets intern email', ()=>{
    const intern = new Intern('Jane', 123, 'jane@gmail.com', 'Carleton');

    expect(intern.getEmail()).toBe('jane@gmail.com');
})
test("gets intern's school", ()=>{
    const intern = new Intern('Jane', 123, 'jane@gmail.com', 'Carleton');

    expect(intern.getSchool()).toBe('Carleton');
})
test('gets intern role', ()=>{
    const intern = new Intern('Jane', 123, 'jane@gmail.com', 'Carleton');

    expect(intern.getRole()).toBe('Intern');
});