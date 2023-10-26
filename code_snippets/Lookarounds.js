// Conditional expressions

let items = ['1,2,3,4', 'a,b,c,d', '#apple 123']

items.filter(s => /\d/.test(s) && s.includes('#'))

items.filter(s => s[0] != '#').map(s => s.replace(/,.+,/, ' '))

// Negative lookarounds

'hey cats! cat42 cat_5 catcat'.replace(/cat(?!\d)/g, 'dog')

'cat _cat 42catcat'.replace(/(?<!_)cat/g, 'dog')

'cats _cater 42cat_cats'.replace(/(?<!_)cat./g, 'dog')

':cart apple --rest ;tea'.replace(/(?<!:|--)\b\w+/g, 'X')

'output=num1+35*42/num2'.replace(/(?<!^)\b(?!$)/g, ' ')

'spare'.replace(/(?<![pr])./g, '*')

'spare'.replace(/.(?<![pr].)/g, '*')

'par spare part party'.replace(/par(?!.*s)/g, '[$&]')

'par spare part party'.replace(/(?!.*s)par/g, '[$&]')

'output=num1+35*42/num2'.replace(/(?!$)\b(?<!^)/g, ' ')

// Positive lookarounds

'42 apple-5, fig3; x83, y-20; f12'.match(/\d+(?=,)/g)

'42 apple-5, fig3; x-83, y-20: f12'.match(/(?<=-)\d+(?=[;:])/g)

'sea eat car rat eel tea'.replace(/(?<=\b\w)\w*\W*/g, '')

'par spare part party'.replace(/par(?=.*\bpart\b)/g, '[$&]')

'1,two,3,four,5'.match(/(?<=,)[^,]+(?=,)/g)

',1,,,two,3,,'.replace(/(?<=^|,)(?=,|$)/g, 'NA')

',1,,,two,3,,'.replace(/(?![^,])(?<![^,])/g, 'NA')

',cat,tiger'.replace(/[^,]*/g, '{$&}')

',cat,tiger'.replace(/(?<=^|,)[^,]*/g, '{$&}')

// Capture groups inside positive lookarounds

console.log('a b c d e'.replace(/(\S+\s+)(?=(\S+)\s)/g, '$1$2\n'))

// AND conditional with lookarounds

let words = ['sequoia', 'subtle', 'questionable', 'exhibit', 'equation']

words.filter(w => /(?=.*b)(?=.*e).*t/.test(w))

words.filter(w => /(?=.*a)(?=.*e)(?=.*i)(?=.*o).*u/.test(w))

words.filter(w => /(?!.*n$)(?=.*a[bt]).*q/.test(w))

// Variable length lookbehind

'=314not :,2irk ,:3cool =42,error'.match(/(?<=[:=]\d+)[a-z]+/g)

'cat scatter cater scat'.replace(/(?<=(cat.*?){2})cat/, 'X')

/(?<!cat.*)dog/.test('fox,cat,dog,parrot')

/(?<!parrot.*)dog/.test('fox,cat,dog,parrot')

// Negated groups

/at((?!go).)*par/.test('fox,cat,dog,parrot')

/at((?!do).)*par/.test('fox,cat,dog,parrot')

'fox,cat,dog,parrot'.match(/at((?!go).)*par/)[0]

'at,baz,a2z,bad-zoo'.match(/a((?!\d).)*z/g)

