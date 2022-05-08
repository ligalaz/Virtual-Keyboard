export default class Structure {
  constructor() {}

  create(className, tag, content) {
    this.elem = document.createElement(tag)
    this.elem.className = className
    this.elem.textContent = content
    return this.elem
  }

  toAppend(elem, ...randomClass) {
    return elem.append(...randomClass)
  }

  toPrepend(elem, ...randomClass) {
    return elem.prepend(...randomClass)
  }
}
