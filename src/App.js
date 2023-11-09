import ProfileCard from "./ProfileCard/ProfileCard";
import zapasNegras from "./img/zapas negras.png";
import zapasVerdes from "./img/zapas verdes.png";
import zapasAzules from "./img/zapas azules.avif";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import React from 'react';
import "bulma/css/bulma.css";


function App() {
  const containerStyle = {
    backgroundColor: '#1e4091', 
  };

  return (
    <div style={containerStyle}>
      <div>
        <NavBar />
      </div>
      <section className="hero">
        <div className="hero-body"></div>
      </section>
      <ItemListConteiner greeting={'Bienvenidos'} />
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-4 is-desktop">
            <ProfileCard titulo="Convers" arroba="ciudad" img={zapasNegras} />
          </div>
          <div className="column is-4 is-desktop">
            <ProfileCard titulo="Running" arroba="run" img={zapasVerdes} />
          </div>
          <div className="column is-4 is-desktop">
            <ProfileCard titulo="Sport" arroba="ciudad1" img={zapasAzules} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
