// Backreferences

'[52] apples [and] [31] mangoes'.replace(/\[(\d+)\]/g, '$1')

'_apple_ __123__ _banana_'.replace(/(_)?_/g, '$1')

'good,bad 42,24 x,y'.replace(/(\w+),(\w+)/g, '$2,$1')

'52 apples and 31 mangoes'.replace(/\d+/g, '($&)')

'Hello world'.replace(/.*/, 'Hi. $&. Have a nice day')

'fork,42,nice,3.14'.replace(/,.+/, '$&,$`')

let words = ['moon', 'mono', 'excellent', 'POLL', 'a22b']

words.filter(w => /(\w)\1/.test(w))

'aa a a a 42 f_1 f_1 f_13.14'.replace(/\b(\w+)( \1)+\b/g, '$1')

// Backreference oddities

'cat'.replace(/a/, '{$1}')

'cat'.replace(/(a)/, '{\$1}')

'cat'.replace(/(a)/, '{$$1}')

'[52] apples and [31] mangoes'.replace(/\[(\d+)\]/g, '($15)')

'[52] apples and [31] mangoes'.replace(/\[(\d+)\]/g, '$3')

'[52] apples and [31] mangoes'.replace(/\[\d+\]/g, '$1')

'abcdefghijklmn'.replace(/(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)/, '$11')

'abcdefghijklmn'.replace(/(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)/, '$1\x31')

'abcdefghijklmn'.replace(/(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)/, '$011')

'abcdefghijklmna1d'.replace(/(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.).*\1\x31/, 'X')

// Non-capturing groups

'Sample123string42with777numbers'.split(/\d+/)

'Sample123string42with777numbers'.split(/(\d+)/)

'effort flee facade oddball rat tool'.match(/\b\w*(\w)\1\w*\b/g)

'hi 123123123 bye 456123456'.match(/(123)+/g)

'123hand42handy777handful500'.split(/hand(y|ful)?/)

'123hand42handy777handful500'.split(/hand(?:y|ful)?/)

'1,2,3,4,5,6,7'.replace(/^(([^,]+,){3})([^,]+)/, '$1($3)')

'1,2,3,4,5,6,7'.replace(/^((?:[^,]+,){3})([^,]+)/, '$1($2)')

'so:cat:rest:in:put:to'.replace(/^([^:]+:){4}/, '($1)')

'so:cat:rest:in:put:to'.replace(/^((?:[^:]+:){4})/, '($1)')

// Named capture groups

let row = 'today,2008-03-24,food,2008-03-24,nice,2018-10-25,5632'

row.match(/(?<date>\d{4}-\d{2}-\d{2}).*\k<date>/)[0]

'good,bad 42,24 x,y'.replace(/(?<fw>\w+),(?<sw>\w+)/g, '$<sw>,$<fw>')

let m = '2018-10-25,car,2346'.match(/(?<date>[^,]+),(?<product>[^,]+)/)

m.groups

m.groups.date

m.groups.product

