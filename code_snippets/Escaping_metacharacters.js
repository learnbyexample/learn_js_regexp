/b^2/.test('a^2 + b^2 - C*3')

/b\^2/.test('a^2 + b^2 - C*3')

'(a*b) + c'.replace(/\(|\)/g, '')

'\\learn\\by\\example'.replace(/\\/g, '/')

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

let eqn = 'f*(a^b) - 3*(a^b)'

const usr_str = '(a^b)'

const pat = new RegExp(escapeRegExp(usr_str), 'g')

pat

eqn.replace(pat, 'c')

eqn.replace(new RegExp(escapeRegExp(usr_str) + '$'), 'c')

function unionRegExp(arr) {
  return arr.map(w => escapeRegExp(w)).join('|')
}

let w1 = ['c^t', 'dog$', 'f|x']

const p1 = new RegExp(unionRegExp(w1), 'g')

p1

'c^t dog$ bee parrot f|x'.replace(p1, 'mammal')

let w2 = ['hand', 'handy', 'handful']

w2.sort((a, b) => b.length - a.length)

const p2 = new RegExp(`\\b(${unionRegExp(w2)})\\b`, 'g')

p2

'handful handed handy hands hand'.replace(p2, 'X')

const p3 = /\bpar\b/

const p4 = new RegExp(p3.source + '|cat', 'g')

p4

console.log(p4.source)

p4.flags

'cater cat concatenate par spare'.replace(p4, 'X')

let path = '/foo/123/foo/baz/ip.txt'

path.replace(/^\/foo\/123\//, '~/')

path.replace(new RegExp(`^/foo/123/`), '~/')

