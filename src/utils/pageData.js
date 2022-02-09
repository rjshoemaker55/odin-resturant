import Element from '../utils/Element'

const pageData = {
  Home: {
    header: "RJ's Restaraunt",
    subHeader: 'The best restaraunt in town!',
    content: [
      {
        type: 'img',
        classes: 'home-img',
        options: {
          attributes: {
            src: 'https://www.placecage.com/300/200'
          }
        }
      },
      {
        type: 'h3',
        classes: 'hello',
        text: 'Welcome!!'
      }
    ]
  },
  About: {
    header: 'About',
    content: [
      {
        type: 'h2',
        classes: 'about-sub',
        text: 'Hello'
      }
    ]
  },
  Contact: {
    header: 'Contact',
    content: [
      {
        type: 'h3',
        text: 'Contact us'
      }
    ]
  }
}

export default pageData
