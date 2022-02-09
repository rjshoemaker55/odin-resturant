import Background from './components/Background'
import Page from './components/Page'
import './scss/main.scss'
const root = { element: document.getElementById('root') }

export default function app() {
  Background(root)
  Page(root, 'Home')
  // wont work
}
