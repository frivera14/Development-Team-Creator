const Engineer = require('../lib/Engineer')

test('collects engineer', () => {
    const engineer = new Engineer('kiks', '1', 'loco.com')
    
    expect(engineer.role).toEqual(expect.stringContaining('Engineer'))
    
})