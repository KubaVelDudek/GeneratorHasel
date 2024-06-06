import { useRef, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  const [znaki, setZnaki] = useState('');
  const znakiNumer = Number(znaki);

  const litery = useRef();
  const cyfry = useRef();
  const znakiSpecjalne = useRef();

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function generuj() {
    const tabMale = 'aąbcćdeęfghijklłmnoópqrsśtuvwxyzźż';
    const tabLitery = 'AĄBCĆDEĘFGHIJKLŁMNOÓPQRSŚTUVWXYZŹŻ';
    const tabCyfry = '0123456789';
    const tabZnaki = '!@#$%^&*()_+-=';
    var haslo = '';
    var iloscWybranych = 0;
    if (litery.current.checked) {
      iloscWybranych += 1;
      if (iloscWybranych <= znakiNumer) {
        haslo += tabLitery.charAt(randomInt(tabLitery.length));
      }
    }
    if (cyfry.current.checked) {
      iloscWybranych += 1;
      if (iloscWybranych <= znakiNumer) {
        haslo += tabCyfry.charAt(randomInt(tabCyfry.length));
      }
    }
    if (znakiSpecjalne.current.checked) {
      iloscWybranych += 1;
      if (iloscWybranych <= znakiNumer) {
        haslo += tabZnaki.charAt(randomInt(tabZnaki.length));
      }
    }
    for (var i = 0; i < znakiNumer - iloscWybranych; i++) {
      haslo += tabMale.charAt(randomInt(tabMale.length));
    }
    alert(haslo);
  }
  return (
    <div id="wrapper">
      <h1>Generator Haseł</h1>
      <label htmlFor="znaki">Ile znaków?</label>
      <input
        type="number"
        name="znaki"
        value={znaki}
        onChange={(e) => setZnaki(e.target.value)}
        className='form-control'
      ></input>
      <input type="checkbox" name="litery" ref={litery} className='form-check-input'></input>
      <label htmlFor="litery">Małe i wielkie litery</label>
      <br></br>
      <input type="checkbox" name="cyfry" ref={cyfry} className='form-check-input'></input>
      <label htmlFor="cyfry">Cyfry</label>
      <br></br>
      <input type="checkbox" name="znakiSpecjalne" ref={znakiSpecjalne} className='form-check-input'></input>
      <label htmlFor="znakiSpecjalne">Znaki specjalne</label>
      <br></br>
      <button onClick={() => generuj()} className='btn btn-primary'>Generuj hasło</button>
    </div>
  );
}

export default App;
