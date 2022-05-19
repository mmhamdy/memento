import { css } from '@emotion/react'
import styled from '@emotion/styled'
import background from './assets/images/background.jpg'

export const globalStyles = css`
  body {
    margin: 0;
    min-width: 900px;
    color: #FF8000;
    font-size: 1.5em;
    text-align: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const Wrapper = styled.div`
  max-width: 860px;
  margin: 40px auto;
`
export const Button = styled.button`
  width: 10em;
  padding: 0.8em;
  font-size: 0.6em;
  color: #FF8000;
  border-radius: 15px;
  border-style: solid;
  border-color: green;
  background: transparent;
  cursor: pointer;
`

export const Logo = styled.img`
  margin: auto;
  border-radius: 25px;
  width: 34%;
`


