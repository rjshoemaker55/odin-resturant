import Element from '../utils/Element'
import Navbar from './Navbar'
import pageData from '../utils/pageData'

export default function Page(root, page) {
  const pageWrapper = Element('div', 'page-wrapper', root)
  const pageHeader = Element('h1', 'page-wrapper__header', pageWrapper)
  const pageContentWrapper = Element(
    'div',
    'page-wrapper__content',
    pageWrapper
  )

  pageHeader.addContent(pageData[page].header)
  pageHeader.render()

  pageWrapper.render()

  for (let i in pageData[page].content) {
    const currentData = pageData[page].content[i]

    const newContentItem = Element(
      currentData.type,
      currentData.classname,
      pageContentWrapper,
      currentData.options && currentData.options
    )

    if (currentData.text) {
      newContentItem.addContent(currentData.text)
    }

    newContentItem.render()
  }

  pageContentWrapper.render()

  // pageContentWrapper.addContent('hello')
  pageContentWrapper.render()

  Navbar(pageWrapper)
}
