import styled from 'styled-components'

const ExploreStyles = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 180px;

  @media (min-width: 1000px) {
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 0px;
    margin-left: 0px;
    width: 724px;
    height: 712px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    justify-content: end;
    margin-top: 0px;
  }

  @media (min-width: 992px) {
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 0px;
    margin-left: 0px;
  }
  @media (min-width: 1200px) {
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 0px;
    margin-left: 0px;
  }
`

const ExploreCard = styled.div`
  height: 385px;
  width: 85%;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 30px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 175px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: -10px;
    object-fit: cover;
  }

  @media (min-width: 1000px) {
    display: flex;
    height: 175px;
    width: 618px;

    img {
      margin-bottom: 0px;
      width: 41%;
      height: auto;
    }
  }
`
const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(210, 224, 237, 0.75);
  height: 196px;
  border-bottom-radius: 5px;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  align-items: center;
  padding: 15px 30px 5px 30px;

  svg {
    width: 100%;
  }
  p {
    color: #224974;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    width: 223px;
  }

  @media (min-width: 1000px) {
    height: 89%;
    width: 167%;
    align-items: flex-start;

    p {
      width: 310px;
    }
  }
`

const CardTitle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  width: 223px;

  h2 {
    font-size: 16px;
    font-weight: 900;
    text-transform: uppercase;
    color: #224974;
    letter-spacing: 0.05em;
    margin: 0;
    margin-top: 15px;
    margin-left: 10px;
  }
`

const CardButton = styled.button`
  background-color: #3775b9;
  color: white;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  width: 225px;
  height: 40px;
  border-style: none;
  margin-top: 5px;

  @media (min-width: 1000px) {
    height: 40px;
    width: 98px;
  }
`

export { ExploreStyles, ExploreCard, CardBottom, CardTitle, CardButton }
