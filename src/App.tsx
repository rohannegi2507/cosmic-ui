import React from 'react';

import './App.css';
import styled from 'styled-components';
import LeftNavBar from './components/LeftNavBar';
import ContentView from './components/ContentView/ContentView';
import Header from './components/Header/Header.component';

function App() {
  const App = styled.div`
   height:100vh;
   position:relative;
  `
  const Main  = styled.main`
  display:flex;
  `

  return (
    <App className="App">
      <Header />
      <Main>
        <LeftNavBar/>
        <ContentView />
      </Main>
    </App>
  );
}

export default App;
