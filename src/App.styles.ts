import { css } from '@emotion/react'
import styled from '@emotion/styled'
import background from './assets/images/background.jpg'

export const globalStyles = css`
  body {
    margin: 0;
    color: #fff;
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 40px;
`

export const Placeholder = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
  border: 2px solid #fff;
  border-radius: 6px;
`