const layouts = [
  {
    key: "Backquote",
    ru: {
      lowercase: "ё",
      uppercase: "Ё",
      capsLowercase: "Ё",
      capsUppercase: "ё",
    },
    en: {
      lowercase: "`",
      uppercase: "~",
      capsLowercase: "`",
      capsUppercase: "~",
    },
  },
  {
    key: "Digit1",
    ru: {
      lowercase: "1",
      uppercase: "!",
      capsLowercase: "1",
      capsUppercase: "!",
    },
    en: {
      lowercase: "1",
      uppercase: "!",
      capsLowercase: "1",
      capsUppercase: "!",
    },
  },
  {
    key: "Digit2",
    ru: {
      lowercase: "2",
      uppercase: '"',
      capsLowercase: "2",
      capsUppercase: '"',
    },
    en: {
      lowercase: "2",
      uppercase: "@",
      capsLowercase: "2",
      capsUppercase: "@",
    },
  },
  {
    key: "Digit3",
    ru: {
      lowercase: "3",
      uppercase: "№",
      capsLowercase: "3",
      capsUppercase: "№",
    },
    en: {
      lowercase: "3",
      uppercase: "#",
      capsLowercase: "3",
      capsUppercase: "#",
    },
  },
  {
    key: "Digit4",
    ru: {
      lowercase: "4",
      uppercase: ";",
      capsLowercase: "4",
      capsUppercase: ";",
    },
    en: {
      lowercase: "4",
      uppercase: "$",
      capsLowercase: "4",
      capsUppercase: "$",
    },
  },
  {
    key: "Digit5",
    ru: {
      lowercase: "5",
      uppercase: "%",
      capsLowercase: "5",
      capsUppercase: "%",
    },
    en: {
      lowercase: "5",
      uppercase: "%",
      capsLowercase: "5",
      capsUppercase: "%",
    },
  },
  {
    key: "Digit6",
    ru: {
      lowercase: "6",
      uppercase: ":",
      capsLowercase: "6",
      capsUppercase: ":",
    },
    en: {
      lowercase: "6",
      uppercase: "^",
      capsLowercase: "6",
      capsUppercase: "^",
    },
  },
  {
    key: "Digit7",
    ru: {
      lowercase: "7",
      uppercase: "?",
      capsLowercase: "7",
      capsUppercase: "?",
    },
    en: {
      lowercase: "7",
      uppercase: "&",
      capsLowercase: "7",
      capsUppercase: "&",
    },
  },
  {
    key: "Digit8",
    ru: {
      lowercase: "8",
      uppercase: "*",
      capsLowercase: "8",
      capsUppercase: "*",
    },
    en: {
      lowercase: "8",
      uppercase: "*",
      capsLowercase: "8",
      capsUppercase: "*",
    },
  },
  {
    key: "Digit9",
    ru: {
      lowercase: "9",
      uppercase: "(",
      capsLowercase: "9",
      capsUppercase: "(",
    },
    en: {
      lowercase: "9",
      uppercase: "(",
      capsLowercase: "9",
      capsUppercase: "(",
    },
  },
  {
    key: "Digit0",
    ru: {
      lowercase: "0",
      uppercase: ")",
      capsLowercase: "0",
      capsUppercase: ")",
    },
    en: {
      lowercase: "0",
      uppercase: ")",
      capsLowercase: "0",
      capsUppercase: ")",
    },
  },
  {
    key: "Minus",
    ru: {
      lowercase: "-",
      uppercase: "_",
      capsLowercase: "-",
      capsUppercase: "_",
    },
    en: {
      lowercase: "-",
      uppercase: "_",
      capsLowercase: "-",
      capsUppercase: "_",
    },
  },
  {
    key: "Equal",
    ru: {
      lowercase: "=",
      uppercase: "+",
      capsLowercase: "=",
      capsUppercase: "+",
    },
    en: {
      lowercase: "=",
      uppercase: "+",
      capsLowercase: "=",
      capsUppercase: "+",
    },
  },
  {
    key: "Backspace",
    ru: {
      lowercase: "backspace",
      uppercase: "backspace",
      capsLowercase: "backspace",
      capsUppercase: "backspace",
    },
    en: {
      lowercase: "backspace",
      uppercase: "backspace",
      capsLowercase: "backspace",
      capsUppercase: "backspace",
    },
  },
  {
    key: "Tab",
    ru: {
      lowercase: "tab",
      uppercase: "tab",
      capsLowercase: "tab",
      capsUppercase: "tab",
    },
    en: {
      lowercase: "tab",
      uppercase: "tab",
      capsLowercase: "tab",
      capsUppercase: "tab",
    },
  },
  {
    key: "KeyQ",
    ru: {
      lowercase: "й",
      uppercase: "Й",
      capsLowercase: "Й",
      capsUppercase: "й",
    },
    en: {
      lowercase: "q",
      uppercase: "Q",
      capsLowercase: "Q",
      capsUppercase: "q",
    },
  },
  {
    key: "KeyW",
    ru: {
      lowercase: "ц",
      uppercase: "Ц",
      capsLowercase: "Ц",
      capsUppercase: "ц",
    },
    en: {
      lowercase: "w",
      uppercase: "W",
      capsLowercase: "W",
      capsUppercase: "w",
    },
  },
  {
    key: "KeyE",
    ru: {
      lowercase: "у",
      uppercase: "У",
      capsLowercase: "У",
      capsUppercase: "у",
    },
    en: {
      lowercase: "e",
      uppercase: "E",
      capsLowercase: "E",
      capsUppercase: "e",
    },
  },
  {
    key: "KeyR",
    ru: {
      lowercase: "к",
      uppercase: "К",
      capsLowercase: "К",
      capsUppercase: "к",
    },
    en: {
      lowercase: "r",
      uppercase: "R",
      capsLowercase: "R",
      capsUppercase: "r",
    },
  },
  {
    key: "KeyT",
    ru: {
      lowercase: "е",
      uppercase: "Е",
      capsLowercase: "Е",
      capsUppercase: "е",
    },
    en: {
      lowercase: "t",
      uppercase: "T",
      capsLowercase: "T",
      capsUppercase: "t",
    },
  },
  {
    key: "KeyY",
    ru: {
      lowercase: "н",
      uppercase: "Н",
      capsLowercase: "Н",
      capsUppercase: "н",
    },
    en: {
      lowercase: "y",
      uppercase: "Y",
      capsLowercase: "Y",
      capsUppercase: "y",
    },
  },
  {
    key: "KeyU",
    ru: {
      lowercase: "г",
      uppercase: "Г",
      capsLowercase: "Г",
      capsUppercase: "г",
    },
    en: {
      lowercase: "u",
      uppercase: "U",
      capsLowercase: "U",
      capsUppercase: "u",
    },
  },
  {
    key: "KeyI",
    ru: {
      lowercase: "ш",
      uppercase: "Ш",
      capsLowercase: "Ш",
      capsUppercase: "ш",
    },
    en: {
      lowercase: "i",
      uppercase: "I",
      capsLowercase: "I",
      capsUppercase: "i",
    },
  },
  {
    key: "KeyO",
    ru: {
      lowercase: "щ",
      uppercase: "Щ",
      capsLowercase: "Щ",
      capsUppercase: "щ",
    },
    en: {
      lowercase: "o",
      uppercase: "O",
      capsLowercase: "O",
      capsUppercase: "o",
    },
  },
  {
    key: "KeyP",
    ru: {
      lowercase: "з",
      uppercase: "З",
      capsLowercase: "З",
      capsUppercase: "з",
    },
    en: {
      lowercase: "p",
      uppercase: "P",
      capsLowercase: "P",
      capsUppercase: "p",
    },
  },
  {
    key: "BracketLeft",
    ru: {
      lowercase: "х",
      uppercase: "Х",
      capsLowercase: "Х",
      capsUppercase: "х",
    },
    en: {
      lowercase: "[",
      uppercase: "{",
      capsLowercase: "[",
      capsUppercase: "{",
    },
  },
  {
    key: "BracketRight",
    ru: {
      lowercase: "ъ",
      uppercase: "Ъ",
      capsLowercase: "Ъ",
      capsUppercase: "ъ",
    },
    en: {
      lowercase: "]",
      uppercase: "}",
      capsLowercase: "]",
      capsUppercase: "}",
    },
  },
  {
    key: "Backslash",
    ru: {
      lowercase: "\\",
      uppercase: "|",
      capsLowercase: "\\",
      capsUppercase: "|",
    },
    en: {
      lowercase: "\\",
      uppercase: "|",
      capsLowercase: "\\",
      capsUppercase: "|",
    },
  },
  {
    key: "Delete",
    ru: {
      lowercase: "Del",
      uppercase: "Del",
      capsLowercase: "Del",
      capsUppercase: "Del",
    },
    en: {
      lowercase: "Del",
      uppercase: "Del",
      capsLowercase: "Del",
      capsUppercase: "Del",
    },
  },
  {
    key: "CapsLock",
    ru: {
      lowercase: "capslock",
      uppercase: "capslock",
      capsLowercase: "capslock",
      capsUppercase: "capslock",
    },
    en: {
      lowercase: "capslock",
      uppercase: "capslock",
      capsLowercase: "capslock",
      capsUppercase: "capslock",
    },
  },
  {
    key: "KeyA",
    ru: {
      lowercase: "ф",
      uppercase: "Ф",
      capsLowercase: "Ф",
      capsUppercase: "ф",
    },
    en: {
      lowercase: "a",
      uppercase: "A",
      capsLowercase: "A",
      capsUppercase: "a",
    },
  },
  {
    key: "KeyS",
    ru: {
      lowercase: "ы",
      uppercase: "Ы",
      capsLowercase: "Ы",
      capsUppercase: "ы",
    },
    en: {
      lowercase: "s",
      uppercase: "S",
      capsLowercase: "S",
      capsUppercase: "s",
    },
  },
  {
    key: "KeyD",
    ru: {
      lowercase: "в",
      uppercase: "В",
      capsLowercase: "В",
      capsUppercase: "в",
    },
    en: {
      lowercase: "d",
      uppercase: "D",
      capsLowercase: "D",
      capsUppercase: "d",
    },
  },
  {
    key: "KeyF",
    ru: {
      lowercase: "а",
      uppercase: "А",
      capsLowercase: "А",
      capsUppercase: "а",
    },
    en: {
      lowercase: "f",
      uppercase: "F",
      capsLowercase: "F",
      capsUppercase: "f",
    },
  },
  {
    key: "KeyG",
    ru: {
      lowercase: "п",
      uppercase: "П",
      capsLowercase: "П",
      capsUppercase: "п",
    },
    en: {
      lowercase: "g",
      uppercase: "G",
      capsLowercase: "G",
      capsUppercase: "g",
    },
  },
  {
    key: "KeyH",
    ru: {
      lowercase: "р",
      uppercase: "Р",
      capsLowercase: "Р",
      capsUppercase: "р",
    },
    en: {
      lowercase: "h",
      uppercase: "H",
      capsLowercase: "H",
      capsUppercase: "h",
    },
  },
  {
    key: "KeyJ",
    ru: {
      lowercase: "о",
      uppercase: "О",
      capsLowercase: "О",
      capsUppercase: "о",
    },
    en: {
      lowercase: "j",
      uppercase: "J",
      capsLowercase: "J",
      capsUppercase: "j",
    },
  },
  {
    key: "KeyK",
    ru: {
      lowercase: "л",
      uppercase: "Л",
      capsLowercase: "Л",
      capsUppercase: "л",
    },
    en: {
      lowercase: "k",
      uppercase: "K",
      capsLowercase: "K",
      capsUppercase: "k",
    },
  },
  {
    key: "KeyL",
    ru: {
      lowercase: "д",
      uppercase: "Д",
      capsLowercase: "Д",
      capsUppercase: "д",
    },
    en: {
      lowercase: "l",
      uppercase: "L",
      capsLowercase: "L",
      capsUppercase: "l",
    },
  },
  {
    key: "Semicolon",
    ru: {
      lowercase: "ж",
      uppercase: "Ж",
      capsLowercase: "Ж",
      capsUppercase: "ж",
    },
    en: {
      lowercase: ";",
      uppercase: ":",
      capsLowercase: ";",
      capsUppercase: ":",
    },
  },
  {
    key: "Quote",
    ru: {
      lowercase: "э",
      uppercase: "Э",
      capsLowercase: "Э",
      capsUppercase: "э",
    },
    en: {
      lowercase: "'",
      uppercase: '"',
      capsLowercase: "'",
      capsUppercase: '"',
    },
  },
  {
    key: "Enter",
    ru: {
      lowercase: "enter",
      uppercase: "enter",
      capsLowercase: "enter",
      capsUppercase: "enter",
    },
    en: {
      lowercase: "enter",
      uppercase: "enter",
      capsLowercase: "enter",
      capsUppercase: "enter",
    },
  },

  {
    key: "ShiftLeft",
    ru: {
      lowercase: "shift",
      uppercase: "shift",
      capsLowercase: "shift",
      capsUppercase: "shift",
    },
    en: {
      lowercase: "shift",
      uppercase: "shift",
      capsLowercase: "shift",
      capsUppercase: "shift",
    },
  },
  {
    key: "KeyZ",
    ru: {
      lowercase: "я",
      uppercase: "Я",
      capsLowercase: "Я",
      capsUppercase: "я",
    },
    en: {
      lowercase: "z",
      uppercase: "Z",
      capsLowercase: "Z",
      capsUppercase: "z",
    },
  },
  {
    key: "KeyX",
    ru: {
      lowercase: "ч",
      uppercase: "Ч",
      capsLowercase: "Ч",
      capsUppercase: "ч",
    },
    en: {
      lowercase: "x",
      uppercase: "X",
      capsLowercase: "X",
      capsUppercase: "x",
    },
  },
  {
    key: "KeyC",
    ru: {
      lowercase: "с",
      uppercase: "С",
      capsLowercase: "С",
      capsUppercase: "с",
    },
    en: {
      lowercase: "c",
      uppercase: "C",
      capsLowercase: "C",
      capsUppercase: "c",
    },
  },
  {
    key: "KeyV",
    ru: {
      lowercase: "м",
      uppercase: "М",
      capsLowercase: "М",
      capsUppercase: "м",
    },
    en: {
      lowercase: "v",
      uppercase: "V",
      capsLowercase: "V",
      capsUppercase: "v",
    },
  },
  {
    key: "KeyB",
    ru: {
      lowercase: "и",
      uppercase: "И",
      capsLowercase: "И",
      capsUppercase: "и",
    },
    en: {
      lowercase: "b",
      uppercase: "B",
      capsLowercase: "B",
      capsUppercase: "b",
    },
  },
  {
    key: "KeyN",
    ru: {
      lowercase: "т",
      uppercase: "Т",
      capsLowercase: "Т",
      capsUppercase: "т",
    },
    en: {
      lowercase: "n",
      uppercase: "N",
      capsLowercase: "N",
      capsUppercase: "n",
    },
  },
  {
    key: "KeyM",
    ru: {
      lowercase: "ь",
      uppercase: "Ь",
      capsLowercase: "Ь",
      capsUppercase: "ь",
    },
    en: {
      lowercase: "m",
      uppercase: "M",
      capsLowercase: "M",
      capsUppercase: "m",
    },
  },
  {
    key: "Comma",
    ru: {
      lowercase: "б",
      uppercase: "Б",
      capsLowercase: "Б",
      capsUppercase: "б",
    },
    en: {
      lowercase: ",",
      uppercase: "<",
      capsLowercase: ",",
      capsUppercase: "<",
    },
  },
  {
    key: "Period",
    ru: {
      lowercase: "ю",
      uppercase: "Ю",
      capsLowercase: "Ю",
      capsUppercase: "ю",
    },
    en: {
      lowercase: ".",
      uppercase: ">",
      capsLowercase: ".",
      capsUppercase: ">",
    },
  },
  {
    key: "Slash",
    ru: {
      lowercase: ".",
      uppercase: ",",
      capsLowercase: ".",
      capsUppercase: ",",
    },
    en: {
      lowercase: "/",
      uppercase: "?",
      capsLowercase: "/",
      capsUppercase: "?",
    },
  },
  {
    key: "ArrowLeft",
    ru: {
      uppercase: "←",
      lowercase: "←",
      capsLowercase: "←",
      capsUppercase: "←",
    },
    en: {
      lowercase: "←",
      uppercase: "←",
      capsLowercase: "←",
      capsUppercase: "←",
    },
  },
  {
    key: "ArrowUp",
    ru: {
      lowercase: "↑",
      uppercase: "↑",
      capsLowercase: "↑",
      capsUppercase: "↑",
    },
    en: {
      lowercase: `↑`,
      uppercase: "↑",
      capsLowercase: "↑",
      capsUppercase: "↑",
    },
  },
  {
    key: "ShiftRight",
    ru: {
      lowercase: "shift",
      uppercase: "shift",
      capsLowercase: "shift",
      capsUppercase: "shift",
    },
    en: {
      lowercase: "shift",
      uppercase: "shift",
      capsLowercase: "shift",
      capsUppercase: "shift",
    },
  },
  {
    key: "ControlLeft",
    ru: {
      lowercase: "ctrl",
      uppercase: "ctrl",
      capsLowercase: "ctrl",
      capsUppercase: "ctrl",
    },
    en: {
      lowercase: "ctrl",
      uppercase: "ctrl",
      capsLowercase: "ctrl",
      capsUppercase: "ctrl",
    },
  },
  {
    key: "MetaLeft",
    ru: {
      lowercase: "win",
      uppercase: "win",
      capsLowercase: "win",
      capsUppercase: "win",
    },
    en: {
      lowercase: "win",
      uppercase: "win",
      capsLowercase: "win",
      capsUppercase: "win",
    },
  },
  {
    key: "AltLeft",
    ru: {
      lowercase: "alt",
      uppercase: "alt",
      capsLowercase: "alt",
      capsUppercase: "alt",
    },
    en: {
      lowercase: "alt",
      uppercase: "alt",
      capsLowercase: "alt",
      capsUppercase: "alt",
    },
  },
  {
    key: "Space",
    ru: {
      lowercase: "space",
      uppercase: "space",
      capsLowercase: "space",
      capsUppercase: "space",
    },
    en: {
      lowercase: "space",
      uppercase: "space",
      capsLowercase: "space",
      capsUppercase: "space",
    },
  },
  {
    key: "AltRight",
    ru: {
      lowercase: "alt",
      uppercase: "alt",
      capsLowercase: "alt",
      capsUppercase: "alt",
    },
    en: {
      lowercase: "alt",
      uppercase: "alt",
      capsLowercase: "alt",
      capsUppercase: "alt",
    },
  },
  {
    key: "MetaRight",
    ru: {
      lowercase: "win",
      uppercase: "win",
      capsLowercase: "win",
      capsUppercase: "win",
    },
    en: {
      lowercase: "win",
      uppercase: "win",
      capsLowercase: "win",
      capsUppercase: "win",
    },
  },
  {
    key: "ControlRight",
    ru: {
      lowercase: "ctrl",
      uppercase: "ctrl",
      capsLowercase: "ctrl",
      capsUppercase: "ctrl",
    },
    en: {
      lowercase: "ctrl",
      uppercase: "ctrl",
      capsLowercase: "ctrl",
      capsUppercase: "ctrl",
    },
  },
  {
    key: "ArrowDown",
    ru: {
      lowercase: "↓",
      uppercase: "↓",
      capsLowercase: "↓",
      capsUppercase: "↓",
    },
    en: {
      lowercase: "↓",
      uppercase: "↓;",
      capsLowercase: "↓",
      capsUppercase: "↓",
    },
  },
  {
    key: "ArrowRight",
    ru: {
      lowercase: "→",
      uppercase: "→",
      capsLowercase: "→",
      capsUppercase: "→",
    },
    en: {
      lowercase: "→",
      uppercase: "→",
      capsLowercase: "→",
      capsUppercase: "→",
    },
  },
]

export default layouts
