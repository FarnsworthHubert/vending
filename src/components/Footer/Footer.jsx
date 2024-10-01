import React from 'react'

// import '../../styles/Main.scss'

// import { footerPages } from '../../config'

/**
 *
 * @returns
 */

function Footer() {
  // const firstSections = footerPages.filter((item) =>
  //   item.hasOwnProperty('title')
  // )
  // const lastSectionWithoutTitle = footerPages
  //   .filter((section) => !section.title)
  //   .pop()

  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__pages'>
        // Pages
        </div>
        <div className='footer__content'>
          <p className='footer__text'>Copyright © 2023</p>
          <ul className='footer__list'>
            // Pages
            <li className='footer__item footer__item--powered'>
              Made with :heart: by Isaiah
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
