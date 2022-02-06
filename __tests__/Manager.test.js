const Manager = require('../lib/Manager');

test('creates a Manager object', ()=>{
    const manager = new Manager('name');

    expect(manager.name).toBe('name');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.office).toEqual(expect.any(Number));
})