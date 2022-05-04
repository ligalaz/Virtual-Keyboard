import footerHTML from "./modules/footer.js"

/* create structure */

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

let buttonContainer = []

for (let i = 0; i <= 64; i++) {
  buttonContainer.push(document.createElement("div"))
}

let big = [13, 29, 42]
let middle = [14, 28, 41, 56, 61]

buttonContainer.map((item, index) => {
  item.className = "keyButton"
  item.textContent = "A"
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
keyboard.append(...buttonContainer)
console.log(buttonContainer)
