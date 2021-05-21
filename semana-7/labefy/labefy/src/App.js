import React from 'react'
import GlobalStyle from './Styles/Global'
import { Main } from './Styles/Styled'

class App extends React.Component {

  state = {
    display: ''
  }

  render() {
    return (
      <Main>
        <h1>Hello World</h1>
        {/* <GlobalStyle/> */}
      </Main>
    );
  }
}

export default App;
