import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';
import { SButton } from './components/styled/templates';

function App() {
  const [darkmode, setDarkMode] = useState(false);

  return (
    <SApp darkmode={darkmode}>
      <GlobalStyle />
      <Header />

      <div className='button-darkmode-container'>
        <SButton
          type='button'
          className='button-darkmode'
          onClick={() => {
            setDarkMode(!darkmode);
          }}
        >
          {darkmode ? 'lightmode' : 'darkmode'}
        </SButton>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/first' component={First} />
        <Route path='/second' component={Second} />
        <Route path='/toto-le-rigolo' component={Third} />
      </Switch>

      <Footer />
    </SApp>
  );
}

export default App;
