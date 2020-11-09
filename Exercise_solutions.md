# Exercise solutions

<br>

# RegExp introduction

**a)** Check if the given input strings contain `two` irrespective of case.

```js
> let s1 = 'Their artwork is exceptional'
> let s2 = 'one plus tw0 is not three'
> let s3 = 'TRUSTWORTHY'

> const pat1 = /two/i

> pat1.test(s1)
< true
> pat1.test(s2)
< false
> pat1.test(s3)
< true
```

**b)** For the given array, filter all elements that do *not* contain `e`.

```js
> let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']

> items.filter(w => !/e/.test(w))
< ["goal", "sit"]
```

**c)** Replace first occurrence of `5` with `five` for the given string.

```js
> let ip = 'They ate 5 apples and 5 oranges'

> ip.replace(/5/, 'five')
< "They ate five apples and 5 oranges"
```

**d)** Replace all occurrences of `5` with `five` for the given string.

```js
> let ip = 'They ate 5 apples and 5 oranges'

> ip.replace(/5/g, 'five')
< "They ate five apples and five oranges"
```

**e)** Replace all occurrences of `note` irrespective of case with `X`.

```js
> let ip = 'This note should not be NoTeD'

> ip.replace(/note/ig, 'X')
< "This X should not be XD"
```

**f)** For the given multiline input string, filter all lines NOT containing the string `2`.

```js
> let purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`

> const num = /2/

> console.log(purchases.split('\n')
                       .filter(e => !num.test(e))
                       .join('\n'))
< items qty
  mango 50
  onion 31
  water 10
```

>![info](images/info.svg) You'd be able to solve this using just `replace` method by the end of [Dot metacharacter and Quantifiers](#dot-metacharacter-and-quantifiers) chapter.

**g)** For the given array, filter all elements that contains either `a` or `w`.

```js
> let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']

> items.filter(w => /a/.test(w) || /w/.test(w))
< ["goal", "new", "eat"]
```

**h)** For the given array, filter all elements that contains both `e` and `n`.

```js
> let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']

> items.filter(w => /e/.test(w) && /n/.test(w))
< ["new", "dinner"]
```

**i)** For the given string, replace `0xA0` with `0x7F` and `0xC0` with `0x1F`.

```js
> let ip = 'start address: 0xA0, func1 address: 0xC0'

> ip.replace(/0xA0/, '0x7F').replace(/0xC0/, '0x1F')
< "start address: 0x7F, func1 address: 0x1F"
```

<br>

# Anchors

**a)** Check if the given input strings contain `is` or `the` as whole words.

```js
> let str1 = 'is; (this)'
> let str2 = "The food isn't good"
> let str3 = 'the2 cats'
> let str4 = 'switch on the light'

> const pat1 = /\bis\b/
> const pat2 = /\bthe\b/

> pat1.test(str1) || pat2.test(str1)
< true
> pat1.test(str2) || pat2.test(str2)
< false
> pat1.test(str3) || pat2.test(str3)
< false
> pat1.test(str4) || pat2.test(str4)
< true
```

**b)** For the given input string, change only whole word `red` to `brown`

```js
> let ip = 'bred red spread credible red;'

> ip.replace(/\bred\b/g, 'brown')
< "bred brown spread credible brown;"
```

**c)** For the given array, filter all elements that contains `42` surrounded by word characters.

```js
> let items = ['hi42bye', 'nice1423', 'bad42', 'cool_42a', 'fake4b']

> items.filter(e => /\B42\B/.test(e))
< ["hi42bye", "nice1423", "cool_42a"]
```

**d)** For the given input array, filter all elements that start with `den` or end with `ly`

```js
> let items = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly\n', 'dent']

> items.filter(e => /^den/.test(e) || /ly$/.test(e))
< ["lovely", "2 lonely", "dent"]
```

**e)** For the given input string, change whole word `mall` to `1234` only if it is at the start of line.

```js
> let para = `ball fall wall tall
mall call ball pall
wall mall ball fall
mallet wallet malls`

> console.log(para.replace(/^mall\b/gm, '1234'))
< ball fall wall tall
  1234 call ball pall
  wall mall ball fall
  mallet wallet malls
```

**f)** For the given array, filter all elements having a line starting with `den` or ending with `ly`.

```js
> let items = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly\nfar', 'dent']

> items.filter(e => /^den/m.test(e) || /ly$/m.test(e))
< ["lovely", "1\ndentist", "2 lonely", "fly\nfar", "dent"]
```

**g)** For the given input array, filter all whole elements `12\nthree` irrespective of case.

```js
> let items = ['12\nthree\n', '12\nThree', '12\nthree\n4', '12\nthree']

> items.filter(e => /^12\nthree$/i.test(e))
< ["12\nThree", "12\nthree"]
```

**h)** For the given input array, replace `hand` with `X` for all words that start with `hand` followed by at least one word character.

```js
> let items = ['handed', 'hand', 'handy', 'unhanded', 'handle', 'hand-2']

> items.map(w => w.replace(/\bhand\B/, 'X'))
< ["Xed", "hand", "Xy", "unhanded", "Xle", "hand-2"]
```

**i)** For the given input array, filter all elements starting with `h`. Additionally, replace `e` with `X` for these filtered elements.

```js
> let items = ['handed', 'hand', 'handy', 'unhanded', 'handle', 'hand-2']

> items.filter(w => /^h/.test(w)).map(w => w.replace(/e/g, 'X'))
< ["handXd", "hand", "handy", "handlX", "hand-2"]
```

**j)** Why does the following code show `false` instead of `true`?

Because `$` matches only the end of string. You'll have to use the `m` flag to enable matching at the end of line separators. Some regular expression engines do allow `$` to match just before `\n` if it is the last character in the string, not but JavaScript.

```js
> /end$/.test('bend it\nand send\n')
< false

> /end$/m.test('bend it\nand send\n')
< true
```

<br>

# Alternation and Grouping

**a)** For the given input array, filter all elements that start with `den` or end with `ly`

```js
> let items = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly\n', 'dent']

> items.filter(e => /^den|ly$/.test(e))
< ["lovely", "2 lonely", "dent"]
```

**b)** For the given array, filter all elements having a line starting with `den` or ending with `ly`

```js
> let items = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly\nfar', 'dent']

> items.filter(e => /^den|ly$/m.test(e))
< ["lovely", "1\ndentist", "2 lonely", "fly\nfar", "dent"]
```

**c)** For the given input strings, replace all occurrences of `removed` or `reed` or `received` or `refused` with `X`.

```js
> let s1 = 'creed refuse removed read'
> let s2 = 'refused reed redo received'

> const pat1 = /re(mov|ceiv|fus|)ed/g

> s1.replace(pat1, 'X')
< "cX refuse X read"
> s2.replace(pat1, 'X')
< "X X redo X"
```

**d)** For the given input strings, replace `late` or `later` or `slated` with `A`.

```js
> let str1 = 'plate full of slate'
> let str2 = "slated for later, don't be late"

> const pat2 = /slated|late(r|)/g

> str1.replace(pat2, 'A')
< "pA full of sA"
> str2.replace(pat2, 'A')
< "A for A, don't be A"
```

<br>

# Escaping metacharacters

**a)** Transform given input strings to expected output using same logic on both strings.

```js
> let str1 = '(9-2)*5+qty/3'
> let str2 = '(qty+4)/2-(9-2)*5+pq/4'

> const pat1 = /\(9-2\)\*5/g
> str1.replace(pat1, '35')
< "35+qty/3"
> str2.replace(pat1, '35')
< "(qty+4)/2-35+pq/4"
```

**b)** Replace `(4)\|` with `2` only at the start or end of given input strings.

```js
> let s1 = '2.3/(4)\\|6 foo 5.3-(4)\\|'
> let s2 = '(4)\\|42 - (4)\\|3'
> let s3 = 'two - (4)\\|\n'

> const pat2 = /^\(4\)\\\||\(4\)\\\|$/g

> s1.replace(pat2, '2')
< "2.3/(4)\|6 foo 5.3-2"
> s2.replace(pat2, '2')
< "242 - (4)\|3"
> s3.replace(pat2, '2')
< "two - (4)\|
  "
```

**c)** Replace any matching item from given array with `X` for the given input strings.

```js
> let items = ['a.b', '3+n', 'x\\y\\z', 'qty||price', '{n}']

> function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')
  }

> function unionRegExp(arr) {
    return arr.map(w => escapeRegExp(w)).join('|')
  }

> const pat3 = new RegExp(unionRegExp(items), 'g')

> '0a.bcd'.replace(pat3, 'X')
< "0Xcd"
> 'E{n}AMPLE'.replace(pat3, 'X')
< "EXAMPLE"
> '43+n2 ax\\y\\ze'.replace(pat3, 'X')
< "4X2 aXe"
```

**d)** Replace backspace character `\b` with a single space character for the given input string.

```js
> let ip = '123\b456'

> ip.replace(/\x08/, ' ')
< "123 456"
```

**e)** Replace all occurrences of `\e` with `e`.

```js
> let ip = 'th\\er\\e ar\\e common asp\\ects among th\\e alt\\ernations'

> ip.replace(/\\e/g, 'e')
< "there are common aspects among the alternations"
```

**f)** Replace any matching item from the array `eqns` with `X` for given the string `ip`. Match the items from `eqns` literally.

```js
> let ip = '3-(a^b)+2*(a^b)-(a/b)+3'
> let eqns = ['(a^b)', '(a/b)', '(a^b)+2']

// note that '/' is also escaped here
> function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\\/]/g, '\\$&')
  }

> function unionRegExp(arr) {
    return arr.map(w => escapeRegExp(w)).join('|')
  }

> eqns.sort((a, b) => b.length - a.length)
< ["(a^b)+2", "(a^b)", "(a/b)"]

> const pat4 = new RegExp(unionRegExp(eqns), 'g')
> pat4
< /\(a\^b\)\+2|\(a\^b\)|\(a\/b\)/g

> ip.replace(pat4, 'X')
< "3-X*X-X+3"
```

<br>

# Dot metacharacter and Quantifiers

>![info](images/info.svg) Use `s` flag for these exercises depending upon the contents of input strings.

**a)** Replace `42//5` or `42/5` with `8` for the given input.

```js
> let ip = 'a+42//5-c pressure*3+42/5-14256'

> ip.replace(/42\/\/?5/g, '8')
< "a+8-c pressure*3+8-14256"
```

**b)** For the array `items`, filter all elements starting with `hand` and ending with at most one more character or `le`.

```js
> let items = ['handed', 'hand', 'handled', 'handy', 'unhand', 'hands', 'handle']

> items.filter(w => /^hand(.|le)?$/.test(w))
< ["hand", "handy", "hands", "handle"]
```

**c)** Use `split` method to get the output as shown for the given input strings.

```js
> let eqn1 = 'a+42//5-c'
> let eqn2 = 'pressure*3+42/5-14256'
> let eqn3 = 'r*42-5/3+42///5-42/53+a'

> const pat1 = new RegExp(`42//?5`)

> eqn1.split(pat1)
< ["a+", "-c"]
> eqn2.split(pat1)
< ["pressure*3+", "-14256"]
> eqn3.split(pat1)
< ["r*42-5/3+42///5-", "3+a"]
```

**d)** For the given input strings, remove everything from the first occurrence of `i` till end of the string.

```js
> let s1 = 'remove the special meaning of such constructs'
> let s2 = 'characters while constructing'

> const pat2 = /i.*/

> s1.replace(pat2, '')
< "remove the spec"
> s2.replace(pat2, '')
< "characters wh"
```

**e)** For the given strings, construct a regexp to get output as shown.

```js
> let str1 = 'a+b(addition)'
> let str2 = 'a/b(division) + c%d(#modulo)'
> let str3 = 'Hi there(greeting). Nice day(a(b)'

> const remove_parentheses = /\(.*?\)/g

> str1.replace(remove_parentheses, '')
< "a+b"
> str2.replace(remove_parentheses, '')
< "a/b + c%d"
> str3.replace(remove_parentheses, '')
< "Hi there. Nice day"
```

**f)** Correct the given regexp to get the expected output.

```js
> let words = 'plink incoming tint winter in caution sentient'

// wrong output
> const w1 = /int|in|ion|ing|inco|inter|ink/g
> words.replace(w1, 'X')
"plXk XcomXg tX wXer X cautX sentient"

// expected output
> const w2 = /in(ter|co|g|k|t)?|ion/g
> words.replace(w2, 'X')
"plX XmX tX wX X cautX sentient"
```

**g)** For the given greedy quantifiers, what would be the equivalent form using `{m,n}` representation?

* `?` is same as `{0,1}`
* `*` is same as `{0,}`
* `+` is same as `{1,}`

**h)** `(a*|b*)` is same as `(a|b)*` — true or false?

False. Because `(a*|b*)` will match only sequences like `a`, `aaa`, `bb`, `bbbbbbbb`. But `(a|b)*` can match a mixed sequence like `ababbba` too.

**i)** For the given input strings, remove everything from the first occurrence of `test` (irrespective of case) till end of the string, provided `test` isn't at the end of the string.

```js
> let s1 = 'this is a Test'
> let s2 = 'always test your regexp for corner\ncases'
> let s3 = 'a TEST of skill tests?'

> let pat3 = /test.+/is

> s1.replace(pat3, '')
< "this is a Test"
> s2.replace(pat3, '')
< "always "
> s3.replace(pat3, '')
< "a "
```

**j)** For the input array `words`, filter all elements starting with `s` and containing `e` and `t` in any order.

```js
> let words = ['sequoia', 'subtle', 'exhibit', 'asset', 'sets', 'tests', 'site']

> words.filter(w => /^s.*(e.*t|t.*e)/.test(w))
< ["subtle", "sets", "site"]
```

**k)** For the input array `words`, remove all elements having less than `6` characters.

```js
> let words = ['sequoia', 'subtle', 'exhibit', 'asset', 'sets', 'tests', 'site']

> words.filter(w => /.{6,}/.test(w))
< ["sequoia", "subtle", "exhibit"]
```

**l)** For the input array `words`, filter all elements starting with `s` or `t` and having a maximum of `6` characters.

```js
> let words = ['sequoia', 'subtle', 'exhibit', 'asset', 'sets', 'tests', 'site']

> words.filter(w => /^(s|t).{0,5}$/.test(w))
< ["subtle", "sets", "tests", "site"]
```

**m)** Delete from the string `start` if it is at beginning of a line up to the next occurrence of the string `end` at end of a line. Match these keywords irrespective of case.

```js
> let para = `good start
start working on that
project you always wanted
to, do not let it end
hi there
start and end the end
42
Start and try to
finish the End
bye`

> const pat3 = /^start.*?end$/igms
> console.log(para.replace(pat3, ''))
< good start
  
  hi there
  
  42
  
  bye
```

**n)** Can you reason out why this code results in the output shown? The aim was to remove all `<characters>` patterns but not the `<>` ones. The expected result was `'a 1<> b 2<> c'`.

The use of `.+` quantifier after `<` means that `<>` cannot be a possible match to satisfy `<.+?>`. So, after matching `<` (which occurs after `1` and `2` in the given input string) the regular expression engine will look for next occurrence of `>` character to satisfy the given pattern. To solve such cases, you need to use character classes, which is discussed in a later chapter, to specify which particular set of characters should be matched by the `+` quantifier instead of `.` metacharacter.

```js
> let ip = 'a<apple> 1<> b<bye> 2<> c<cat>'

> ip.replace(/<.+?>/g, '')
< "a 1 2"
```

**o)** Use `split` method to get the output as shown below for given input strings.

```js
> let s1 = 'go there  ::   this :: that'
> let s2 = 'a::b :: c::d e::f :: 4::5'
> let s3 = '42:: hi::bye::see :: carefully'

> const pat4 = / +:: +(.+)/

> s1.split(pat4, 2)
< ["go there", "this :: that"]
> s2.split(pat4, 2)
< ["a::b", "c::d e::f :: 4::5"]
> s3.split(pat4, 2)
< ["42:: hi::bye::see", "carefully"]
```

<br>

# Working with matched portions

**a)** For the given strings, extract the matching portion from first `is` to last `t`

```js
> let str1 = 'What is the biggest fruit you have seen?'
> let str2 = 'Your mission is to read and practice consistently'

> const pat1 = /is.*t/

> str1.match(pat1)[0]
< "is the biggest fruit"
> str2.match(pat1)[0]
< "ission is to read and practice consistent"
```

**b)** Find the starting index of first occurrence of `is` or `the` or `was` or `to` for the given input strings. Assume that there will be at least one match for each input string.

```js
> let s1 = 'match after the last newline character'
> let s2 = 'and then you want to test'
> let s3 = 'this is good bye then'
> let s4 = 'who was there to see?'

> const pat2 = /is|the|was|to/

> s1.search(pat2)
< 12
> s2.search(pat2)
< 4
> s3.search(pat2)
< 2
> s4.search(pat2)
< 4
```

**c)** Find the starting index of last occurrence of `is` or `the` or `was` or `to` for the given input strings. Assume that there will be at least one match for each input string.

```js
> let s1 = 'match after the last newline character'
> let s2 = 'and then you want to test'
> let s3 = 'this is good bye then'
> let s4 = 'who was there to see?'

> const pat3 = /is|the|was|to/g

> Array.from(s1.matchAll(pat3), m => m.index).pop()
< 12
> Array.from(s2.matchAll(pat3), m => m.index).pop()
< 18
> Array.from(s3.matchAll(pat3), m => m.index).pop()
< 17
> Array.from(s4.matchAll(pat3), m => m.index).pop()
< 14
```

**d)** The given input string contains `:` exactly once. Extract all characters after the `:` as output.

```js
> let ip = 'fruits:apple, mango, guava, blueberry'

> ip.match(/:(.*)/)[1]
< "apple, mango, guava, blueberry"
```

**e)** Extract all words between `(` and `)` from the given input string as an array (including the parentheses). Assume that the input will not contain any broken parentheses.

```js
> let ip = 'another (way) to reuse (portion) matched (by) capture groups'

> ip.match(/\(.*?\)/g)
< ["(way)", "(portion)", "(by)"]
```

**f)** Extract all occurrences of `<` up to next occurrence of `>`, provided there is at least one character in between `<` and `>`.

```js
> let ip = 'a<apple> 1<> b<bye> 2<> c<cat>'

> ip.match(/<.+?>/g)
< ["<apple>", "<> b<bye>", "<> c<cat>"]
```

**g)** Use `matchAll` to get the output as shown below for the given input strings. Note the characters used in the input strings carefully.

```js
> let row1 = '-2,5 4,+3 +42,-53 4356246,-357532354 '
> let row2 = '1.32,-3.14 634,5.63 63.3e3,9907809345343.235 '

> const pat4 = /(.+?),(.+?) /g

> Array.from(row1.matchAll(pat4), m => [m[1], m[2]])
< (4) [Array(2), Array(2), Array(2), Array(2)]
  0: (2) ["-2", "5"]
  1: (2) ["4", "+3"]
  2: (2) ["+42", "-53"]
  3: (2) ["4356246", "-357532354"]
  length: 4
  __proto__: Array(0)

> Array.from(row2.matchAll(pat4), m => [m[1], m[2]])
< (3) [Array(2), Array(2), Array(2)]
  0: (2) ["1.32", "-3.14"]
  1: (2) ["634", "5.63"]
  2: (2) ["63.3e3", "9907809345343.235"]
  length: 3
  __proto__: Array(0)
```

**h)** This is an extension to previous question. Sum each pair of numbers that are separated by a comma.

```js
> let row1 = '-2,5 4,+3 +42,-53 4356246,-357532354 '
> let row2 = '1.32,-3.14 634,5.63 63.3e3,9907809345343.235 '

// should be same as previous question
> const pat5 = /(.+?),(.+?) /g

> Array.from(row1.matchAll(pat5), m => +m[1] + +m[2])
< [3, 7, -11, -353176108]

> Array.from(row2.matchAll(pat5), m => +m[1] + +m[2])
< [-1.82, 639.63, 9907809408643.234]
```

**i)** Use `split` method to get the output as shown below.

```js
> let ip = '42:no-output;1000:car-truck;SQEX49801'

> ip.split(/:.+?-(.+?);/)
< ["42", "output", "1000", "truck", "SQEX49801"]
```

**j)** Write a string function that changes given input to alternate case. The first alphabet should be changed to lowercase, the next one to uppercase and then lowercase and so on. Characters other than alphabets should be left alone and not affect case changing.

```js
> function aLtErNaTeCaSe(ip) {
      let b = true
      return ip.replace(/[a-z]/ig, m => (b = !b) ? m.toUpperCase() : m.toLowerCase())
  }

> aLtErNaTeCaSe('HI THERE!')
< "hI tHeRe!"
> aLtErNaTeCaSe('good morning')
< "gOoD mOrNiNg"
> aLtErNaTeCaSe('Sample123string42with777numbers')
< "sAmPlE123sTrInG42wItH777nUmBeRs"
```

**k)** Replace the string `par` with `spar`, `spare` with `extra` and `park` with `garden`

```js
> let s1 = 'apartment has a park'
> let s2 = 'do you have a spare cable'
> let s3 = 'write a parser'

> let d1 = {'par': 'spar', 'spare': 'extra', 'park': 'garden'}
> const pat6 = /spare|park?/g

> s1.replace(pat6, k => d1[k])
< "aspartment has a garden"
> s2.replace(pat6, k => d1[k])
< "do you have a extra cable"
> s3.replace(pat6, k => d1[k])
< "write a sparser"
```

<br>

# Character class

**a)** For the array `items`, filter all elements starting with `hand` and ending with `s` or `y` or `le`. No other character in between, for example, `hands` should match but not `hand-has`.

```js
> let items = ['-handy', 'hand', 'handy', 'handled', 'hands', 'handle']

> items.filter(w => /^hand([sy]|le)$/.test(w))
< ["handy", "hands", "handle"]
```

**b)** Replace all whole words `reed` or `read` or `red` with `X`.

```js
> let ip = 'redo red credible :read: rod reed bred'

> ip.replace(/\bre[ae]?d\b/g, 'X')
< "redo X credible :X: rod X bred"
```

**c)** For the array `words`, filter all elements containing `e` or `i` followed by `l` or `n`. Note that the order mentioned should be followed.

```js
> let words = ['surrender', 'unicorn', 'newer', 'door', 'empty', 'eel', 'pest']

> words.filter(w => /[ei].*[ln]/.test(w))
< ["surrender", "unicorn", "eel"]
```

**d)** For the array `words`, filter all elements containing `e` or `i` and `l` or `n` in any order.

```js
> let words = ['surrender', 'unicorn', 'newer', 'door', 'empty', 'eel', 'pest']

> words.filter(w => /[ei].*[ln]|[ln].*[ei]/.test(w))
< ["surrender", "unicorn", "newer", "eel"]
```

**e)** Extract all hex character sequences, with `0x` optional prefix. Match the characters case insensitively, and the sequences shouldn't be surrounded by other word characters.

```js
> let str1 = '128A foo 0xfe32 34 0xbar'
> let str2 = '0XDEADBEEF place 0x0ff1ce bad'

> const hex_seq = /\b(0x)?[\da-f]+\b/ig

> str1.match(hex_seq)
< ["128A", "0xfe32", "34"]
> str2.match(hex_seq)
< ["0XDEADBEEF", "0x0ff1ce", "bad"]
```

**f)** Delete from `(` to the next occurrence of `)` unless they contain parentheses characters in between.

```js
> let str1 = 'def factorial()'
> let str2 = 'a/b(division) + c%d(#modulo) - (e+(j/k-3)*4)'
> let str3 = 'Hi there(greeting). Nice day(a(b)'

> const remove_parentheses = /\([^()]*\)/g

> str1.replace(remove_parentheses, '')
< "def factorial"
> str2.replace(remove_parentheses, '')
< "a/b + c%d - (e+*4)"
> str3.replace(remove_parentheses, '')
< "Hi there. Nice day(a"
```

**g)** For the array `words`, filter all elements not starting with `e` or `p` or `u`.

```js
> let words = ['surrender', 'unicorn', 'newer', 'door', 'empty', 'eel', 'pest']

> words.filter(w => /^[^epu]/.test(w))
< ["surrender", "newer", "door"]
```

**h)** For the array `words`, filter all elements not containing `u` or `w` or `ee` or `-`.

```js
> let words = ['p-t', 'you', 'tea', 'heel', 'owe', 'new', 'reed', 'ear']

> words.filter(w => !/[uw-]|ee/.test(w))
< ["tea", "ear"]
```

**i)** The given input strings contain fields separated by `,` and fields can be empty too. Replace last three fields with `WHTSZ323`.

```js
> let row1 = '(2),kite,12,,D,C,,'
> let row2 = 'hi,bye,sun,moon'

> const pat1 = /(,[^,]*){3}$/g

> row1.replace(pat1, ',WHTSZ323')
< "(2),kite,12,,D,WHTSZ323"
> row2.replace(pat1, ',WHTSZ323')
< "hi,WHTSZ323"
```

**j)** Split the given strings based on consecutive sequence of digit or whitespace characters.

```js
> let s1 = 'lion \t Ink32onion Nice'
> let s2 = '**1\f2\n3star\t7 77\r**'

> const pat2 = /[\d\s]+/

> s1.split(pat2)
< ["lion", "Ink", "onion", "Nice"]
> s2.split(pat2)
< ["**", "star", "**"]
```

**k)** Delete all occurrences of the sequence `<characters>` where `characters` is one or more non `>` characters and cannot be empty.

```js
> let ip = 'a<apple> 1<> b<bye> 2<> c<cat>'

> ip.replace(/<[^>]+>/g, '')
< "a 1<> b 2<> c"
```

**l)** `\b[a-z](on|no)[a-z]\b` is same as `\b[a-z][on]{2}[a-z]\b`. True or False? Sample input lines shown below might help to understand the differences, if any.

False. `[on]{2}` will also match `oo` and `nn`.

```js
> console.log('known\nmood\nknow\npony\ninns')
  known
  mood
  know
  pony
  inns
```

**m)** For the given array, filter all elements containing any number sequence greater than `624`.

```js
> let items = ['h0000432ab', 'car00625', '42_624 0512', '3.14 96 2 foo1234baz']

> items.filter(e => e.match(/\d+/g).some(m => m > 624))
< ["car00625", "3.14 96 2 foo1234baz"]
```

**n)** Convert the given input string to two different arrays as shown below.

```js
> let ip = 'price_42 roast^\t\n^-ice==cat\neast'

> ip.split(/[\s^=-]+/)
< ["price_42", "roast", "ice", "cat", "east"]

> ip.split(/([\s^=-]+)/)
< ["price_42", " ", "roast", "^	\n^-", "ice", "==", "cat", "\n", "east"]
```

**o)** Filter all elements whose first non-whitespace character is not a `#` character. Any element made up of only whitespace characters should be ignored as well.

```js
> let items = ['    #comment', '\t\napple #42', '#oops', 'sure', 'no#1', '\t\r\f']

> items.filter(e => /^\s*[^#\s]/.test(e))
< ["	\napple #42", "sure", "no#1"]
```

**p)** For the given string, surround all whole words with `{}` except for whole words `par` and `cat`.

```js
> let ip = 'part; cat {super} rest_42 par scatter'

> ip.replace(/\w+/g, w => /\b(par|cat)\b/.test(w) ? w : `{${w}}`)
< "{part}; cat {{super}} {rest_42} par {scatter}"
```

<br>

# Groupings and backreferences

**a)** Replace the space character that occurs after a word ending with `a` or `r` with a newline character.

```js
> let ip = 'area not a _a2_ roar took 22'

> console.log(ip.replace(/([ar]) /g, '$1\n'))
  area
  not a
  _a2_ roar
  took 22
```

**b)** Add `[]` around words starting with `s` and containing `e` and `t` in any order.

```js
> let ip = 'sequoia subtle exhibit asset sets tests site'

> ip.replace(/\bs\w*(t\w*e|e\w*t)\w*/g, '[$&]')
< "sequoia [subtle] exhibit asset [sets] tests [site]"
```

**c)** Replace all whole words with `X` that start and end with the same word character. Single character word should get replaced with `X` too, as it satisfies the stated condition.

```js
> let ip = 'oreo not a _a2_ roar took 22'

> ip.replace(/\b(\w|(\w)\w*\2)\b/g, 'X')
< "X not X X X took X"
```

**d)** Convert the given **markdown** headers to corresponding **anchor** tag. Consider the input to start with one or more `#` characters followed by space and word characters. The `name` attribute is constructed by converting the header to lowercase and replacing spaces with hyphens. Can you do it without using a capture group?

```js
> let header1 = '# Regular Expressions'
> let header2 = '## Named capture groups'

> function hyphenify(m) {
      return `<a name='${m.toLowerCase().replace(/ /g, '-')}'></a>${m}`
  }

> header1.replace(/\w.*/, hyphenify)
< "# <a name='regular-expressions'></a>Regular Expressions"
> header2.replace(/\w.*/, hyphenify)
< "## <a name='named-capture-groups'></a>Named capture groups"
```

**e)** Convert the given **markdown** anchors to corresponding **hyperlinks**.

```js
> let anchor1 = "# <a name='regular-expressions'></a>Regular Expressions"
> let anchor2 = "## <a name='subexpression-calls'></a>Subexpression calls"

> const hyperlink = /[^']+'([^']+)'><\/a>(.*)/

> anchor1.replace(hyperlink, '[$2](#$1)')
< "[Regular Expressions](#regular-expressions)"
> anchor2.replace(hyperlink, '[$2](#$1)')
< "[Subexpression calls](#subexpression-calls)"
```

**f)** Check if given input strings have words with at least two consecutive repeated alphabets irrespective of case. For example, words like `stillnesS` and `Committee` should return `true` but words like `root` or `readable` or `rotational` should return `false`. Consider word to be as defined in regular expression parlance.

```js
> let s1 = 'readable COMMItTEe'
> let s2 = 'rotational sti1lness _foot_'
> let s3 = 'needed repeated'
> let s4 = 'offsh00t'

> const pat1 = /(?:(\w)\1\w*){2}/i

> pat1.test(s1)
true
> pat1.test(s2)
false
> pat1.test(s3)
false
> pat1.test(s4)
true
```

**g)** For the given input string, replace all occurrences of digit sequences with only the unique non-repeating sequence. For example, `232323` should be changed to `23` and `897897` should be changed to `897`. If there no repeats (for example `1234`) or if the repeats end prematurely (for example `12121`), it should not be changed.

```js
> let ip = '1234 2323 453545354535 9339 11 60260260'

> ip.replace(/\b(\d+)\1+\b/g, '$1')
< "1234 23 4535 9339 1 60260260"
```

**h)** Replace sequences made up of words separated by `:` or `.` by the first word of the sequence. Such sequences will end when `:` or `.` is not followed by a word character.

```js
> let ip = 'wow:Good:2_two:five: hi-2 bye kite.777.water.'

> ip.replace(/(\w+)[:.](\w+[:.])+/g, '$1')
< "wow hi-2 bye kite"
```

**i)** Replace sequences made up of words separated by `:` or `.` by the last word of the sequence. Such sequences will end when `:` or `.` is not followed by a word character.

```js
> let ip = 'wow:Good:2_two:five: hi-2 bye kite.777.water.'

> ip.replace(/((\w+)[:.])+/g, '$2')
< "five hi-2 bye water"
```

**j)** Split the given input string on one or more repeated sequence of `cat`.

```js
> let ip = 'firecatlioncatcatcatbearcatcatparrot'

> ip.split(/(?:cat)+/)
< ["fire", "lion", "bear", "parrot"]
```

**k)** For the given input string, find all occurrences of digit sequences with at least one repeating sequence. For example, `232323` and `897897`. If the repeats end prematurely, for example `12121`, it should not be matched.

```js
> let ip = '1234 2323 453545354535 9339 11 60260260'

> const pat2 = /\b(\d+)\1+\b/g

// entire sequences in the output
> ip.match(pat2)
< ["2323", "453545354535", "11"]

// only the unique sequence in the output
> Array.from(ip.matchAll(pat2), m => m[1])
< ["23", "4535", "1"]
```

**l)** Convert the comma separated strings to corresponding key-value pair mapping as shown below. The keys are `name`, `maths` and `phy` for the three fields in the input strings.

```js
> let row1 = 'rohan,75,89'
> let row2 = 'rose,88,92'

> const pat3 = /(?<name>[^,]+),(?<maths>[^,]+),(?<phy>[^,]+)/

> row1.match(pat3).groups
< {name: "rohan", maths: "75", phy: "89"}

> row2.match(pat3).groups
< {name: "rose", maths: "88", phy: "92"}
```

**m)** Surround all whole words with `()`. Additionally, if the whole word is `imp` or `ant`, delete them. Can you do it with single substitution?

```js
> let ip = 'tiger imp goat eagle ant important'

> ip.replace(/\b(?:imp|ant|(\w+))\b/g, '($1)')
< "(tiger) () (goat) (eagle) () (important)"
```

<br>

# Lookarounds

>![info](images/info.svg) Please use lookarounds for solving the following exercises even if you can do it without lookarounds.

**a)** Replace all whole words with `X` unless it is preceded by `(` character.

```js
> let ip = '(apple) guava berry) apple (mango) (grape'

> ip.replace(/(?<!\()\b\w+/g, 'X')
< "(apple) X X) X (mango) (grape"
```

**b)** Replace all whole words with `X` unless it is followed by `)` character.

```js
> let ip = '(apple) guava berry) apple (mango) (grape'

> ip.replace(/\b\w+\b(?!\))/g, 'X')
< "(apple) X berry) X (mango) (X"
```

**c)** Replace all whole words with `X` unless it is preceded by `(` or followed by `)` characters.

```js
> let ip = '(apple) guava berry) apple (mango) (grape'

> ip.replace(/(?<!\()\b\w+\b(?!\))/g, 'X')
< "(apple) X berry) X (mango) (grape"
```

**d)** Extract all whole words that do not end with `e` or `n`.

```js
> let ip = 'at row on urn e note dust n'

> ip.match(/\b\w+\b(?<![en])/g)
< ["at", "row", "dust"]
```

**e)** Extract all whole words that do not start with `a` or `d` or `n`.

```js
> let ip = 'at row on urn e note dust n'

> ip.match(/(?![adn])\b\w+\b/g)
< ["row", "on", "urn", "e"]
```

**f)** Extract all whole words only if they are followed by `:` or `,` or `-`.

```js
> let ip = 'poke,on=-=so:ink.to/is(vast)ever-sit'

> ip.match(/\w+(?=[:,-])/g)
< ["poke", "so", "ever"]
```

**g)** Extract all whole words only if they are preceded by `=` or `/` or `-`.

```js
> let ip = 'poke,on=-=so:ink.to/is(vast)ever-sit'

> ip.match(/(?<=[=\/-])\w+/g)
< ["so", "is", "sit"]
```

**h)** Extract all whole words only if they are preceded by `=` or `:` and followed by `:` or `.`.

```js
> let ip = 'poke,on=-=so:ink.to/is(vast)ever-sit'

> ip.match(/(?<=[=:])\w+(?=[:.])/g)
< ["so", "ink"]
```

**i)** Extract all whole words only if they are preceded by `=` or `:` or `.` or `(` or `-` and not followed by `.` or `/`.

```js
> let ip = 'poke,on=-=so:ink.to/is(vast)ever-sit'

> ip.match(/(?<=[=:.(-])\w+\b(?![\/.])/g)
< ["so", "vast", "sit"]
```

**j)** Remove leading and trailing whitespaces from all the individual fields where `,` is the field separator.

```js
> let csv1 = ' comma  ,separated ,values '
> let csv2 = 'good bad,nice  ice  , 42 , ,   stall   small'

> const trim_whitespace = /(?<=^|,)\s+|\s+(?=,|$)/g

> csv1.replace(trim_whitespace, '')
< "comma,separated,values"
> csv2.replace(trim_whitespace, '')
< "good bad,nice  ice,42,,stall   small"
```

**k)** Filter all elements that satisfy all of these rules:

* should have at least two alphabets
* should have at least 3 digits
* should have at least one special character among `%` or `*` or `#` or `$`
* should not end with a whitespace character

```js
> let pwds = ['hunter2', 'F2h3u%9', '*X3Yz3.14\t', 'r2_d2_42', 'A $B C1234']

> pwds.filter(p => /(?!.*\s$)(?=(.*[a-z]){2})(?=(.*\d){3}).*[%*#$]/i.test(p))
< ["F2h3u%9", "A $B C1234"]
```

**l)** For the given string, surround all whole words with `{}` except for whole words `par` and `cat` and `apple`.

```js
> let ip = 'part; cat {super} rest_42 par scatter apple spar'

> ip.replace(/\b(?!(?:par|cat|apple)\b)\w+\b/g, '{$&}')
< "{part}; cat {{super}} {rest_42} par {scatter} apple {spar}"
```

**m)** Extract integer portion of floating-point numbers for the given string. A number ending with `.` and no further digits should not be considered.

```js
> let ip = '12 ab32.4 go 5 2. 46.42 5'

> ip.match(/\d+(?=\.\d+)/g)
< ["32", "46"]
```

**n)** For the given input strings, extract all overlapping two character sequences.

```js
> let s1 = 'apple'
> let s2 = '1.2-3:4'

> const pat1 = /.(?=(.))/g

> Array.from(s1.matchAll(pat1), m => m[0] + m[1])
< ["ap", "pp", "pl", "le"]
> Array.from(s2.matchAll(pat1), m => m[0] + m[1])
< ["1.", ".2", "2-", "-3", "3:", ":4"]
```

**o)** The given input strings contain fields separated by `:` character. Delete `:` and the last field if there is a digit character anywhere before the last field.

```js
> let s1 = '42:cat'
> let s2 = 'twelve:a2b'
> let s3 = 'we:be:he:0:a:b:bother'

> const pat2 = /(?<=\d.*):[^:]*$/

> s1.replace(pat2, '')
< "42"
> s2.replace(pat2, '')
< "twelve:a2b"
> s3.replace(pat2, '')
< "we:be:he:0:a:b"
```

**p)** Extract all whole words unless they are preceded by `:` or `<=>` or `----` or `#`.

```js
> let ip = '::very--at<=>row|in.a_b#b2c=>lion----east'

> ip.match(/(?<![:#]|<=>|-{4})\b\w+/g)
< ["at", "in", "a_b", "lion"]
```

**q)** Match strings if it contains `qty` followed by `price` but not if there is **whitespace** or the string `error` between them.

```js
> let str1 = '23,qty,price,42'
> let str2 = 'qty price,oh'
> let str3 = '3.14,qty,6,errors,9,price,3'
> let str4 = '42\nqty-6,apple-56,price-234,error'
> let str5 = '4,price,3.14,qty,4'

> const neg = /qty((?!\s|error).)*price/

> neg.test(str1)
< true
> neg.test(str2)
< false
> neg.test(str3)
< false
> neg.test(str4)
< true
> neg.test(str5)
< false
```

**r)** Can you reason out why the output shown is different for these two regular expressions?

`\b` matches both the start and end of word locations. In the below example, `\b..\b` doesn't necessarily mean that first `\b` will match only the start of word location and second `\b` will match only the end of word location. They can be any combination! For example, `I` followed by space in the input string here is using start of word location for both whereas space followed by `2` is using end of word location for both.

In contrast, the negative lookarounds only ensure that there are no word characters around any two characters. And these assertions will always be satisfied at the start of string and the end of string respectively. But `\b` depends on the presence of word characters. So, `!` at the end of the input string here matches the lookaround assertion but not word boundary.

```js
> let ip = 'I have 12, he has 2!'

> ip.replace(/\b..\b/g, '{$&}')
< "{I }have {12}{, }{he} has{ 2}!"

> ip.replace(/(?<!\w)..(?!\w)/g, '{$&}')
< "I have {12}, {he} has {2!}"
```

**s)** Simulate string partitioning to get an array of three elements — string before separator, portion matched by separator and string after separator. For the first case, split the given input string on first occurrence of digits. For the second case, split based on last occurrence of digits.

```js
> let w2 = 'Sample123string42with777numbers'

> w2.split(/(?<!\d.*)(\d+)/)
< ["Sample", "123", "string42with777numbers"]

> w2.split(/(\d+)(?!.*\d)/)
< ["Sample123string42with", "777", "numbers"]
```

**t)** Find the starting index of last occurrence of `is` or `the` or `was` or `to` for the given input strings using `search` method. Assume that there will be at least one match for each input string.

```js
> let s1 = 'match after the last newline character'
> let s2 = 'and then you want to test'
> let s3 = 'this is good bye then'
> let s4 = 'who was there to see?'

> const pat3 = /(is|the|was|to)(?!.*(is|the|was|to))/

> s1.search(pat3)
< 12
> s2.search(pat3)
< 18
> s3.search(pat3)
< 17
> s4.search(pat3)
< 14
```

<br>

# Unicode

**a)** Check if given input strings are made up of ASCII characters only. Consider the input to be non-empty strings and any character that isn't part of 7-bit ASCII set should result in `false` as output.

```js
> let str1 = '123 × 456'
> let str2 = 'good fοοd'
> let str3 = 'happy learning!'

// const pat1 = /^[\x00-\x7f]+$/
> const pat1 = /^\p{ASCII}+$/u

> pat1.test(str1)
< false
> pat1.test(str2)
< false
> pat1.test(str3)
< true
```

**b)** Retain only punctuation characters for the given string.

```js
> let ip = '❨a❩❪1❫❬b❭❮2❯❰c❱❲3❳❴xyz❵⟅123⟆⟦⟧⟨like⟩⟪3.14⟫'

> ip.replace(/\P{P}+/gu, '')
< "❨❩❪❫❬❭❮❯❰❱❲❳❴❵⟅⟆⟦⟧⟨⟩⟪.⟫"
```

**c)** Is the following code snippet showing the correct output?

Yes. Some regular expression engines allow escape sequences like `\d`, `\b`, `\s`, `\w`, etc to be Unicode aware.

```js
> 'fox:αλεπού'.match(/\w+/g)
< ["fox"]
```

