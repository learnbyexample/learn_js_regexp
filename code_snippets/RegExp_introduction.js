// test method

let sentence = 'This is a sample string'

sentence.includes('is')

sentence.includes('z')

/is/.test(sentence)

/z/.test(sentence)

let report = 'string theory'

if (/ring/.test(report)) {
    console.log('mission success')
}

if (!/fire/.test(report)) {
    console.log('mission failed')
}

let words = ['cat', 'attempt', 'tattle']

words.filter(w => /tt/.test(w))

words.every(w => /at/.test(w))

words.some(w => /stat/.test(w))

// Flags

/cat/.test('CaT')

/cat/i.test('CaT')

['Cat', 'cot', 'CATER', 'SCat', 'ScUtTLe'].filter(w => /cat/i.test(w))

// RegExp constructor and reuse

const pet = /dog/

pet.test('They bought a dog')

pet.test('A cat crossed their path')

const pat = new RegExp('dog')

pat

new RegExp('dog', 'i')

let greeting = 'hi'

const pat1 = new RegExp(`${greeting} there`)

pat1

new RegExp(`${greeting.toUpperCase()} there`)

// replace method

'1,2,3,4'.replace(/,/, '-')

'1,2,3,4'.replace(/,/g, '-')

'cArT PART tart mArt'.replace(/art/ig, '2')

let word = 'cater'

word.replace(/cat/, 'hack')

word

word = word.replace(/cat/, 'hack')

word

