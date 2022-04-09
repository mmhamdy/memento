import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled.div`
  position: relative;
`
type Flippable = {
  flipped: boolean
}

const imgStyles = css`
  width: 100%;
  height: 100%;
  display: block;
  border: 2px solid #fff;
  border-radius: 6px;
`

export const FrontImg = styled.img<Flippable>`
  ${imgStyles}
  transform: ${({flipped}) => flipped ? 'rotateY(0deg)' : 'rotateY(90deg)'};
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
  position: absolute;
`

export const BackImg = styled.img<Flippable>`
  ${imgStyles}
  transform:${({flipped}) => flipped ? 'rotateY(90deg)' : 'rotateY(0deg)'};
  transition: all ease-in 0.2s;
  transition-delay: ${({flipped}) => flipped ? '0s' : '0.2s'};
`