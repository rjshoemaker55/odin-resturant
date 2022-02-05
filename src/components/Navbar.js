import Element from '../utils/Element'

const Navbar = (pageWrapper) => {
  const nav = Element('div', 'navbar-wrapper')

  for (let i = 0; i <= 2; i++) {
    let navBtn = Element('a', 'navbar-link', {
      attributes: { href: '#' }
    })

    nav.init()
    navBtn.init()
    nav.render(pageWrapper)
    navBtn.render(nav)

    console.log(navBtn.element)
  }

  // nav.init()
}
export default Navbar
