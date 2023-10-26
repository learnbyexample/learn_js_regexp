// Unicode character sets and the u flag

'fox:αλεπού,eagle:αετός'.match(/\p{L}+/gu)

'fox:αλεπού,eagle:αετός'.match(/\p{sc=Greek}+/gu)

'φοο12,βτ_4,fig'.replace(/\P{L}+/gu, '')

'tie. ink east;'.match(/(?<!\p{P})\b\w+\b(?!\p{P})/gu)

// v flag

'🌅, 🇦🇶 and 🔥'.match(/\p{Basic_Emoji}/gv)

'🌅, 🇦🇶 and 🔥'.match(/\p{RGI_Emoji_Flag_Sequence}/gv)

let para = '"Hi", there! How *are* you? All fine here.'

para.replace(/[\p{P}--[.!?]]+/gv, '')

'tryst glyph pity why'.match(/\b[[a-z]&&[^aeiou]]+\b/gv)

// Codepoints

Array.from('fox:αλεπού', c => c.codePointAt().toString(16))

'\u{3b1}'

'fox:αλεπού,eagle:αετός'.match(/[\u{61}-\u{7a}]+/gu)

