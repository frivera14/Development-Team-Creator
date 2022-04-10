const Intern = require('../lib/Intern')

test('collects Intern', () => {
    const intern = new Intern('kiks', '1', 'loco.com')

    expect(intern.role).toEqual(expect.stringContaining('Intern'));
    
})