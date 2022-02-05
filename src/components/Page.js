import Element from '../utils/Element'
import Navbar from './Navbar'

export default function Page() {
  const pageWrapper = Element('div', 'page-wrapper')
  const pageHeader = Element('h1', 'page-wrapper__header')

  pageWrapper.init()
  // pageWrapper.addToDom(document.getElementById('root'))

  // pageHeader.init()
  // pageHeader.addContent("RJ's Restaraunt")
  // pageHeader.addToDom(pageWrapper.element)

  Navbar()

  console.log(pageWrapper)
}
