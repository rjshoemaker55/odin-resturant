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

  const initPage = (pageToSet) => {
    setPageContent(pageToSet)
    pageWrapper.render()
    pageHeader.render()
    pageContentWrapper.render()
  }

  const setPageContent = (pageToSet) => {
    pageContentWrapper.clearContent()
    pageHeader.setContent(pageData[pageToSet].header)
    for (let i in pageData[pageToSet].content) {
      const currentData = pageData[pageToSet].content[i]

      const newContentItem = Element(
        currentData.type,
        currentData.classes,
        pageContentWrapper,
        currentData.options && currentData.options
      )

      if (currentData.text) {
        newContentItem.setContent(currentData.text)
      }

      newContentItem.render()
    }
  }

  initPage(page)
  Navbar(pageWrapper, setPageContent)
}
