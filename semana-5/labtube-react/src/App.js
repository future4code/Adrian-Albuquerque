import "./App.css";
import React from "react";
// import imagem from 'https://picsum.photos/400/400?a=1';
function reproduzirVideo() {
  alert("Hello World !");
}
function App() {
  return (
    <div className="App">
      <header>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </header>
      <main>
        <nav className="menu-vertical">
          <ul>
            <li>Inicio</li>
            <li>Em alta</li>
            <li>Inscrições</li>
            <hr />
            <li>Originais</li>
            <li>Histórico</li>
          </ul>
        </nav>

        <section className="painel-de-videos media1">
          <div
            className="box-pagina-principal"
            onClick={reproduzirVideo}
          >
            <img src="" alt="" />
            <h4>Titulo do Video</h4>
          </div>

          <div
            className="box-pagina-principal media2"
            onClick={reproduzirVideo}
          >
            <img src="" alt="" />
            <h4>Titulo do Video</h4>
            <div />

            <div
              className="box-pagina-principal media3"
              onClick={reproduzirVideo}
            >
              <img src="" alt="" />
              <h4>Titulo do Video</h4>
            </div>

            <div
              className="box-pagina-principal media4."
              onClick={reproduzirVideo}
            >
              <img src="" alt="" />
              <h4>Titulo do Video</h4>
            </div>

            <div
              className="box-pagina-principal media5"
              onClick={reproduzirVideo}
            >
              <img src="" alt="" />
              <h4>Titulo do Video</h4>
            </div>

            <div
              className="box-pagina-principal media6"
              onClick={reproduzirVideo}
            >
              <img src="" alt="" />
              <h4>Titulo do Video</h4>
            </div>
            <div
              className="box-pagina-principal media7"
              onClick={reproduzirVideo}
            >
              <img src="" alt="" />
              <h4>Titulo do Video</h4>
            </div>
            <div
              className="box-pagina-principal media8"
              onClick={reproduzirVideo}
            >
              <img src="" alt="" />
              <h4>Titulo do Video</h4>
            </div>/
          </div>
        </section>
      </main>
      <footer>
        <h4>Oi, eu moro no Footer !</h4>
      </footer>
    </div>
  );
}

export default App;
