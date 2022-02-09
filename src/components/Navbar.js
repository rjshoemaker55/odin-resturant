import Element from '../utils/Element'

const Navbar = (pageWrapper, changePage) => {
  const nav = Element('div', 'navbar-wrapper', pageWrapper)

  const navLinks = [
    {
      text: 'Home',
      url: '#'
    },
    {
      text: 'About',
      url: '#'
    },
    {
      text: 'Contact',
      url: '#'
    }
  ]

  const navItems = document.getElementsByClassName('navbar-link')

  for (let i = 0; i <= 2; i++) {
    let navBtn = Element('a', `navbar-link ${i === 0 && 'active'}`, nav, {
      attributes: { href: navLinks[i].url },
      active: i === 0 ? true : false,
      onClick: function (elem) {
        changePage(navLinks[i].text)

        Array.from(navItems).forEach((item) => {
          item.classList.remove('active')
        })
        elem.element.classList.add('active')
        elem.active = true
      }
    })

    navBtn.setContent(navLinks[i].text)
    nav.element.append(navBtn.element)
    nav.render(nav.parentElement)
  }
}

export default Navbar
