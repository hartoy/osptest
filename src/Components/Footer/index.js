import React from 'react'
import { FooterStyles } from './footer-styles.js'
import Icon from '../Icons'

const Footer = () => {
  return (
    <FooterStyles>
      <div className="first-footer">
        <ul>
          <li>About</li>
          <li>People</li>
          <li>Terms and Conditions</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>
            <Icon name="Icon1Footer" height="40px" width="40px" />
          </li>
          <li>
            <Icon name="Icon2Footer" height="40px" width="40px" />
          </li>
        </ul>
      </div>
      <Icon forDesktop name="OpenTextFooter" height="51px" marginTop="7px" className="open" />
    </FooterStyles>
  )
}

export default Footer
