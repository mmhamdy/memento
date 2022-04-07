import { Global } from '@emotion/react'
import { globalStyles, Grid, Wrapper, Placeholder } from './App.styles'


function App() {

  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <h1>Bird Matcher</h1>
      <button>Start Game</button>
      <Grid>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </Grid>
    </Wrapper>
  )
}

export default App;
