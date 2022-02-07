const elementMethods = {
  setAttributes: function () {
    Object.keys(this.options.attributes).forEach((key) => {
      console.log(`attribute: ${key}, prop: ${this.options.attributes[key]}`)
      this.element.setAttribute(key, this.options.attributes[key])
    })
  },
  setOnClickEvents: function () {
    this.element.onclick = () => this.options.onClick(this)
  },
  addContent: function (content) {
    this.element.innerHTML = content
  },
  render: function () {
    this.parentElement.element.append(this.element)
  }
}

const Element = function (type, classname, parentElement, options) {
  let newElement = Object.create(elementMethods)

  let newElementObj = document.createElement(type)
  newElementObj.classList.add(classname)

  newElement.type = type
  newElement.element = newElementObj
  newElement.classname = classname
  newElement.options = options || {}
  newElement.parentElement = parentElement

  if ('attributes' in newElement.options) {
    newElement.setAttributes()
  }

  if ('onClick' in newElement.options) {
    newElement.setOnClickEvents()
  }

  console.log(`Element Created: ${JSON.stringify(newElement)}`)
  return newElement
}

export default Element
