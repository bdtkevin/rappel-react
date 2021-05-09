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
  // Déclaration d'une variable useSate, tout element utilisant cette variable sera mis à jour automatiquement par
  // react quand la valeur de celle-ci va changer.. Syntaxe :
  // const [variable, fonctionPourModifierLaVariable] = useState(ValeurParDefautDeLaVariable)
  const [darkmode, setDarkMode] = useState(false);

  return (
    // Appel du composant SApp (styled-component) avec comme props la variable useState "darkmode"
    <SApp darkmode={darkmode}>
      {/* Appel du composant GlobalStyle (voir styled-components) */}
      <GlobalStyle />

      {/* Appel du composant Header qui va contenir les <Link /> pour accéder aux composants
        ici le header sera toujours affiché peu importe l'url car il n'est pas dans le switch */}
      <Header />

      <div className='button-darkmode-container'>
        {/* Création d'un bouton pour modifier la valeur de la variable useState "darkmode" */}
        <SButton
          type='button'
          className='button-darkmode'
          onClick={() => {
            // Quand un click est effectué sur le bouton, change la valeur de la variable "darkmode" par son opposé grace au "!"
            // Si darkmode vaut true => passe darkmode a false, si il vaut false => le passe à true
            setDarkMode(!darkmode);
          }}
        >
          {/* Si la variable "darkmode" est "true" affiche lightmode, sinon affiche darkmode */}
          {darkmode ? 'lightmode' : 'darkmode'}
        </SButton>
      </div>

      {/* Déclaration du Switch, le Switch va définir quel composant afficher à l'écran en fonction
      du chemin entré dans l'url (BrowserRouter part is in "index.js") */}
      <Switch>
        {/* Affiche le composant <Home /> si l'url dans le navigateur est exactement : "/" */}
        <Route exact path='/' component={Home} />

        {/* Affiche le composant <First /> si l'url dans le navigateur commence par : "/First" */}
        <Route path='/first' component={First} />

        {/* Affiche le composant <Second /> si l'url dans le navigateur commence par : "/Second" */}
        <Route path='/second' component={Second} />

        {/* Affiche le composant <Third /> si l'url dans le navigateur commence par : "/toto-le-rigolo" */}
        <Route path='/toto-le-rigolo' component={Third} />
      </Switch>

      {/* Appel du composant Footer qui sera toujours affiché peu importe l'url car il n'est pas dans le switch */}
      <Footer />
    </SApp>
  );
}

export default App;
