// String anchors

/^cat/.test('cater')

/^cat/.test('concatenation')

/^hi/.test('hi hello\ntop spot')

/^top/.test('hi hello\ntop spot')

/are$/.test('spare')

/are$/.test('nearest')

let words = ['surrender', 'unicorn', 'newer', 'door', 'empty', 'eel', 'pest']

words.filter(w => /er$/.test(w))

words.filter(w => /t$/.test(w))

/^cat$/.test('cat')

/^cat$/.test('cater')

'live'.replace(/^/, 're')

'send'.replace(/^/, 're')

'cat'.replace(/$/, 'er')

'hack'.replace(/$/, 'er')

// Line anchors

/^top/m.test('hi hello\ntop spot')

/er$/m.test('spare\npar\nera\ndare')

/^par$/m.test('spare\npar\nera\ndare')

let items = 'catapults\nconcatenate\ncat'

console.log(items.replace(/^/gm, '* '))

console.log(items.replace(/$/gm, '.'))

'1\n2\n'.replace(/^/mg, 'foo ')

'1\n2\n'.replace(/$/mg, ' baz')

// Word anchors

let sample = 'par spar apparent spare part'

sample.replace(/par/g, 'X')

sample.replace(/\bpar/g, 'X')

sample.replace(/par\b/g, 'X')

sample.replace(/\bpar\b/g, 'X')

let sample = 'par spar apparent spare part'

console.log(sample.replace(/\b/g, '"').replace(/ /g, ','))

'foo_baz=num1+35*42/num2'.replace(/\b/g, ' ')

'foo_baz=num1+35*42/num2'.replace(/\b/g, ' ').trim()

let sample = 'par spar apparent spare part'

sample.replace(/\Bpar/g, 'X')

sample.replace(/\Bpar\b/g, 'X')

sample.replace(/par\B/g, 'X')

sample.replace(/\Bpar\B/g, 'X')

'copper'.replace(/\b/g, ':')

'copper'.replace(/\B/g, ':')

'-----hello-----'.replace(/\b/g, ' ')

'-----hello-----'.replace(/\B/g, ' ')

