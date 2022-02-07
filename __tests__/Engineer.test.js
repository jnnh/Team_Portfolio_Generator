const Engineer = require('../lib/Engineer');

test('creates a Engineer object', ()=>{
    const engineer = new Engineer('Jane', 123, 'jane@gmail.com', 'janehub');

    expect(engineer.name).toBe('Jane');
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe('jane@gmail.com');
    expect(engineer.github).toBe('janehub');
    expect(engineer.role).toBe('Engineer');
});
test('gets Engineer name', ()=>{
    const engineer = new Engineer('Jane', 123, 'jane@gmail.com', 'janehub');

    expect(engineer.getName()).toBe('Jane');
});
test('gets Engineer Id', ()=>{
    const engineer = new Engineer('Jane', 123, 'jane@gmail.com', 'janehub');

    expect(engineer.getId()).toBe(123);
});
test('gets Engineer email', ()=>{
    const engineer = new Engineer('Jane', 123, 'jane@gmail.com', 'janehub');

    expect(engineer.getEmail()).toBe('jane@gmail.com');
})
test("gets Engineer's school", ()=>{
    const engineer = new Engineer('Jane', 123, 'jane@gmail.com', 'janehub');

    expect(engineer.getGithub()).toBe('janehub');
})
test('gets Engineer role', ()=>{
    const engineer = new Engineer('Jane', 123, 'jane@gmail.com', 'janehub');

    expect(engineer.getRole()).toBe('Engineer');
});