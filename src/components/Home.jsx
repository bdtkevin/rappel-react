import { useEffect, useState } from 'react';
import axios from 'axios';
import SHome from './styled/SHome';
import { SButton } from './styled/templates';

// Disclaimer, la gestion d'erreur et de chargement sur l'appel axios est loin d'être indispensable, c'est juste un exemple.
// (Et elle peut s'effectuer de plein de façon différentes)

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fact, setFact] = useState({
    icon_url: '',
    value: '',
  });

  const getFact = () => {
    setIsLoading(true);
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(({ data }) => {
        // Si la réponse axios est positive execute ce code
        // Change la valeur du useState "fact" avec les données récupéré par l'appel axios
        setFact(data);
      })
      .catch(() => {
        // Si il y a eu une erreur avec l'appel axios execute ce code
        // Si l'api répond un message d'erreur, change la valeur de la variable useState "error" pour true;
        setError(true);
      })
      .finally(() => {
        // Quand l'appel axios est terminé execute ce code
        // Quand l'appel axios est fini, change la valeur de la variable useState "isLoading" pour false (le chargement est fini)
        setIsLoading(false);
      });
  };

  // Execute le code a l'interieur du useEffect quand le composant est créé, ou quand une des variables dans le
  // tableau de dependance du useEffect change, ici le tableau est vide, donc le code du useEffect est éxécuté
  // une seule fois à l'appel du composant
  useEffect(() => {
    // Appel la fonction "getFact" à la création du composant, chargé de faire un appel axios pour récupéré une chuck norris fact
    getFact();
  }, []);

  return (
    <SHome>
      <SButton
        type='button'
        onClick={() => {
          // Quand l'utilisateur clique sur le bouton, appel la fonction "getFact" qui fait un appel API pour recuperer une fact
          getFact();
        }}
      >
        New Fact
      </SButton>
      {/* Si isLoading est true, affiche "loading..." */}
      {isLoading && <p>loading...</p>}

      {/* Si isLoading est false et error est true; affiche "error :'(" */}
      {!isLoading && error && <p>error :'(</p>}

      {/* Si isLoading est false et error est false, affiche la chuck norris fact */}
      {!isLoading && !error && (
        <div className='fact-container'>
          <img src={fact.icon_url} alt='chuck norris'></img>
          <p>{fact.value}</p>
        </div>
      )}
    </SHome>
  );
}
