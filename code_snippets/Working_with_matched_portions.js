// match() method

'too soon a song snatch'.match(/so+n/)

'too soon a song snatch'.match(/so+n/)[0]

'too soon a song snatch'.match('so+n')

let s1 = 'cat and dog'

s1.match(/dog/).index

s1.match(/dog/).input

s1.match(/xyz/)

// search() method

'cat and dog'.search(/dog/)

'cat and dog'.search(/xyz/)

// Capture groups

let motivation = 'improve yourself.'

motivation.match(/pr.*our/)

motivation.match(/pr.*our/)[0]

let purchase = 'coffee:100g tea:250g sugar:75g chocolate:50g'

let m = purchase.match(/:(.*?)g.*?:(.*?)g.*?chocolate:(.*?)g/)

m

m[1]

m[3]

// d flag

'awesome'.match(/so/d)

'awesome'.match(/so/d).indices[0]

'coffee:100g tea:250g'.match(/:(.*?)g/d)

'coffee:100g tea:250g'.match(/:(.*?)g/d).indices[0]

'coffee:100g tea:250g'.match(/:(.*?)g/d).indices[1]

// Getting all the matched portions

'too soon a song snatch'.match(/so*n/g)

'too soon a song snatch'.match(/so+n/g)

'PAR spar apparent SpArE part pare'.match(/\bs?pare?\b/ig)

'par spar apparent spare part'.match(/\bs?par(e|t)\b/g)

'green:3.14:teal::brown:oh!:blue'.match(/:.*:/g)

'green:3.14:teal::brown:oh!:blue'.match(/:.*?:/g)

// matchAll() method

'song too soon snatch'.matchAll(/so*n/g)

let arr = [...'song too soon snatch'.matchAll(/so*n/g)]

arr

arr[0]

arr[1].index

Array.from('song too soon snatch'.matchAll(/so*n/g), m => m[0])

Array.from('song too soon snatch'.matchAll(/so*n/g), m => m.index)

Array.from('2023/04,1986/Mar,'.matchAll(/(.*?)\/(.*?),/g), m => m.slice(1))

// split() with capture groups

'31111111111251111426'.split(/1*4?2/)

'31111111111251111426'.split(/(1*4?2)/)

'31111111111251111426'.split(/(1*)4?2/)

'3.14aabccc42'.split(/(a+)b+(c+)/)

'31111111111251111426'.split(/(1*)(4)?2/)

'3.14aabccc42abc88'.split(/(a+b+c+)(.*)/, 3)

// Using functions in the replacement section

function titleCase(m) {
    return m[0].toUpperCase() + m.substr(1).toLowerCase()
}

'aBc ac ADC aBbBC'.replace(/a.*?c/ig, titleCase)

'abc ac adc abbbc'.replace(/ab*c/g, m => m.toUpperCase())

'1 42 317'.replace(/\d+/g, m => m*2)

function titleCase(m, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase()
}

'aBc ac ADC aBbBC'.replace(/(a)(.*?c)/ig, titleCase)

// Using dictionary in the replacement section

let h = { '1': 'one', '2': 'two', '4': 'four' }

'9234012'.replace(/1|2|4/g, k => h[k])

'9234012'.replace(/\d/g, k => k in h ? h[k] : 'X')

let swap = { 'cat': 'tiger', 'tiger': 'cat' }

'cat tiger dog tiger cat'.replace(/cat|tiger/g, k => swap[k])

let d = { 'hand': 1, 'handy': 2, 'handful': 3, 'a^b': 4 }

const p = unionRegExp(Object.keys(d).sort((a, b) => b.length - a.length))

console.log(p)

'handful hand pin handy (a^b)'.replace(new RegExp(p, 'g'), k => d[k])

