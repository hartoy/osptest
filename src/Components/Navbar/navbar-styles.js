import styled from 'styled-components'
const NavContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1000px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`
const NavbarButtons = styled.div`
  display: none;

  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    margin-left: 25px;
    color: rgb(34, 73, 116);
    font-family: Roboto, sans-serif;
    user-select: none;
    font-weight: 400;
    line-height: 1;
    font-size: 15px;
  }

  button {
    background-color: #3775b9;
    border-radius: 5px;
    border-style: none;
    font-size: 14px;
    color: white;
    font-weight: 900;
    padding: 10px 15px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    color: ${({ navColor }) => (navColor ? 'white' : '#3775b9')};
    background-color: ${({ navColor }) => (navColor ? '#3775b9' : '#D2E0ED')};
    width: 125px;
    justify-content: center;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ navColor }) => (navColor ? 'rgb(34, 73, 116)' : 'white')};
  }
`
const DeskNavbar = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-around;
    height: 94px;
    align-items: center;
    box-shadow: ${({ navColor }) => (navColor ? 'rgb(0 0 0 / 15%) 0px 4px 4px' : '')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    transition: ${({ navColor }) => (navColor ? 'all 225ms linear 0s;' : 'all 225ms linear 0s;')};
    background-color: ${({ navColor }) => (navColor ? 'white' : '')};
  }
`
const MobileNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  height: 75px;
  align-items: center;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  @media (min-width: 1000px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgb(245, 248, 251);
  height: calc(100vh - 75px);
  width: 100%;
  top: 75px;
  left: 0;
  transform: ${({ click }) => (click ? 'translateY(0%)' : 'translateY(-120%)')};
  transition: 0.6s ease-in-out 0s;
  padding-bottom: 35px;
  overflow-y: scroll;
  z-index: 4;
  position: fixed;

  ul {
    list-style: none;
    padding-inline-start: 0px;
    width: 100%;
    margin-top: 0px;
    margin-bottom: 35px;
  }

  li {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: rgb(34, 73, 116);
    font-family: Roboto, sans-serif;
    padding-left: 30px;
    padding-bottom: 17px;
    padding-top: 17px;
    border-bottom: 1px solid rgb(149, 153, 158);
    box-sizing: border-box;
    height: 63px;
    transition: all 0.6s ease-in-out 0s;
  }

  button {
    background-color: #3775b9;
    border-radius: 5px;
    border-style: none;
    font-size: 14px;
    color: white;
    font-weight: 900;
    padding: 18px 5px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 25px;
    width: 219px;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`

const ExploreMenu = styled.div`
  display: Flex;
  transform: ${({ exploreExpand }) => (exploreExpand ? 'translateY(0%)' : 'translateY(-200%)')};
  transition: all 0.4s ease-in-out 0s, opacity 0.8s linear 0s;
  flex-direction: column;
  z-index: 4;
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 26px;
    color: rgb(34, 73, 116);
    font-family: Roboto, sans-serif;
    font-weight: 900;
    letter-spacing: 0.11em;
    border: none;
    display: flex;
    align-items: center;
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
  p {
    display: Flex;
    flex-direction: column;
  }
  span {
    color: rgb(82, 91, 101);
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 14px;
    line-height: 11px;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`
const AboutMenu = styled.div`
  display: flex;
  transform: ${({ aboutExpand }) => (aboutExpand ? 'translateY(0%)' : 'translateY(-200%)')};
  transition: all 0.4s ease-in-out 0s, opacity 0.8s linear 0s;
  flex-direction: column;
  border-bottom: 1px solid rgb(149, 153, 158);
  padding-bottom: 20px;
  z-index: 3;

  li {
    border: none;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: rgb(82, 91, 101);
    font-family: Roboto, sans-serif;
    padding-bottom: 10px;
    padding-left: 0px;
  }

  h3 {
    font-family: Roboto, sans-serif;
    letter-spacing: 0.11em;
    color: rgb(34, 73, 116);
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    margin: 0px;
  }
  ul {
    margin-bottom: 20px;
  }
  span {
    color: #3775b9;
    margin-top: 3px;
  }
  @media (min-width: 1000px) {
    display: none;
  }
  button {
    margin: 0 auto;
    margin-bottom: 15px;
    background: rgb(219, 229, 240);
    border-radius: 3px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: rgb(34, 73, 116);
    width: 255px;
    height: 40px;
    display: flex;
    justify-content: center;
  }
`

const DeskExploreMenu = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    background-color: white;
    height: ${({ deskMenuExplore }) => (deskMenuExplore ? '275px' : '0px')};
    width: ${({ deskMenuExplore }) => (deskMenuExplore ? '720px' : '0px')};
    opacity: ${({ deskMenuExplore }) => (deskMenuExplore ? '1' : '0')};
    position: absolute;
    transition:  width 0s ease 0s, height 0s ease 0s, all 300ms ease 0s;
    top: 80px;
    right:135px;
    border-radius: 6px;
    box-shadow: rgb(61 61 61 / 30%) 0px 0px 35px 2px;
    justify-content: space-between;
    transform-origin: center;
    li {
      text-transform: uppercase;
      color: rgb(34, 73, 116);
      font-weight: 900;
      font-size: 13px;
      font-family: Roboto, sans-serif;
      flex-direction: wrap;
      margin-bottom: 5px;
      display:flex;
    }
    ul {
      flex-direction: column;
      flex-wrap: wrap;
      list-style-type: none;
      column-gap: 85px;
      display:flex;
    p {
      display: flex;
      flex-direction: column;
    }
    span {
      color: rgb(82, 91, 101);
      letter-spacing: 0px;
      font-weight: 400;
      font-size: 14px;
      line-height: 11px;
    }
  }
`
const GreyUl = styled.ul`
  display: none;
  @media (min-width: 1000px) {
    background-color: rgb(244, 245, 249);
    margin: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 40%;
    display: flex;
    flex-direction: inherit;
    align-items: end;
    padding-top: 15px;
    padding-right: 15px;
    padding-inline-start: 25px;
  }
  span {
    color: rgb(82, 91, 101);
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-transform: initial;
    margin-top: 5px;
  }
  li {
    display: flex;
    margin-bottom: 0px;
  }
  p {
    margin-bottom: 2px;
    width: 90%;
  }
`

const DeskAboutMenu = styled.div`
  display: none;
  @media (min-width: 1000px) {
    background-color: white;
    display: flex;
    height: ${({ deskMenuAbout }) => (deskMenuAbout ? '325px' : '0px')};
    width: ${({ deskMenuAbout }) => (deskMenuAbout ? '825px' : '0px')};
    opacity: ${({ deskMenuAbout }) => (deskMenuAbout ? '1' : '0')};
    transition: width 0s ease 0s, height 0s ease 0s, all 300ms ease 0s;
    border-radius: 6px;
    position: absolute;
    top: 80px;
    right: 35px;
    box-shadow: rgb(61 61 61 / 30%) 0px 0px 35px 2px;
    text-align: left;
    flex: 1 1 0px;
    padding-right: 30px;
    padding-left: 30px;
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    padding-inline-start: 0px;
    width: 33.33%;
  }
  h3 {
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 15px;
    color: rgb(34, 73, 116);
    display: flex;
    flex-direction: column;
  }
  li {
    color: rgb(82, 91, 101);
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 15px;
    display: ${({ deskMenuAbout }) => (deskMenuAbout ? 'flex' : 'none')};
  }
  span {
    color: rgb(34, 73, 116);
    font-weight: 400;
    font-size: 15px;
  }
  button {
    margin: 0 auto;
    margin-bottom: 15px;
    background: rgb(219, 229, 240);
    border-radius: 3px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: rgb(34, 73, 116);
    width: 215px;
    height: 40px;
    display: flex;
    justify-content: center;
    border-style: none;
    align-items: center;
  }
`

export {
  NavbarButtons,
  DeskNavbar,
  MobileNavbar,
  MobileMenu,
  ExploreMenu,
  AboutMenu,
  DeskExploreMenu,
  GreyUl,
  DeskAboutMenu,
  NavContainer,
}
