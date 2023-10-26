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

let elements = ['spare\ntool', 'par\n', 'dare', 'spared']

elements.filter(e => /are$/m.test(e))

/^par$/m.test('spare\npar\nera\ndare')

let items = 'catapults\nconcatenate\ncat'

console.log(items.replace(/^/gm, '* '))

console.log(items.replace(/$/gm, '.'))

console.log('1\n2\n'.replace(/^/mg, 'fig '))

console.log('1\n2\n'.replace(/$/mg, ' apple'))

// Word anchors

let words = 'par spar apparent spare part'

words.replace(/par/g, 'X')

words.replace(/\bpar/g, 'X')

words.replace(/par\b/g, 'X')

words.replace(/\bpar\b/g, 'X')

let words = 'par spar apparent spare part'

console.log(words.replace(/\b/g, '"').replace(/ /g, ','))

'output=num1+35*42/num2'.replace(/\b/g, ' ')

'output=num1+35*42/num2'.replace(/\b/g, ' ').trim()

// Opposite Word Anchor

let words = 'par spar apparent spare part'

words.replace(/\Bpar/g, 'X')

words.replace(/\Bpar\b/g, 'X')

words.replace(/par\B/g, 'X')

words.replace(/\Bpar\B/g, 'X')

'copper'.replace(/\b/g, ':')

'copper'.replace(/\B/g, ':')

'-----hello-----'.replace(/\b/g, ' ')

'-----hello-----'.replace(/\B/g, ' ')

