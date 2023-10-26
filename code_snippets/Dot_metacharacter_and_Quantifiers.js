// Dot metacharacter

'tac tin c.t abc;tuv acute'.replace(/c.t/g, 'X')

'breadth markedly reported overrides'.replace(/r..d/g, 'X')

'42\t35'.replace(/2.3/, '8')

'cag̈ed'.replace(/a.e/, 'o')

'cag̈ed'.replace(/a..e/, 'o')

// split() method

'apple-85-mango-70'.split(/-/)

'apple-85-mango-70'.split(/-/, 2)

'bus:3:car:-:van'.split(/:.:/)

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

let repeats = ['abc', 'ac', 'abbc', 'xabbbcz', 'bc', 'abbbbbc']

repeats.filter(w => /ab{1,4}c/.test(w))

repeats.filter(w => /ab{0,2}c/.test(w))

repeats.filter(w => /ab{3,}c/.test(w))

repeats.filter(w => /ab{3}c/.test(w))

'a{5} = 10'.replace(/a\{5}/g, 'a{6}')

'report_{a,b}.txt'.replace(/_{a,b}/g, '-{c,d}')

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

console.log('table < fig \\< bat < cake'.replace(/\\?</g, '\\<'))

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

'green:3.14:teal::brown:oh!:blue'.split(/:.*:/)

'green:3.14:teal::brown:oh!:blue'.split(/:.*?:/)

// s flag

console.log('Hi there\nHave a Nice Day'.replace(/the.*ice/, 'X'))

console.log('Hi there\nHave a Nice Day'.replace(/the.*ice/s, 'X'))

