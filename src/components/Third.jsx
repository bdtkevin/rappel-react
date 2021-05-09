import DisplayGif from './DisplayGif';
import SBasicPage from './styled/SBasicPage';

export default function Third() {
  return (
    <SBasicPage>
      {/* Appel du composant "DisplayGif" avec en props "gifUrl" qui contient
        l'url du gif a afficher */}
      <h2>Third Page</h2>
      <DisplayGif gifUrl='https://media1.tenor.com/images/fb58edd9ea59ce1f19931551cd0c0589/tenor.gif' />
    </SBasicPage>
  );
}
