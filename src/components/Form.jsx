/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { currencies } from '../data/db'
import useSelectCurrency from '../hooks/useSelectCurrency'
import styled from '@emotion/styled'
import Alert from './Alert'

const Form = ({ setCurrencies }) => {
  const [cryptos, setCryptos] = useState([])
  const [currency, SelectCurrency] = useSelectCurrency('Choise your currency', currencies)
  const [cryptoCurrency, SelectCryptoCurrency] = useSelectCurrency(
    'Choise your Cryptocurrency',
    cryptos
  )
  const [error, setError] = useState(false)

  useEffect(() => {
    const apiQuery = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

      const response = await fetch(url)
      const result = await response.json()

      const arrayCrypto = result.Data.map(crypto => {
        const data = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }

        return data
      })

      setCryptos(arrayCrypto)
    }

    apiQuery()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if ([currency, cryptoCurrency].includes('')) {
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 2500)
      return
    }

    setCurrencies({ currency, cryptoCurrency })
  }

  return (
    <>
      {error && <Alert>all fields are required!!!</Alert>}
      <FormContainer onSubmit={handleSubmit}>
        <SelectCurrency />
        <SelectCryptoCurrency />
        <InputSubmit type='submit' value={'Consult'} />
      </FormContainer>
    </>
  )
}

const FormContainer = styled.form`
  margin-bottom: 30px;
`
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

export default Form
