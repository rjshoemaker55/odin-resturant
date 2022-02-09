import Element from '../utils/Element'

const pageData = {
  Home: {
    header: "RJ's Restaraunt",
    subHeader: 'The best restaraunt in town!',
    content: [
      {
        type: 'img',
        classname: 'home-img',
        options: {
          attributes: {
            src: 'https://www.placecage.com/300/200'
          }
        }
      },
      {
        type: 'h3',
        classname: 'hello',
        text: 'Welcome!!'
      }
    ]
  },
  About: {
    header: 'About',
    content: [
      {
        type: 'h2',
        classname: 'about-sub',
        text: 'Hello'
      }
    ]
  }
}

export default pageData
