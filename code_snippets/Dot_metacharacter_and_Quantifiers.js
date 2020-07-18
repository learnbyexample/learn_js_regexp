// Dot metacharacter

'tac tin c.t abc;tuv acute'.replace(/c.t/g, 'X')

'breadth markedly reported overrides'.replace(/r..d/g, 'X')

'42\t33'.replace(/2.3/, '8')

// split method

'apple-85-mango-70'.split(/-/)

'apple-85-mango-70'.split(/-/, 2)

'bus:3:car:5:van'.split(/:.:/)

// Greedy quantifiers

'far feat flare fear'.replace(/e?ar/g, 'X')

'par spare part party'.replace(/\bpart?\b/g, 'X')

['red', 'ready', 're;d', 'redo', 'reed'].filter(w => /\bre.?d\b/.test(w))

'par part parrot parent'.replace(/par(ro)?t/g, 'X')

'par part parrot parent'.replace(/par(en|ro)?t/g, 'X')

'tr tear tare steer sitaara'.replace(/ta*r/g, 'X')

'tr tear tare steer sitaara'.replace(/t(e|a)*r/g, 'X')

'3111111111125111142'.replace(/1*2/g, 'X')

'3111111111125111142'.split(/1*2/)

'3111111111125111142'.split(/1*/)

'tr tear tare steer sitaara'.replace(/ta+r/g, 'X')

'tr tear tare steer sitaara'.replace(/t(e|a)+r/g, 'X')

'3111111111125111142'.replace(/1+2/g, 'X')

'3111111111125111142'.split(/1+/)

let demo = ['abc', 'ac', 'abbc', 'xabbbcz', 'bc', 'abbbbbc']

demo.filter(w => /ab{1,4}c/.test(w))

demo.filter(w => /ab{0,2}c/.test(w))

demo.filter(w => /ab{3,}c/.test(w))

demo.filter(w => /ab{3}c/.test(w))

// AND Conditional

/Error.*valid/.test('Error: not a valid input')

/Error.*valid/.test('Error: key not found')

/cat.*dog|dog.*cat/.test('cat and dog')

/cat.*dog|dog.*cat/.test('dog and cat')

let patterns = [/cat/, /dog/]

patterns.every(p => p.test('cat and dog'))

patterns.every(p => p.test('dog and cat'))

// What does greedy mean?

'foot'.replace(/f.?o/, 'X')

console.log('blah < foo \\< bar < baz'.replace(/\\?</g, '\\<'))

'hand handy handful'.replace(/hand(y|ful)?/g, 'X')

let sentence = 'that is quite a fabricated tale'

sentence.replace(/t.*a/, 'X')

'star'.replace(/t.*a/, 'X')

sentence.replace(/t.*a.*q.*f/, 'X')

sentence.replace(/t.*a.*u/, 'X')

// Non-greedy quantifiers

'foot'.replace(/f.??o/, 'X')

'frost'.replace(/f.??o/, 'X')

'123456789'.replace(/.{2,5}?/, 'X')

'green:3.14:teal::brown:oh!:blue'.split(/:.*?:/)

let sentence = 'that is quite a fabricated tale'

sentence.replace(/t.*?a/, 'X')

'star'.replace(/t.*?a/, 'X')

sentence.replace(/t.*?a.*?f/, 'X')

// s flag

'Hi there\nHave a Nice Day'.replace(/the.*ice/, 'X')

'Hi there\nHave a Nice Day'.replace(/the.*ice/s, 'X')

