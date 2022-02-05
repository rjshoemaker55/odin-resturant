import Element from '../utils/Element'
import Navbar from './Navbar'

export default function Page(root) {
  const pageWrapper = Element('div', 'page-wrapper')
  const pageHeader = Element('h1', 'page-wrapper__header')

  pageWrapper.render(root)
  pageHeader.addContent("RJ's Restaraunt")
  pageHeader.render(pageWrapper)

  Navbar(pageWrapper)
}
