/* eslint-disable react/prop-types */
import styled from '@emotion/styled'

const Alert = ({ children }) => {
  return <AlertContainer>{children}</AlertContainer>
}

const AlertContainer = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
`

export default Alert
