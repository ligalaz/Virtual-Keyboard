import footerHTML from "./modules/footer.js"
import layouts from "./modules/layouts.js"

console.log(layouts)
/*import layouts*/

/* create structure */

let isShift = false
let isCtrl = false
let isAlt = false

let body = document.body
let main = document.createElement("main")
let footer = document.createElement("footer")
let structure = new Array()
let textRow = document.createElement("div")
textRow.className = "text_row"
let textArea = document.createElement("textarea")
textArea.style.resize = "none"
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

let big = [13, 29, 42]
let middle = [14, 28, 41, 56, 61]
let lang = localStorage.getItem("lang") || "en"

const specialButtons = [
  "Backspace",
  "Tab",
  "Delete",
  "CapsLock",
  "Enter",
  "ShiftLeft",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "MetaRight",
  "ControlRight",
]

/* KEY BUTTON INIT */

let regExp = /(Shift|Alt|Control|Caps)/

let shiftedButtons = new Array()

layouts.forEach((item, index) =>
  item.shifted ? shiftedButtons.push(index) : null
)
console.log(shiftedButtons)

let inc = 0

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

    !layouts[inc].special ? this.elem.setAttribute("caps", false) : null
    layouts[inc].shifted ? this.elem.setAttribute("shift", true) : null

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
console.log(buttonsContainer)

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

console.log(metaContainer)

console.log(layouts[5].en.lowercase)

keyboard.addEventListener("click", (event) => {
  event.target.classList.add("animation-click")
  if (
    event.target.classList.contains("keyButton") &&
    !specialButtons.includes(event.target.getAttribute("data-key"))
  ) {
    textArea.value += event.target.textContent
  }
  /* add active button */

  if (regExp.test(event.target.getAttribute("data-key"))) {
    event.target.classList.toggle("active-virtual-key")
  } else {
    for (let button of keyboard.children) {
      button.classList.remove("active-virtual-key")
    }
  }

  /*caps */

  if (event.target.getAttribute("data-key") === "CapsLock") {
    buttonsContainer.forEach((item) => {
      if (
        item.getAttribute("caps") === "false" &&
        !specialButtons.includes(item.getAttribute("data-key"))
      ) {
        item.textContent = item.textContent.toUpperCase()
        item.setAttribute("caps", true)
      } else {
        item.textContent = item.textContent.toLowerCase()
        item.setAttribute("caps", false)
      }
    })
  }

  /* alt */

  !new RegExp("(Shift|Alt)", "g").test(event.target.getAttribute("data-key"))
    ? altContainer.forEach((item) => item.classList.remove("language-trigger"))
    : null

  if (new RegExp("Alt", "g").test(event.target.getAttribute("data-key"))) {
    altContainer.forEach((item) => item.classList.remove("language-trigger"))
    event.target.classList.add("language-trigger")
  }

  if (new RegExp("Shift", "g").test(event.target.getAttribute("data-key"))) {
    lang === "en" &&
    (altContainer[0].classList.contains("language-trigger") ||
      altContainer[1].classList.contains("language-trigger"))
      ? changeLanguage("ru")
      : lang === "ru" &&
        (altContainer[0].classList.contains("language-trigger") ||
          altContainer[1].classList.contains("language-trigger"))
      ? changeLanguage("en")
      : shiftCaps()
  }

  /* special button */

  switch (event.target.getAttribute("data-key")) {
    case "Backspace":
      textArea.selectionStart === textArea.selectionEnd
        ? textArea.setRangeText(
            "",
            textArea.selectionStart - 1,
            textArea.selectionStart
          )
        : textArea.setRangeText("")
      break
    case "Delete":
      textArea.selectionStart === textArea.selectionEnd
        ? textArea.setRangeText(
            "",
            textArea.selectionStart,
            textArea.selectionStart + 1
          )
        : textArea.setRangeText("")
      break
    case "Tab":
      textArea.selectionStart === textArea.selectionEnd
        ? textArea.setRangeText(
            "     ",
            textArea.selectionStart,
            textArea.selectionEnd
          )
        : textArea.setRangeText("")
      break
    case "Space":
      textArea.selectionStart === textArea.selectionEnd
        ? textArea.setRangeText(
            " ",
            textArea.selectionStart,
            textArea.selectionEnd
          )
        : textArea.setRangeText("")
      break
    case "Enter":
      textArea.selectionStart === textArea.selectionEnd
        ? textArea.setRangeText(
            "\n",
            textArea.selectionStart,
            textArea.selectionEnd
          )
        : textArea.setRangeText("")
      break
    default:
      break
  }

  /* combo key */
})

function changeLanguage(language) {
  buttonsContainer.forEach((item, index) => {
    item.textContent = layouts[index][language].lowercase
    lang = language
    localStorage.setItem("lang", lang)
    altContainer.forEach((item) => item.classList.remove("language-trigger"))
  })
}

function shiftCaps() {
  if (lang === "ru") {
    buttonsContainer.forEach((item, index) => {
      if (item.getAttribute("caps")) {
        if (
          item.getAttribute("caps") === "true" &&
          item.getAttribute("shift") &&
          isShift === false
        ) {
          item.textContent = layouts[index].ru.uppercase
          isShift = true
        } else if (
          item.getAttribute("caps") === "true" &&
          item.getAttribute("shift") &&
          isShift === true
        ) {
          item.textContent = layouts[index].ru.lowercase
          isShift = false
        } else if (item.getAttribute("caps") === "false" && isShift === false) {
          item.textContent = layouts[index].ru.uppercase
          isShift = true
        } else if (item.getAttribute("caps") === "false" && isShift === true) {
          item.textContent = layouts[index].ru.lowercase
          isShift = false
        }
      }
    })
  } else {
    buttonsContainer.forEach((item, index) => {
      if (item.getAttribute("caps")) {
        if (
          item.getAttribute("caps") === "true" &&
          item.getAttribute("shift") &&
          isShift === false
        ) {
          item.textContent = layouts[index].en.uppercase
          console.log(layouts[index].en.uppercase)
          isShift = true
        } else if (
          item.getAttribute("caps") === "true" &&
          item.getAttribute("shift") &&
          isShift === true
        ) {
          item.textContent = layouts[index].en.lowercase
          isShift = false
        } else if (item.getAttribute("caps") === "false" && isShift === false) {
          item.textContent = layouts[index].en.uppercase
          isShift = true
        } else if (item.getAttribute("caps") === "false" && isShift === true) {
          item.textContent = layouts[index].en.lowercase
          isShift = false
        }
      }
    })
  }
  console.log("hello world")
}

/* caps */
function capsLock(event) {
  if (event.code === "CapsLock") {
    buttonsContainer.forEach((item) => {
      if (item.getAttribute("caps")) {
        if (item.getAttribute("caps") === "false") {
          item.textContent = item.textContent.toUpperCase()
          item.setAttribute("caps", true)
        } else {
          item.textContent = item.textContent.toLowerCase()
          item.setAttribute("caps", false)
        }
      }
    })
  }
}

window.addEventListener("keydown", (event) => {
  capsLock(event)
  buttonsContainer.forEach((item) => {
    if (event.code === item.getAttribute("data-key")) {
      item.classList.add("animation-dropdown")
    }
  })
})

keyboard.addEventListener("animationend", () => {
  for (let button of keyboard.children) {
    button.classList.remove("animation-click")
    button.classList.remove("animation-dropdown")
  }
})
