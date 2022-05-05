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
let lang = "en"

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

let caps = false
let regExp = /(Shift|Alt|Control|Caps)/

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
    this.elem.setAttribute("data-lang", lang)
    this.elem.setAttribute("caps", false)
    this.elem.setAttribute("shift", false)
    return this.elem
  }

  init() {
    this.create()
    this.addClassName()
    this.addAttributes()
    this.elem.textContent = `${layouts[inc].en.lowercase}`
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

  /* enter */

  if (event.target.getAttribute("data-key") === "Enter") {
    textArea.value += `\n`
  }

  /*space */

  if (event.target.getAttribute("data-key") === "Space") {
    textArea.value += `  `
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

  /* Tab */
  if (event.target.getAttribute("data-key") === "Tab") {
    textArea.value += `      `
  }

  /* backspace */
  if (event.target.getAttribute("data-key") === "Backspace") {
    textArea.value = textArea.value.substring(0, textArea.value.length - 1)
  }

  /* alt */

  if (
    lang === "en" &&
    isAlt === false &&
    new RegExp("Shift", "g").test(event.target.getAttribute("data-key"))
  ) {
    {
      buttonsContainer.forEach((item, index) => {
        item.textContent = layouts[index].ru.lowercase
      })
    }
  }
})

/* caps */
function capsLock(event) {
  if (event.code === "CapsLock") {
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
