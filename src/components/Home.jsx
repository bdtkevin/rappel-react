import { useEffect, useState } from 'react';
import axios from 'axios';
import SHome from './styled/SHome';
import { SButton } from './styled/templates';

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
        setFact(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <SHome>
      <SButton
        type='button'
        onClick={() => {
          getFact();
        }}
      >
        New Fact
      </SButton>
      {isLoading && <p>loading...</p>}
      {!isLoading && error && <p>error :'(</p>}
      {!isLoading && !error && (
        <div className='fact-container'>
          <img src={fact.icon_url} alt='chuck norris'></img>
          <p>{fact.value}</p>
        </div>
      )}
    </SHome>
  );
}
