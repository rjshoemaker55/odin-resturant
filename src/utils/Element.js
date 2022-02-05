const elementMethods = {
  setAttributes: function () {
    Object.keys(this.options.attributes).forEach((key) => {
      this.element.setAttribute(key, this.options.attributes[key])
    })
  },
  addContent: function (content) {
    this.element.innerHTML = content
  },
  render: function (location) {
    location.append(this.element)
  }
}

const Element = function (type, classname, options) {
  let newElement = Object.create(elementMethods)

  let newElementObj = document.createElement(type)
  newElementObj.classList.add(classname)

  newElement.type = type
  newElement.element = newElementObj
  newElement.classname = classname
  newElement.options = options || {}

  console.log(`Element Initialized: ${newElement}`)
  return newElement
}

export default Element
