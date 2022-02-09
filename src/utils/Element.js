const elementMethods = {
  setAttributes: function () {
    Object.keys(this.options.attributes).forEach((key) => {
      this.element.setAttribute(key, this.options.attributes[key])
    })
  },
  setOnClickEvents: function () {
    this.element.onclick = () => this.options.onClick(this)
  },
  setContent: function (content) {
    this.element.innerHTML = content
  },
  clearContent: function () {
    this.element.innerHTML = ''
  },
  render: function () {
    this.parentElement.element.append(this.element)
  }
}

const Element = function (type, classes, parentElement, options) {
  let newElement = Object.create(elementMethods)

  let newElementObj = document.createElement(type)

  newElement.type = type
  newElement.element = newElementObj
  newElement.options = options || {}
  newElement.parentElement = parentElement
  newElement.classes = classes?.split(' ')

  // add classes to element
  newElement.classes?.forEach((classname) =>
    newElementObj.classList.add(classname)
  )

  if ('attributes' in newElement.options) {
    newElement.setAttributes()
  }

  if ('onClick' in newElement.options) {
    newElement.setOnClickEvents()
  }

  return newElement
}

export default Element
