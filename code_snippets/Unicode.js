// Unicode character sets and u flag

'fox:αλεπού,eagle:αετός'.match(/\p{L}+/gu)

'φοο12,βτ_4,foo'.replace(/\P{L}+/gu, '')

'tie. ink east;'.match(/(?<!\p{P})\b\w+\b(?!\p{P})/gu)

// Codepoints

Array.from('fox:αλεπού', c => c.codePointAt().toString(16))

'\u{3b1}'

'fox:αλεπού,eagle:αετός'.match(/[\u{61}-\u{7a}]+/gu)

