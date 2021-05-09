import DisplayGif from './DisplayGif';
import SBasicPage from './styled/SBasicPage';

export default function Second() {
  return (
    <SBasicPage>
      <h2>Second Page</h2>
      <DisplayGif gifUrl='https://media1.tenor.com/images/50b4f81811146b8e6ca3f9e90942f4f2/tenor.gif' />
    </SBasicPage>
  );
}
