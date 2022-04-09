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


