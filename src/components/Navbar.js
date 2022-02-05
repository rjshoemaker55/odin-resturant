import Element from '../utils/Element'

const Navbar = () => {
  const nav = Element('div', 'navbar-wrapper')

  for (let i = 0; i <= 2; i++) {
    let navBtn = Element('a', 'navbar-btn', {
      attributes: {
        href: 'hello'
      }
    })

    navBtn.init()
  }

  nav.init()
}

export default Navbar
