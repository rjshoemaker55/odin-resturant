const elementMethods = {
  setAttributes: function () {
    Object.keys(this.options.attributes).forEach((key) => {
      this.element.setAttribute(key, this.options.attributes[key])
    })
  },
  setOnClickEvents: function () {
    this.element.onclick = () => this.options.onClick(this)
  },
  addContent: function (content) {
    this.element.innerHTML = content
  },
  render: function (location) {
    location.element.append(this.element)
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

  if ('attributes' in newElement.options) {
    newElement.setAttributes()
  }

  if ('onClick' in newElement.options) {
    newElement.setOnClickEvents()
  }

  return newElement
}

export default Element
