// match method

'abc ac adc abbbc'.match(/ab*c/)

'abc ac adc abbbc'.match(/ab*c/)[0]

'abc ac adc abbbc'.match('ab*c')

let s1 = 'cat and dog'

s1.match(/dog/).index

s1.match(/dog/).input

s1.match(/xyz/)

// search method

'cat and dog'.search(/dog/)

'cat and dog'.search(/xyz/)

// Capture groups

'abc ac adc abbbc'.match(/a(.*)d(.*a)/)

'abc ac adc abbbc'.match(/a(.*)d(.*a)/)[0]

'abc ac adc abbbc'.match(/a(.*)d(.*a)/)[1]

'abc ac adc abbbc'.match(/a(.*)d(.*a)/)[2]

// Getting all matched portions

'abc ac adc abbbc'.match(/ab*c/g)

'abc ac adc abbbc'.match(/ab+c/g)

'par spar apparent spare part'.match(/\bs?pare?\b/g)

'par spar apparent spare part'.match(/\bs?par(e|t)\b/g)

'that is quite a fabricated tale'.match(/t.*a/g)

'that is quite a fabricated tale'.match(/t.*?a/g)

// matchAll method

'abc ac adc abbbc'.matchAll(/ab*c/g)

let arr = [...'abc ac adc abbbc'.matchAll(/ab*c/g)]

arr

arr[0]

arr[1].index

Array.from('abc ac adc abbbc'.matchAll(/ab*c/g), m => m[0])

Array.from('abc ac adc abbbc'.matchAll(/ab*c/g), m => m.index)

Array.from('xx:yyy x: x:yy :y'.matchAll(/(x*):(y*)/g), m => m.slice(1))

// split with capture groups

'31111111111251111426'.split(/1*4?2/)

'31111111111251111426'.split(/(1*4?2)/)

'31111111111251111426'.split(/(1*)4?2/)

'3.14aabccc42'.split(/(a+)b+(c+)/)

'31111111111251111426'.split(/(1*)(4)?2/)

'3.14aabccc42abc88'.split(/(a+b+c+)(.*)/, 3)

// Using function in replacement section

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

// Using dictionary in replacement section

let h = { '1': 'one', '2': 'two', '4': 'four' }

'9234012'.replace(/1|2|4/g, k => h[k])

'9234012'.replace(/\d/g, k => k in h ? h[k] : 'X')

let swap = { 'cat': 'tiger', 'tiger': 'cat' }

'cat tiger dog tiger cat'.replace(/cat|tiger/g, k => swap[k])

let d = { 'hand': 1, 'handy': 2, 'handful': 3, 'a^b': 4 }

const p = unionRegExp(Object.keys(d).sort((a, b) => b.length - a.length))

console.log(p)

'handful hand pin handy (a^b)'.replace(new RegExp(p, 'g'), k => d[k])

