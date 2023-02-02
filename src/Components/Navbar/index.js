import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  NavbarButtons,
  MobileNavbar,
  DeskNavbar,
  MobileMenu,
  ExploreMenu,
  AboutMenu,
  DeskExploreMenu,
  GreyUl,
  DeskAboutMenu,
  NavContainer,
} from './navbar-styles'
import Icon from '../Icons'
import { useAuthContext } from '../../authContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [exploreExpand, setExploreExpand] = useState(false)
  const [aboutExpand, setAboutExpand] = useState(false)
  const [deskMenuAbout, setDeskMenuAbout] = useState(false)
  const [deskMenuExplore, setDeskMenuExplore] = useState(false)
  const [navColor, setNavColor] = useState(false)
  const { logout } = useAuthContext()
  const { userData } = useAuthContext()
  const navigate = useNavigate()
  const params = useParams()

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  const ChangeClick = () => {
    setClick(!click)
  }

  const ChangeMenuexplore = () => {
    setExploreExpand(!exploreExpand)
    console.log('menu mobile explore')
    const button = document.getElementById('exploreButton')
    exploreExpand ? (button.style.background = '') : (button.style.background = 'rgb(210, 224, 237)')
    exploreExpand ? (button.style.height = '63px') : (button.style.height = '480px')
  }

  const ChangeMenuAbout = () => {
    setAboutExpand(!aboutExpand)
    console.log('menu mobile about')
    const button = document.getElementById('exploreAbout')
    aboutExpand ? (button.style.background = '') : (button.style.background = 'rgb(210, 224, 237)')
    aboutExpand ? (button.style.height = '63px') : (button.style.height = '1113px')
  }

  const goTomenu = () => {
    navigate('/login')
    setClick(!click)
  }

  const logOut = () => {
    logout()
    navigate('/login')
    setClick(!click)
  }

  return (
    <>
      {console.log(window.location.pathname)}
      <NavContainer className="container">
        <MobileNavbar>
          <Icon name="NavbarImg" height="40px" />
          <Icon name="NavbarBurger" height="35px" onClick={ChangeClick} />

          <MobileMenu click={click}>
            <ul>
              <li onClick={() => ChangeMenuexplore()} id="exploreButton">
                Explore
                <ExploreMenu exploreExpand={exploreExpand}>
                  <ul>
                    <li>
                      <Icon name="ExploreTitles" width="30px" height="30px" marginRight="15px" marginTop="8px" />
                      <p>
                        Titles <span>9.500.17</span>
                      </p>
                    </li>
                    <li>
                      <Icon name="ExploreAuthors" width="30px" height="30px" marginRight="15px" marginTop="8px" />
                      <p>
                        Authors <span>2323</span>
                      </p>
                    </li>
                    <li>
                      <Icon name="ExplorePublishers" width="30px" height="30px" marginRight="15px" marginTop="8px" />
                      <p>
                        Publishers <span>9.500.17</span>
                      </p>
                    </li>
                    <li>
                      <Icon name="ExploreFields" width="30px" height="30px" marginRight="15px" marginTop="8px" />
                      <p>
                        Fields <span>71</span>
                      </p>
                    </li>
                    <li>
                      <Icon name="ExploreSchools" width="30px" height="30px" marginRight="15px" marginTop="8px" />
                      <p>
                        Schools <span>6757</span>
                      </p>
                    </li>
                    <li>
                      <Icon name="ExploreCountries" width="30px" height="30px" marginRight="15px" marginTop="8px" />
                      <p>
                        Countries <span>134</span>
                      </p>
                    </li>
                    <li>
                      <Icon name="ExploreSyllabi" width="30px" height="30px" marginRight="15px" marginTop="8px" />
                      <p>
                        Syllabi <span>178.958.500</span>
                      </p>
                    </li>
                  </ul>
                </ExploreMenu>
              </li>

              <li onClick={() => ChangeMenuAbout()} id="exploreAbout">
                About
                <AboutMenu aboutExpand={aboutExpand}>
                  <ul>
                    <li>
                      <h3 style={{ marginTop: 5 }}>ABOUT OS ANALYTICS</h3>
                    </li>
                    <li>News and updates</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Team</li>
                    <li>Jobs</li>
                    <li>
                      <h3>Contact:</h3> <span>analytics@gmail.com</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h3>OTHER OS SITES AND SERVICES</h3>
                    </li>
                    <li>Syllabus explorer</li>
                    <li>OER Metrics</li>
                    <li>Co-Assignment Galaxy</li>
                    <li>OS Parser</li>
                    <li>Print Store</li>
                    <li>Blog</li>
                  </ul>
                  <button style={{ marginTop: 15 }}>Find us on Facebook</button>
                  <button>Find us on Twitter</button>
                </AboutMenu>
              </li>
            </ul>

            {userData !== undefined ? (
              <button>
                <Icon name="NavbarMan" height="18px" marginRight="5px" onClick={() => logOut()} />
                LOGOUT
              </button>
            ) : (
              <button>
                <Icon name="NavbarMan" height="18px" marginRight="5px" onClick={() => goTomenu()} />
                LOGIN
              </button>
            )}
          </MobileMenu>
        </MobileNavbar>

        <DeskNavbar navColor={navColor}>
          <NavContainer>
            {navColor ? <Icon name="NavbarImg" height="51px" /> : <Icon name="NavbarWhiteImg" height="70px" />}
            <NavbarButtons navColor={navColor}>
              <ul>
                <li onMouseEnter={() => setDeskMenuExplore(true)} onMouseLeave={() => setDeskMenuExplore(false)}>
                  Explore
                </li>
                <li onMouseEnter={() => setDeskMenuAbout(true)} onMouseLeave={() => setDeskMenuAbout(false)}>
                  About
                </li>
                {userData !== undefined ? (
                  <li onClick={() => logOut()}>
                    <button>
                      <Icon name="NavbarMan" height="18px" width="18px" marginRight="10px" />
                      LOGOUT
                    </button>
                  </li>
                ) : (
                  <li onClick={() => goTomenu()}>
                    <button>
                      <Icon name="NavbarMan" height="18px" width="18px" marginRight="10px" />
                      LOGIN
                    </button>
                  </li>
                )}
              </ul>
            </NavbarButtons>
            <DeskExploreMenu deskMenuExplore={deskMenuExplore}>
              <ul>
                <li>
                  <Icon name="ExploreTitles" width="22px" height="22px" marginRight="10px" marginTop="18px" />
                  <p>
                    Titles <span>9.500.17</span>
                  </p>
                </li>
                <li>
                  <Icon name="ExploreSchools" width="22px" height="22px" marginRight="10px" marginTop="18px" />
                  <p>
                    Schools <span>9.500.17</span>
                  </p>
                </li>
                <li>
                  <Icon name="ExploreSyllabi" width="22px" height="22px" marginRight="10px" marginTop="18px" />
                  <p>
                    Titles <span>9.500.17</span>
                  </p>
                </li>
                <li>
                  <Icon name="explorePublishers" width="22px" height="22px" marginRight="10px" marginTop="18px" />
                  <p>
                    Titles <span>9.500.17</span>
                  </p>
                </li>
                <li>
                  <Icon name="ExploreFields" width="22px" height="22px" marginRight="10px" marginTop="18px" />
                  <p>
                    Titles <span>9.500.17</span>
                  </p>
                </li>
                <li>
                  <Icon name="ExploreCountries" width="22px" height="22px" marginRight="10px" marginTop="18px" />
                  <p>
                    Titles <span>9.500.17</span>
                  </p>
                </li>
                <li>
                  <Icon name="ExploreAuthors" width="22px" height="22px" marginRight="10px" marginTop="18px" />
                  <p>
                    Titles <span>9.500.17</span>
                  </p>
                </li>
              </ul>
              <GreyUl>
                <li>
                  <Icon name="ExploreAuthors" width="22px" height="22px" marginRight="10px" marginTop="18px" />
                  <p>
                    Titles
                    <span style={{ lineHeight: 1.2 }}>
                      Track the frequency of keywords and concepts in the dataset over time.
                    </span>
                  </p>
                </li>

                <li>
                  <Icon name="ExploreAuthors" width="22px" height="22px" marginRight="10px" marginTop="18px" />
                  <p>
                    Oer Metrics{' '}
                    <span style={{ lineHeight: 1.2 }}>
                      A dashboard for tracking the adoption of Open Access and OER titles.
                    </span>
                  </p>
                </li>

                <li>
                  <Icon name="ExploreAuthors" width="22px" height="22px" marginRight="10px" marginTop="18px" />
                  <p>
                    Learning outcome lab{' '}
                    <span style={{ lineHeight: 1.2 }}>View, navigate, and compare classroom learning outcomes.</span>
                  </p>
                </li>
              </GreyUl>
            </DeskExploreMenu>
            <DeskAboutMenu deskMenuAbout={deskMenuAbout}>
              <ul>
                <li>
                  <h3>About OS Analytics</h3>
                </li>
                <li>News and updates</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Team</li>
                <li>Jobs</li>
              </ul>
              <ul>
                <li>
                  <h3>Other OS Sites and Services</h3>
                </li>
                <li>Syllabus explorer</li>
                <li>OER Metrics</li>
                <li>Co-Assignment Galaxy</li>
                <li>OS Parser</li>
                <li>Print Store</li>
                <li>Blog</li>
              </ul>
              <ul>
                <li>
                  <button style={{ marginTop: 25 }}>Find us on Facebook</button>
                </li>
                <li>
                  <button>Find us on Twitter</button>
                </li>
                <li>
                  <h3 style={{ marginLeft: 20 }}>
                    Contact <span>analytics@opensyllabus.org</span>
                  </h3>
                </li>
              </ul>
            </DeskAboutMenu>
          </NavContainer>
        </DeskNavbar>
      </NavContainer>
    </>
  )
}

export default Navbar
