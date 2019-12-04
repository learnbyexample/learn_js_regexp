# RegExp introduction

**a)** Check if the given input strings contain `two` irrespective of case.

```js
> let s1 = 'Their artwork is exceptional'
> let s2 = 'one plus tw0 is not three'
> let s3 = 'TRUSTWORTHY'

> const p1 =        // add your solution here

> p1.test(s1)
< true
> p1.test(s2)
< false
> p1.test(s3)
< true
```

**b)** For the given multiline input string, filter all lines NOT containing the string `2`.

```js
> let purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`

> const num =       // add your solution here

> console.log(purchases.split('\n')
                       .filter()        // add your solution here
                       .join('\n'))
< items qty
  mango 50
  onion 31
  water 10
```

>![info](images/info.svg) You'd be able to solve this using just `replace` method by the end of [Dot metacharacter and Quantifiers](#dot-metacharacter-and-quantifiers) chapter.

**c)** Replace all occurrences of `0xA0` with `0x50` for the given input string.

```js
> let h1 = 'start address: 0xA0, end address: 0xA0B'
> h1.replace()      // add your solution here
< "start address: 0x50, end address: 0x50B"
```

<br>

# Anchors

**a)** Check if the given input strings contain `is` or `the` as whole words.

```js
> let str1 = 'is; (this)'
> let str2 = "The food isn't good"
> let str3 = 'the2 cats'
> let str4 = 'switch on the light'

> const p1 =        // add your solution here
> const p2 =        // add your solution here

> p1.test(str1) || p2.test(str1)
< true
> p1.test(str2) || p2.test(str2)
< false
> p1.test(str3) || p2.test(str3)
< false
> p1.test(str4) || p2.test(str4)
< true
```

**b)** For the given input string, change only whole word `red` to `brown`

```js
> let s1 = 'bred red spread credible red;'

> s1.replace()      // add your solution here
< "bred brown spread credible brown;"
```

**c)** For the given input array, filter all elements that contains `42` surrounded by word characters.

```js
> let a1 = ['hi42bye', 'nice1423', 'bad42', 'cool_42a', 'fake4b']

> a1.filter()       // add your solution here
< ["hi42bye", "nice1423", "cool_42a"]
```

**d)** For the given input list, filter all elements that start with `den` or end with `ly`

```js
> let a2 = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly away', 'dent']

> a2.filter()       // add your solution here
< ["lovely", "2 lonely", "dent"]
```

**e)** For the given input string, change whole word `mall` to `1234` only if it is at the start of line.

```js
> let para = `ball fall wall tall
mall call ball pall
wall mall ball fall
mallet wallet malls`

> console.log(para.replace())       // add your solution here
< ball fall wall tall
  1234 call ball pall
  wall mall ball fall
  mallet wallet malls
```

<br>

# Alternation and Grouping

**a)** For the given input list, filter all elements that start with `den` or end with `ly`

```js
> let a1 = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly away', 'dent']

> a1.filter()       // add your solution here
< ["lovely", "2 lonely", "dent"]
```

**b)** For the given input strings, replace all occurrences of `removed` or `reed` or `received` or `refused` with `X`.

```js
> let s1 = 'creed refuse removed read'
> let s2 = 'refused reed redo received'

> const p1 =        // add your solution here

> s1.replace(p1, 'X')
< "cX refuse X read"
> s2.replace(p1, 'X')
< "X X redo X"
```

**c)** For the given input strings, replace `late` or `later` or `slated` with `A`.

```js
> let str1 = 'plate full of slate'
> let str2 = "slated for later, don't be late"

> const p2 =        // add your solution here

> str1.replace(p2, 'A')
< "pA full of sA"
> str2.replace(p2, 'A')
< "A for A, don't be A"
```

<br>

# Escaping metacharacters

**a)** Transform given input strings to expected output using same logic on both strings.

```js
> let str1 = '(9-2)*5+qty/3'
> let str2 = '(qty+4)/2-(9-2)*5+pq/4'

> const p1 =        // add your solution here
> str1.replace(p1, '35')
< "35+qty/3"
> str2.replace(p1, '35')
< "(qty+4)/2-35+pq/4"
```

**b)** Replace any matching item from given array with `X` for the given input strings.

```js
> let items = ['a.b', '3+n', 'x\\y\\z', 'qty||price', '{n}']
> const p2 =        // add your solution here

> '0a.bcd'.replace(p2, 'X')
< "0Xcd"
> 'E{n}AMPLE'.replace(p2, 'X')
< "EXAMPLE"
> '43+n2 ax\\y\\ze'.replace(p2, 'X')
< "4X2 aXe"
```

<br>

# Dot metacharacter and Quantifiers

>![info](images/info.svg) Some exercises are intentionally designed to be complicated to solve with regular expressions alone. Try to use normal string methods, break down the problem into multiple steps, etc. Some exercises will become easier to solve with techniques presented in chapters to come. Going through the exercises a second time after finishing entire book will be fruitful as well.

**a)** Use regular expression to get the output as shown for the given strings.

```js
> let eqn1 = 'a+42//5-c'
> let eqn2 = 'pressure*3+42/5-14256'
> let eqn3 = 'r*42-5/3+42///5-42/53+a'

> const expr =      // add your solution here

> eqn1              // add your solution here
< ["a+", "-c"]
> eqn2              // add your solution here
< ["pressure*3+", "-14256"]
> eqn3              // add your solution here
< ["r*42-5/3+42///5-", "3+a"]
```

**b)** For the given strings, construct a regexp to get output as shown.

```js
> let str1 = 'a+b(addition)'
> let str2 = 'a/b(division) + c%d(#modulo)'
> let str3 = 'Hi there(greeting). Nice day(a(b)'
> const remove_parentheses =        // add your solution here

> str1.replace(remove_parentheses, '')
< "a+b"
> str2.replace(remove_parentheses, '')
< "a/b + c%d"
> str3.replace(remove_parentheses, '')
< "Hi there. Nice day"
```

**c)** Remove leading/trailing whitespaces from all the individual fields of these csv strings.

```js
> let csv1 = ' comma  ,separated ,values '
> let csv2 = 'good bad,nice  ice  , 42 , ,   stall   small'

> csv1          // add your solution here
< "comma,separated,values"
> csv2          // add your solution here
< "good bad,nice  ice,42,,stall   small"
```

**d)** Correct the given regexp to get the expected output.

```js
> let str4 = 'plink incoming tint winter in caution sentient'

// wrong output
> const pat1 = /int|in|ion|ing|inco|inter|ink/g
> str4.replace(pat1, 'X')
"plXk XcomXg tX wXer X cautX sentient"

// expected output
> const pat2 =      // add your solution here
> str4.replace(pat2, 'X')
"plX XmX tX wX X cautX sentient"
```

**e)** For the given greedy quantifiers, what would be the equivalent form using `{m,n}` representation?

* `?` is same as
* `*` is same as
* `+` is same as

**f)** `(a*|b*)` is same as `(a|b)*` — true or false?

**g)** Delete from the string `start` if it is at beginning of a line up to the next occurrence of the string `end` at end of a line. Match these keywords irrespective of case.

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

> const pat3 =      // add your solution here
> console.log(para.replace(pat3, ''))
< good start
  
  hi there
  
  42
  
  bye
```

<br>

# Working with matched portions

**a)** For the given strings, extract the matching portion from first `is` to last `t`

```js
> let str1 = 'What is the biggest fruit you have seen?'
> let str2 = 'Your mission is to read and practice consistently'

> const p1 =        // add your solution here
> str1.match()      // add your solution here
< "is the biggest fruit"
> str2.match()      // add your solution here
< "ission is to read and practice consistent"
```

**b)** Transform the given input strings to expected output as shown.

```js
> let row1 = '-2,5 4,+3 +42,-53 '
> let row2 = '1.32,-3.14 634,5.63 '

> Array.from(row1)      // add your solution here
< [3, 7, -11]

> Array.from(row2)      // add your solution here
< [-1.82, 639.63]
```

**c)** Write a string function that changes given input to alternate case. The first alphabet should be changed to lowercase, the next one to uppercase and then lowercase and so on. Characters other than alphabets should be left alone and not affect case changing.

```js
> function aLtErNaTeCaSe(ip) {
      // add your solution here
  }

> aLtErNaTeCaSe('HI THERE!')
< "hI tHeRe!"
> aLtErNaTeCaSe('good morning')
< "gOoD mOrNiNg"
> aLtErNaTeCaSe('Sample123string42with777numbers')
< "sAmPlE123sTrInG42wItH777nUmBeRs"
```

**d)** Replace the string `par` with `spar`, `spare` with `extra` and `park` with `garden`

```js
> let str3 = 'apartment has a park'
> let str4 = 'do you have a spare cable'
> let str5 = 'write a parser'

> let d1 =          // add your solution here
> const p2 =        // add your solution here

> str3.replace(p2, k => d1[k])
< "aspartment has a garden"
> str4.replace(p2, k => d1[k])
< "do you have a extra cable"
> str5.replace(p2, k => d1[k])
< "write a sparser"
```

<br>

# Character class

**a)** Delete all pair of parentheses, unless they contain a parentheses character.

```js
> let str1 = 'def factorial()'
> let str2 = 'a/b(division) + c%d(#modulo) - (e+(j/k-3)*4)'
> let str3 = 'Hi there(greeting). Nice day(a(b)'

> const remove_parentheses =        // add your solution here
> str1.replace(remove_parentheses, '')
< "def factorial"
> str2.replace(remove_parentheses, '')
< "a/b + c%d - (e+*4)"
> str3.replace(remove_parentheses, '')
< "Hi there. Nice day(a"
```

**b)** Output true/false depending upon input string containing any number sequence that is greater than `624`

```js
> let n1 = 'hi0000432abcd'
> let n2 = '42_624 0512'
> let n3 = '3.14 96 2 foo1234baz'

> n1.match()        // add your solution here
< false
> n2.match()        // add your solution here
< false
> n3.match()        // add your solution here
< true
```

**c)** Split the given strings based on consecutive sequence of digit or whitespace characters.

```js
> let s1 = 'lion \t Ink32onion Nice'
> let s2 = '**1\f2\n3star\t7 77\r**'

> const p1 =        // add your solution here
> s1.split(p1)
< ["lion", "Ink", "onion", "Nice"]
> s2.split(p1)
< ["**", "star", "**"]
```

**d)** Extract all hex character sequences, with optional `0x` prefix. Match the characters case insensitively, and sequences surrounded by other word characters shouldn't be matched.

```js
> const hex_seq =       // add your solution here

> '128A foo 0xfe32 34 0xbar'.match(hex_seq)
< ["128A", "0xfe32", "34"]

> '0XDEADBEEF lace 0x0ff1ce bad'.match(hex_seq)
< ["0XDEADBEEF", "0x0ff1ce", "bad"]
```

**e)** For the given string, surround all whole words with `{}` except for whole words `par` and `cat`.

```js
> let w1 = 'part; cat {super} rest_42 par scatter'

> w1.replace()          // add your solution here
< "{part}; cat {{super}} {rest_42} par {scatter}"
```

<br>

# Groupings and backreferences

**a)** The given string has fields separated by `:` and each field has a floating point number followed by a `,` and a string. If the floating point number has only one digit precision, append `0` and swap the strings separated by `,` for that particular field.

```js
> let row = '3.14,hi:42.5,bye:1056.1,cool:00.9,fool'

> row.replace()         // add your solution here
< "3.14,hi:bye,42.50:cool,1056.10:fool,00.90"
```

**b)** Check if given input strings have at least two consecutive repeated alphabets irrespective of case. For example, words like `stillnesS` and `Committee` should return `true` but words like `root` or `readable` or `rotational` should return `false`. Consider word to be as defined in regular expression parlance.

```js
> let s1 = 'readable COMMItTEe'
> let s2 = 'rotational sti1lness _foot_'
> let s3 = 'needed repeated'
> let s4 = 'offsh00t'

> const p1 =        // add your solution here

> p1.test(s1)
true
> p1.test(s2)
false
> p1.test(s3)
false
> p1.test(s4)
true
```

**c)** Convert the given **markdown** headers to corresponding **anchor** tag. Consider the input to start with one or more `#` characters followed by space and word characters. The `name` attribute is constructed by converting the header to lowercase and replacing spaces with hyphens. Can you do it without using a capture group?

```js
> let header1 = '# Regular Expressions'
> let header2 = '## Named capture groups'

> function hyphenify(m) {
      // add your solution here
  }

> header1.replace()         // add your solution here
< "# <a name='regular-expressions'></a>Regular Expressions"
> header2.replace()         // add your solution here
< "## <a name='named-capture-groups'></a>Named capture groups"
```

**d)** Convert the given **markdown** anchors to corresponding **hyperlinks**.

```js
> let anchor1 = "# <a name='regular-expressions'></a>Regular Expressions"
> let anchor2 = "## <a name='subexpression-calls'></a>Subexpression calls"
> const hyperlink =         // add your solution here

> anchor1.replace()         // add your solution here
< "[Regular Expressions](#regular-expressions)"
> anchor2.replace()         // add your solution here
< "[Subexpression calls](#subexpression-calls)"
```

**e)** Use appropriate regular expression method to get the expected output for given string.

```js
> let str1 = 'price_42 roast: :-ice==cat east'

> str1.split()          // add your solution here
< ["price_42", " ", "roast", ": :-", "ice", "==", "cat", " ", "east"]
```

<br>

# Lookarounds

**a)** Remove leading and trailing whitespaces from all the individual fields of these csv strings. This time use regular expressions instead of chaining normal string methods.

```js
> let csv1 = ' comma  ,separated ,values '
> let csv2 = 'good bad,nice  ice  , 42 , ,   stall   small'

> const trim_whitespace =       // add your solution here
> csv1.replace(trim_whitespace, '')
< "comma,separated,values"
> csv2.replace(trim_whitespace, '')
< "good bad,nice  ice,42,,stall   small"
```

**b)** Filter all elements that satisfy all of these rules:

* should have at least two alphabets
* should have at least 3 digits
* should have at least one special character among `%` or `*` or `#` or `$`
* should not end with a whitespace character

```js
> let pwds = ['hunter2', 'F2h3u%9', '*X3Yz3.14\t', 'r2_d2_42', 'A $B C1234']

> pwds.filter()         // add your solution here
< ["F2h3u%9", "A $B C1234"]
```

**c)** Match strings if it contains `qty` followed by `price` but not if there is **whitespace** or the string `error` between them.

```js
> let str1 = '23,qty,price,42'
> let str2 = 'qty price,oh'
> let str3 = '3.14,qty,6,errors,9,price,3'
> let str4 = '42\nqty-6,apple-56,price-234,error'
> let str5 = '4,price,3.14,qty,4'

> const neg =           // add your solution here
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

**d)** For the given string, surround all whole words with `{}` except for whole words `par` and `cat`. Can you solve it with lookarounds and not having to use function in replacement section?

```js
> let w1 = 'part; cat {super} rest_42 par scatter spar'

> w1.replace()          // add your solution here
< "{part}; cat {{super}} {rest_42} par {scatter} {spar}"
```

**e)** Simulate string partitioning to get an array of three elements — string before separator, portion matched by separator and string after separator. For the first case, split the given input string on first occurrence of digits. For the second case, split based on last occurrence of digits.

```js
> let w2 = 'Sample123string42with777numbers'

> w2.split()            // add your solution here
< ["Sample", "123", "string42with777numbers"]

> w2.split()            // add your solution here
< ["Sample123string42with", "777", "numbers"]
```

**Bonus**: Can you solve this exercise without lookarounds?

```js
// w2 = 'Sample123string42with777numbers'

> w2.match()            // add your solution here
< ["Sample", "123", "string42with777numbers"]

> w2.match()            // add your solution here
< ["Sample123string42with", "777", "numbers"]
```

<br>

# Unicode

**a)** Check if given input strings are made up of ASCII characters only. Consider the input to be non-empty strings and any character that isn't part of 7-bit ASCII set should result in `false` as output.

```js
> let str1 = '123 × 456'
> let str2 = 'good fοοd'
> let str3 = 'happy learning!'

> const p1 =        // add your solution here

> p1.test(str1)
< false
> p1.test(str2)
< false
> p1.test(str3)
< true
```

**b)** Retain only punctuation characters for the given string.

```js
> let s1 = '❨a❩❪1❫❬b❭❮2❯❰c❱❲3❳❴xyz❵⟅123⟆⟦⟧⟨like⟩⟪3.14⟫'

> s1.replace()      // add your solution here
< "❨❩❪❫❬❭❮❯❰❱❲❳❴❵⟅⟆⟦⟧⟨⟩⟪.⟫"
```

**c)** Is the following code snippet showing the correct output?

```js
> 'fox:αλεπού'.match(/\w+/g)
< ["fox"]
```

