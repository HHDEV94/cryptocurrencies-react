import { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import Crypto_Img from './img/crypto-img.png'
import Form from './components/Form'
import Result from './components/Result'

function App() {
  const [currencies, setCurrencies] = useState({})
  const [dataQuery, setDataQuery] = useState({})

  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      const { currency, cryptoCurrency } = currencies
      const cryptoQuery = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`

        const response = await fetch(url)
        const result = await response.json()

        setDataQuery(result.DISPLAY[cryptoCurrency][currency])
      }

      cryptoQuery()
    }
  }, [currencies])

  return (
    <Container>
      <Img src={Crypto_Img} alt='Crpto currencies image' />
      <div>
        <Heading>Instant Cryptocurrency Query</Heading>
        <Form setCurrencies={setCurrencies} />
        <hr />
        {dataQuery.PRICE && <Result dataQuery={dataQuery} />}
      </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Heading = styled.h1`
  font-family: 'Oufit', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
`
const Img = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

export default App
