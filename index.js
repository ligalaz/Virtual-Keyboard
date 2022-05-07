import footerHTML from "./modules/footer.js"
import layouts from "./modules/layouts.js"

/*import layouts*/

/* create structure */
document.addEventListener("DOMContentLoaded", () => {
  textArea.focus()
})
class Structure {}

let body = document.body
let main = document.createElement("main")
let footer = document.createElement("footer")
let structure = new Array()
let textRow = document.createElement("div")
textRow.className = "text_row"
let textArea = document.createElement("textarea")
textArea.style.resize = "none"
textArea.placeholder = `Press  key "Alt+Shift" on the keyboard or virtual keyboard to change the language`

let keyboard = document.createElement("div")
keyboard.className = "keyboard"
let button = document.createElement("div")
button.className = "keyButton"
let switcher = document.createElement("div")
switcher.className = "switcher"
textRow.prepend(switcher)
let langRu = document.createElement("div")
langRu.className = "lang_ru"
langRu.textContent = "RU"
let langEn = document.createElement("div")
langEn.className = "lang_en"
langEn.textContent = "EN"
switcher.append(langEn, langRu)

function createStructure(elem) {
  let container = document.createElement("div")
  let row = document.createElement("div")
  container.className = "container"
  row.className = `${elem.tagName.toLowerCase()}_row`
  body.prepend(elem)
  elem.append(container)
  container.append(row)
  structure.push(row)
  return structure
}
createStructure(footer)
createStructure(main)

structure[0].innerHTML = footerHTML
structure[1].append(textRow)
textRow.append(textArea)
structure[1].append(keyboard)

const big = [13, 29, 42]
const middle = [14, 28, 41, 56, 61]

let lang = localStorage.getItem("lang") || "en"

/* KEY BUTTON INIT */

const regExp = /(Shift|Alt|Caps)/

let inc = 0
const song = "../assets/audio/keyClick.mp3"
function audio(song) {
  let audio = new Audio(song)
  audio.play()
}

let buttonsContainer = new Array()

class keyButton {
  constructor(className, tag) {
    this.className = className
    this.tag = tag
    this.id = layouts[inc].key
  }
  create() {
    this.elem = document.createElement(this.tag)
    return this.elem
  }
  addClassName() {
    this.elem.className = this.className
    return this.elem
  }

  addAttributes() {
    this.elem.setAttribute("data-key", this.id)
    this.elem.setAttribute("caps", false)
    this.elem.setAttribute("shift", false)
    layouts[inc].special ? this.elem.setAttribute("special", true) : null

    return this.elem
  }

  init() {
    this.create()
    this.addClassName()
    this.addAttributes()
    this.elem.textContent = `${layouts[inc][lang].lowercase}`
    inc++
    return this.elem
  }
}

for (let i = 0; i <= 64; i++) {
  buttonsContainer.push(new keyButton("keyButton", "div").init())
}

buttonsContainer.map((item, index) => {
  if (big.includes(index)) {
    item.style.width = "120px"
  }
  if (middle.includes(index)) {
    item.style.width = "90px"
  }
  if (index === 59) {
    item.style.width = "360px"
  }
})

keyboard.append(...buttonsContainer)
/* combine container */
const altContainer = buttonsContainer.filter((item) =>
  new RegExp("Alt", "g").test(item.getAttribute("data-key"))
)
const shiftContainer = buttonsContainer.filter((item) =>
  new RegExp("Shift", "g").test(item.getAttribute("data-key"))
)
const ctrlContainer = buttonsContainer.filter((item) =>
  new RegExp("Control", "g").test(item.getAttribute("data-key"))
)
const metaContainer = buttonsContainer.filter((item) =>
  new RegExp("Meta", "g").test(item.getAttribute("data-key"))
)

keyboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("keyButton")) {
    audio(song)
    event.target.classList.add("animation-click")

    /* Regular Button */

    if (!event.target.hasAttribute("special")) {
      if (textArea.selectionStart === textArea.selectionEnd) {
        textArea.setRangeText(
          `${event.target.textContent}`,
          textArea.selectionStart,
          textArea.selectionStart
        )
        textArea.focus()
        textArea.selectionStart = textArea.selectionStart + 1
      } else {
        textArea.setRangeText(`${event.target.textContent}`)
        textArea.focus()
        textArea.selectionStart = textArea.selectionStart + 1
      }
    }

    if (!regExp.test(event.target.getAttribute("data-key"))) {
      checkCapsShift()
    }

    !new RegExp("(Shift|Alt)", "g").test(event.target.getAttribute("data-key"))
      ? clearCombine(altContainer, "language-trigger")
      : null
    !new RegExp("Control", "g").test(event.target.getAttribute("data-key"))
      ? clearCombine(ctrlContainer, "arrow-trigger")
      : null

    /* Special Buttons */

    switch (event.target.getAttribute("data-key")) {
      case "Backspace":
        textArea.selectionStart === textArea.selectionEnd
          ? textArea.setRangeText(
              "",
              textArea.selectionStart - 1,
              textArea.selectionStart
            )
          : textArea.setRangeText("")
        textArea.focus()
        textArea.selectionStart = textArea.selectionStart
        break
      case "Delete":
        textArea.selectionStart === textArea.selectionEnd
          ? textArea.setRangeText(
              "",
              textArea.selectionStart,
              textArea.selectionStart + 1
            )
          : textArea.setRangeText("")
        textArea.focus()
        textArea.selectionStart = textArea.selectionStart
        break
      case "Tab":
        textArea.selectionStart === textArea.selectionEnd
          ? textArea.setRangeText(
              "      ",
              textArea.selectionStart,
              textArea.selectionEnd
            )
          : textArea.setRangeText("")
        textArea.focus()
        textArea.selectionStart = textArea.selectionStart + 6
        break
      case "Space":
        textArea.selectionStart === textArea.selectionEnd
          ? textArea.setRangeText(
              " ",
              textArea.selectionStart,
              textArea.selectionEnd
            )
          : textArea.setRangeText("")

        textArea.focus()
        textArea.selectionStart = textArea.selectionStart + 1
        break
      case "Enter":
        textArea.selectionStart === textArea.selectionEnd
          ? textArea.setRangeText(
              "\n",
              textArea.selectionStart,
              textArea.selectionEnd
            )
          : textArea.setRangeText("")
        textArea.focus()
        textArea.selectionStart = textArea.value.length
        break
      case "CapsLock":
        event.target.classList.toggle("active-virtual-key")
        lang === "ru" ? setCaps(lang) : lang === "en" ? setCaps(lang) : null
        break
      case "ControlLeft":
        textArea.focus()
        textArea.selectionEnd = textArea.selectionEnd - 1
        break
      case "ControlRight":
        textArea.focus()
        textArea.selectionStart = textArea.selectionStart + 1
        break
      default:
        break
    }

    /* Combo key */

    /* alt */

    if (new RegExp("Alt", "g").test(event.target.getAttribute("data-key"))) {
      altContainer.forEach((item) => {
        item.classList.remove("language-trigger")
        item.classList.remove("active-virtual-key")
      })
      event.target.classList.add("language-trigger")
      event.target.classList.add("active-virtual-key")
      clearShift("lowercase")
    }
    if (
      new RegExp("Control", "g").test(event.target.getAttribute("data-key"))
    ) {
      ctrlContainer.forEach((item) => {
        item.classList.remove("arrow-trigger")
        item.classList.remove("active-virtual-key")
      })
      event.target.classList.add("arrow-trigger")
      event.target.classList.add("active-virtual-key")
      clearShift("lowercase")
    }

    /* Shift */
    if (new RegExp("Shift", "g").test(event.target.getAttribute("data-key"))) {
      event.target.classList.toggle("active-virtual-key")
      shiftEmulation()
    }
    /* .........*/
  } else {
    textArea.focus()
    textArea.selectionStart = textArea.value.length
  }
})

function shiftEmulation() {
  altContainer.forEach((item) => {
    item.classList.contains("language-trigger")
      ? item.classList.add("active-virtual-key")
      : item.classList.remove("active-virtual-key")
  })
  lang === "en" &&
  (altContainer[0].classList.contains("language-trigger") ||
    altContainer[1].classList.contains("language-trigger"))
    ? changeLanguage("ru")
    : lang === "ru" &&
      (altContainer[0].classList.contains("language-trigger") ||
        altContainer[1].classList.contains("language-trigger"))
    ? changeLanguage("en")
    : switchShiftCaps()
}

function changeLanguage(language) {
  buttonsContainer.forEach((item, index) => {
    item.textContent = layouts[index][language].lowercase
    if (item.getAttribute("caps") === "true") {
      item.textContent = layouts[index][language].toCapsUppercase
    }
    lang = language
    localStorage.setItem("lang", lang)
  })
  altContainer.forEach((item) => item.classList.remove("language-trigger"))
}

function checkCapsShift() {
  clearShift("lowercase")
  buttonsContainer.forEach((item, index) => {
    if (item.getAttribute("caps") === "true") {
      item.textContent = layouts[index][lang].toCapsUppercase
    }
  })
}

function shiftCaps(lang) {
  buttonsContainer.forEach((item, index) => {
    if (item.getAttribute("caps") === "true") {
      if (item.getAttribute("shift") === "false") {
        item.textContent = layouts[index][lang].capsUppercase
        item.setAttribute("shift", true)
      } else if (item.getAttribute("shift") === "true") {
        item.textContent = layouts[index][lang].capsLowercase
        item.setAttribute("shift", false)
      }
    } else if (item.getAttribute("caps") === "false") {
      if (item.getAttribute("shift") === "false") {
        item.textContent = layouts[index][lang].uppercase
        item.setAttribute("shift", true)
      } else if (item.getAttribute("shift") === "true") {
        item.textContent = layouts[index][lang].lowercase
        item.setAttribute("shift", false)
      }
    }
  })
}

function clearShift(register) {
  buttonsContainer.forEach((item, index) => {
    if (item.getAttribute("shift") === "true") {
      item.textContent = layouts[index][lang][register]
      item.setAttribute("shift", false)
    }
  })
  shiftContainer.forEach((item) => {
    item.classList.remove("active-virtual-key")
  })
}

function switchShiftCaps() {
  lang === "ru" ? shiftCaps(lang) : lang === "en" ? shiftCaps(lang) : null
}
/* caps */

function capsLock(event) {
  if (lang === "ru") {
    if (event.code === "CapsLock") {
      setCaps(lang)
    }
  } else if (lang === "en") {
    if (event.code === "CapsLock") {
      setCaps(lang)
    }
  }
}

function setCaps(lang) {
  clearShift("toCapsUppercase")
  buttonsContainer.forEach((item, index) => {
    if (item.getAttribute("caps") === "false") {
      item.textContent = layouts[index][lang].toCapsUppercase
      item.setAttribute("caps", true)
    } else {
      item.textContent = layouts[index][lang].lowercase
      item.setAttribute("caps", false)
    }
  })
}

function clearCombine(combine, randomClass) {
  combine.forEach((item) => {
    item.classList.remove(randomClass)
    item.classList.remove("active-virtual-key")
  })
}

window.addEventListener("keydown", (event) => {
  textArea.focus()
  audio(song)
  buttonsContainer.forEach((item) => {
    if (event.code === item.getAttribute("data-key")) {
      item.classList.add("active-virtual-key")
    } else {
      item.classList.remove("active-virtual-key")
    }
  })

  capsLock(event)

  buttonsContainer.forEach((item) => {
    if (event.code === item.getAttribute("data-key")) {
      item.classList.add("animation-dropdown")
    }
  })
  if (
    (event.altKey && event.code === "ShiftLeft") ||
    (event.altKey && event.code === "ShiftRight")
  ) {
    if (lang === "ru") {
      changeLanguage("en")
    } else {
      changeLanguage("ru")
    }
  }
  if (!regExp.test(event.code)) {
    checkCapsShift()
  }

  !new RegExp("(Shift|Alt)", "g").test(event.code)
    ? clearCombine(altContainer, "language-trigger")
    : null

  if (new RegExp("Shift", "g").test(event.code)) {
    shiftContainer.forEach((item) => {
      item.getAttribute("data-key") === event.code
        ? item.classList.toggle("active-virtual-key")
        : null
    })

    if (
      (!event.altKey && event.code === "ShiftLeft") ||
      (!event.altKey && event.code === "ShiftRight")
    ) {
      shiftEmulation()
    }
  }

  if (event.code === "ControlRight") {
    textArea.focus()
    textArea.selectionStart = textArea.selectionStart + 1
  }
  if (event.code === "ControlLeft") {
    textArea.focus()
    textArea.selectionEnd = textArea.selectionEnd - 1
  }
  if (event.code === "Tab") {
    event.preventDefault()
    textArea.selectionStart === textArea.selectionEnd
      ? textArea.setRangeText(
          "      ",
          textArea.selectionStart,
          textArea.selectionEnd
        )
      : textArea.setRangeText("")
    textArea.focus()
    textArea.selectionStart = textArea.selectionStart + 6
  }

  !new RegExp("Control", "g").test(event.code)
    ? clearCombine(ctrlContainer, "arrow-trigger")
    : null
})

keyboard.addEventListener("animationend", () => {
  for (let button of keyboard.children) {
    button.classList.remove("animation-click")
    button.classList.remove("animation-dropdown")
  }
})
