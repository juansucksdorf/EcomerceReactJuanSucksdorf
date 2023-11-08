import ProfileCard from "./ProfileCard";
import alexaimg from "./img/alexa.png";
import cortana from "./img/cortana.png";
import siri from "./img/siri.png";
import "bulma/css/bulma.css";
function App() {
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <h1>asistentes</h1>
        </div>
      </section>

      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-4 is-desktop">
            <ProfileCard titulo="axa" arroba="alezaxp" img={alexaimg} />
          </div>
          <div className="column is-4 is-desktop">
            <ProfileCard titulo="axa" arroba="alezaxp" img={cortana} />
          </div>

          <div className="column is-4 is-desktop">
            <ProfileCard titulo="alex" arroba="alezp" img={siri} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
