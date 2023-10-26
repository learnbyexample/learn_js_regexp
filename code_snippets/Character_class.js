// Custom character sets

['cute', 'cat', 'cot', 'coat', 'cost', 'scuttle'].filter(w => /c[ou]t/.test(w))

'meeting cute boat site foot'.replace(/[aeo]+t/g, 'X')

// Range of characters

'Sample123string42with777numbers'.match(/[0-9]+/g)

'coat Bin food tar12 best Apple fig_42'.match(/\b[a-z0-9]+\b/g)

'coat tin food put stoop best fig_42 Pet'.match(/\b[p-z][a-z]*\b/g)

'coat tin food put stoop best fig_42 Pet'.match(/\b[a-fp-t]+\b/g)

// Negating character sets

'Sample123string42with777numbers'.match(/[^0-9]+/g)

'apple:123:banana:cherry'.replace(/^([^:]+:){2}/, '')

'apple=42; cherry=123'.replace(/=[^=]+$/, '')

let words = ['tryst', 'fun', 'glyph', 'pity', 'why']

words.filter(w => /^[^aeiou]+$/.test(w))

words.filter(w => !/[aeiou]/.test(w))

// Matching metacharacters literally

'ab-cd gh-c 12-423'.match(/\b[a-z-]{2,}\b/g)

'ab-cd gh-c 12-423'.match(/\b[a-z\-0-9]{2,}\b/g)

'f*(a^b) - 3*(a+b)'.match(/a[+^]b/g)

'f*(a^b) - 3*(a+b)'.match(/a[\^+]b/g)

'words[5] = tea'.match(/[a-z[\]0-9]+/)[0]

console.log('5ba\\babc2'.match(/[a\\b]+/)[0])

// Escape sequence sets

'Sample123string42with777numbers'.split(/\d+/)

'sea eat car rat eel tea'.match(/\b\w/g).join('')

'tea sea-Pit Sit;(lean_2\tbean_3)'.match(/[\w\s]+/g)

'Sample123string42with777numbers'.replace(/\D+/g, '-')

'   1..3  \v\f  fig_tea 42\tzzz   \r\n1-2-3  '.match(/\S+/g)

// Numeric ranges

'23 154 12 26 98234'.match(/\b[12]\d\b/g)

'23 154 12 26 98234'.match(/\b\d{3,}\b/g)

'0501 035 154 12 26 98234'.match(/\b0*[1-9]\d{2,}\b/g)

'45 349 651 593 4 204'.match(/\d+/g).filter(n => n < 350)

'45 349 651 593 4 204'.replace(/\d+/g, m => m < 350 ? 0 : 1)

'45 349 651 593 4 204'.match(/\d+/g).filter(n => n >= 200 && n <= 650)

