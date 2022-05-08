/*import layouts*/

import footerHTML from "./modules/footer.js"
import layouts from "./modules/layouts.js"
import Structure from "./modules/structure.js"

/* Structure Init */
let lang = localStorage.getItem("lang") || "en"

const classCreator = new Structure()
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
    this.elem.textContent = `${layouts[inc].en.lowercase}`
    inc++
    return this.elem
  }
}

const body = document.body
const main = classCreator.create("", "main", "")
const footer = classCreator.create("", "footer", "")
const textRow = classCreator.create("text_row", "div", "")
const textArea = classCreator.create("", "textarea", "")
textArea.style.resize = "none"
textArea.placeholder = `Press  key "Alt+Shift" on the keyboard or virtual keyboard to change the language`
const switcher = classCreator.create("switcher", "div", "")
let langEn = classCreator.create("lang_en", "div", "OS Windows")
const keyboard = classCreator.create("keyboard", "div", "")

let flag = false

classCreator.toPrepend(textRow, switcher, textArea)
classCreator.toPrepend(switcher, langEn)
createStructure(footer).innerHTML = footerHTML
classCreator.toAppend(createStructure(main), textRow, keyboard)
function audio() {
  let audio = new Audio("../assets/audio/keyClick.mp3")
  audio.play()
}

/* Structure function */

function createStructure(elem) {
  let container = classCreator.create("container", "div", "")
  let row = classCreator.create(`${elem.tagName.toLowerCase()}_row`, "div", "")
  classCreator.toPrepend(body, elem)
  classCreator.toAppend(elem, container)
  classCreator.toAppend(container, row)
  return row
}

function getLayoutIndex(code) {
  let number
  layouts.forEach((item, index) => {
    item.key === code ? (number = index) : null
  })
  return number
}

/* Key Button Init */

let inc = 0
const buttonsContainer = new Array()
layouts.forEach((item) => {
  buttonsContainer.push(new keyButton("keyButton", "div").init())
})

const big = [
  getLayoutIndex("Backspace"),
  getLayoutIndex("CapsLock"),
  getLayoutIndex("ShiftLeft"),
]
const middle = [
  getLayoutIndex("Tab"),
  getLayoutIndex("Delete"),
  getLayoutIndex("Enter"),
  getLayoutIndex("ControlLeft"),
  getLayoutIndex("ControlRight"),
]

buttonsContainer.forEach((item, index) => {
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

classCreator.toAppend(keyboard, ...buttonsContainer)

/* Keyboard Control Functions */

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

function addCombine(combine, randomClass) {
  combine.forEach((item) => {
    item.classList.remove(randomClass)
    item.classList.remove("active-virtual-key")
  })
  event.target.classList.add(randomClass)
  event.target.classList.add("active-virtual-key")
  clearShift("lowercase")
}

function clearCombine(combine, randomClass) {
  combine.forEach((item) => {
    item.classList.remove(randomClass)
    item.classList.remove("active-virtual-key")
  })
}

/* Regular Buttons */

function regulatButtonText(buttonText) {
  if (textArea.selectionStart === textArea.selectionEnd) {
    textArea.setRangeText(
      `${buttonText}`,
      textArea.selectionStart,
      textArea.selectionStart
    )
    textArea.focus()
    textArea.selectionStart = textArea.selectionStart + 1
  } else {
    textArea.setRangeText(`${buttonText}`)
    textArea.focus()
    textArea.selectionStart = textArea.selectionStart + 1
  }
}

/* Shift control */

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

function checkCapsShift() {
  clearShift("lowercase")
  buttonsContainer.forEach((item, index) => {
    if (item.getAttribute("caps") === "true") {
      item.textContent = layouts[index][lang].toCapsUppercase
    }
  })
}

function switchShiftCaps() {
  lang === "ru" ? shiftCaps(lang) : lang === "en" ? shiftCaps(lang) : null
}

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

/* CapsLock Control */

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
function activeSpecialForKeyboard(attribute, meaning) {
  buttonsContainer.forEach((item) => {
    if (item.getAttribute("data-key") === event.code) {
      item.getAttribute(attribute) === meaning
        ? item.classList.add("active-virtual-key")
        : item.classList.remove("active-virtual-key")
      if (flag === true) {
        item.classList.add("active-virtual-key")
      }
    }
  })
}

/* Language */

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

/* VIRTUAL KEYBOARD */

keyboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("keyButton")) {
    audio()
    event.target.classList.add("animation-click")
    flag = false

    /* Regular Button */

    !event.target.hasAttribute("special")
      ? regulatButtonText(event.target.textContent)
      : null

    !new RegExp("(Shift|Alt|Caps)", "g").test(
      event.target.getAttribute("data-key")
    )
      ? checkCapsShift()
      : null

    buttonsContainer.forEach((item) => {
      if (item.getAttribute("data-key") !== "CapsLock") {
        item.classList.remove("active-virtual-key")
      }
    })

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

    /* Combine */

    /* Alt */

    !new RegExp("(Shift|Alt)", "g").test(event.target.getAttribute("data-key"))
      ? clearCombine(altContainer, "language-trigger")
      : null

    if (new RegExp("Alt", "g").test(event.target.getAttribute("data-key"))) {
      addCombine(altContainer, "language-trigger")
      textArea.focus()
      textArea.selectionStart = textArea.value.length
    }

    /* Ctrl */

    !new RegExp("Control", "g").test(event.target.getAttribute("data-key"))
      ? clearCombine(ctrlContainer, "arrow-trigger")
      : null

    new RegExp("Control", "g").test(event.target.getAttribute("data-key"))
      ? addCombine(ctrlContainer, "arrow-trigger")
      : null

    /* Shift */

    if (new RegExp("Shift", "g").test(event.target.getAttribute("data-key"))) {
      event.target.classList.toggle("active-virtual-key")
      shiftEmulation()
    }

    /* Meta */

    !new RegExp("Meta", "g").test(event.target.getAttribute("data-key"))
      ? clearCombine(metaContainer, "meta-trigger")
      : null

    if (new RegExp("Meta").test(event.target.getAttribute("data-key"))) {
      addCombine(metaContainer, "meta-trigger")

      alert(
        "Read the instructions for control the Keyboard in README.md at the root of the project"
      )
    }
  } else {
    textArea.focus()
    textArea.selectionStart = textArea.value.length
  }
})

/* REGULAR KEYBOARD */

window.addEventListener("keydown", (event) => {
  textArea.focus()
  audio()
  /* Effects */
  buttonsContainer.forEach((item) => {
    if (event.code === item.getAttribute("data-key")) {
      flag = false
      item.classList.add("active-virtual-key")
      item.classList.add("animation-dropdown")
    } else {
      if (item.getAttribute("data-key") !== "CapsLock")
        item.classList.remove("active-virtual-key")
    }
  })

  /* Alt Shift */

  if (
    (event.altKey && event.code === "ShiftLeft") ||
    (event.altKey && event.code === "ShiftRight")
  ) {
    flag = true
    buttonsContainer.forEach((item) => {
      item.getAttribute("data-key") === "AltLeft"
        ? item.classList.add("active-virtual-key")
        : null
    })
    lang === "ru" ? changeLanguage("en") : changeLanguage("ru")
  }

  if (!new RegExp("(Shift|Alt|Caps)", "g").test(event.code)) {
    checkCapsShift()
  }

  !new RegExp("(Shift|Alt)", "g").test(event.code)
    ? clearCombine(altContainer, "language-trigger")
    : null

  if (new RegExp("Shift", "g").test(event.code)) {
    if (
      (!event.altKey && event.code === "ShiftLeft") ||
      (!event.altKey && event.code === "ShiftRight")
    ) {
      shiftEmulation()
    }
    activeSpecialForKeyboard("shift", "true")
  }

  /* Special Buttons */

  switch (event.code) {
    case "CapsLock":
      activeSpecialForKeyboard("caps", "false")

      lang === "ru" ? setCaps(lang) : setCaps(lang)
      break
    case "ControlRight":
      textArea.focus()
      textArea.selectionStart = textArea.selectionStart + 1
      break
    case "ControlLeft":
      textArea.focus()
      textArea.selectionEnd = textArea.selectionEnd - 1
      break
    case "Tab":
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
      break
    case "AltRight":
      buttonsContainer.forEach((item) => {
        item.classList.add("animation-dropdown")
      })
      break
    default:
      break
  }

  /* Combine */

  !new RegExp("Control", "g").test(event.code)
    ? clearCombine(ctrlContainer, "arrow-trigger")
    : null

  if (new RegExp("Arrow").test(event.code)) {
    event.preventDefault()
    regulatButtonText(layouts[getLayoutIndex(event.code)][lang].lowercase)
  }

  new RegExp("Meta").test(event.code)
    ? alert(
        "Read the instructions for control the Keyboard in README.md at the root of the project"
      )
    : null

  if (new RegExp("Alt", "g").test(event.code)) {
    event.preventDefault()
    textArea.focus()
    textArea.selectionStart = textArea.value.length
  }
})

/* Support Functions */

keyboard.addEventListener("animationend", () => {
  for (let button of keyboard.children) {
    button.classList.remove("animation-click")
    button.classList.remove("animation-dropdown")
  }
})

document.addEventListener("DOMContentLoaded", () => {
  textArea.focus()
})
