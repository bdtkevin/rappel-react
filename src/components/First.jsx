import DisplayGif from './DisplayGif';
import SBasicPage from './styled/SBasicPage';

export default function First() {
  return (
    <SBasicPage>
      {/* Appel du composant "DisplayGif" avec en props "gifUrl" qui contient
        l'url du gif a afficher */}
      <h2>First Page</h2>
      <DisplayGif gifUrl='https://media1.tenor.com/images/002a604204f7912b76068da9bfae861b/tenor.gif' />
    </SBasicPage>
  );
}
