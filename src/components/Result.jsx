/* eslint-disable react/prop-types */
import styled from '@emotion/styled'

const Result = ({ dataQuery }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = dataQuery

  return (
    <Container>
      <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt='crypto_img' />
      <div>
        <Price>
          Price: <span>{PRICE}</span>
        </Price>
        <Data>
          Highest price of the day: <span>{HIGHDAY}</span>
        </Data>
        <Data>
          Lowest price of the day: <span>{LOWDAY}</span>
        </Data>
        <Data>
          Latest variation: <span>{CHANGEPCT24HOUR}</span>
        </Data>
        <Data>
          Last update: <span>{LASTUPDATE}</span>
        </Data>
      </div>
    </Container>
  )
}

const Container = styled.div`
  color: #fff;
  font-family: 'Outfit', sans-serif;
  display: flex;
  gap: 30px;
  align-items: center;
`
const Img = styled.img`
  display: block;
  width: 220px;
  height: 220px;
`
const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`
const Data = styled.p`
  font-size: 20px;
  span {
    font-weight: 700;
  }
`

export default Result
