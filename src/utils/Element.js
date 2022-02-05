const elementMethods = {
  init: function () {
    const newElement = document.createElement(this.type)
    newElement.classList.add(this.classname)
    this.element = newElement
    if (this.options.attributes) {
      console.log('has attr')
      this.setAttributes()
    }
  },
  setAttributes: function () {
    Object.keys(this.options.attributes).forEach((key) => {
      console.log(key, this.options.attributes[key])
      this.element.setAttribute(key, this.options.attributes[key])
    })
  },
  addContent: function (content) {
    this.element.innerHTML = content
  },
  addToDom: function (location) {
    location.append(this.element)
  }
}

const Element = function (type, classname, options) {
  console.log(arguments)
  console.log(options)
  let newElement = Object.create(elementMethods)

  newElement.type = type
  newElement.classname = classname
  newElement.options = options
  newElement.children = {}

  return newElement
}

export default Element
