// Création du composant "DisplayGif" qui récupere le props "gifUrl" et qui retourne l'img correspondant au lien
// passé dans le props "gifUrl"
export default function DisplayGif({ gifUrl }) {
  return <img src={gifUrl} alt='gif'></img>;
}
