/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import styled from '@emotion/styled'

const useSelectCurrency = (label, currencies) => {
  const [state, setState] = useState('')

  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>

      <Select value={state} onChange={e => setState(e.target.value)}>
        <option value=''>-- Select Currency --</option>
        {currencies.map(currency => (
          <option key={currency.id} value={currency.id}>
            {currency.name}
          </option>
        ))}
      </Select>
    </>
  )

  return [state, SelectCurrency]
}

const Label = styled.label`
  display: block;
  color: #fff;
  font-family: 'Outfit', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 20px;
`

export default useSelectCurrency
