// Alternation

const pets = /cat|dog/

pets.test('I like cats')

pets.test('I like dogs')

pets.test('I like parrots')

'catapults concatenate cat scat cater'.replace(/^cat|cat\b/g, 'X')

'cat dog bee parrot fox'.replace(/cat|dog|fox/g, 'mammal')

// Grouping

'red reform read arrest'.replace(/reform|rest/g, 'X')

'red reform read arrest'.replace(/re(form|st)/g, 'X')

'par spare part party'.replace(/\bpar\b|\bpart\b/g, 'X')

'par spare part party'.replace(/\b(par|part)\b/g, 'X')

'par spare part party'.replace(/\bpar(|t)\b/g, 'X')

// Precedence rules

let words = 'lion elephant are rope not'

words.replace(/on|ant/, 'X')

words.replace(/ant|on/, 'X')

let mood = 'best years'

mood.replace(/year|years/, 'X')

mood.replace(/years|year/, 'X')

let sample = 'ear xerox at mare part learn eye'

sample.replace(/ar|are|art/g, 'X')

sample.replace(/are|ar|art/g, 'X')

sample.replace(/are|art|ar/g, 'X')

