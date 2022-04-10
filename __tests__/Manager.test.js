const Manager = require('../lib/Manager')

test('collects Manager', () => {
    const manager = new Manager('kiks')

    expect(manager.role).toEqual(expect.stringContaining('Manager'));
    
})
