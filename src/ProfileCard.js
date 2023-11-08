import { useState, useEffect } from "react";

function ProfileCard(props) {
  const [count, setConunt] = useState(0);

  let { titulo, arroba, img } = props;

  function handleClickSuma() {
        setConunt(count + 1); 
        }
  function handleClickResta() {
    
    if(count > 0 )
    setConunt(count - 1);

  }

  return (
    <div className="card">
      <div className="card-img">
        <figure className="image is-1by1">
          <img src={img} alt="logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{titulo}</p>
          <p className="subtitle is-6">{arroba}</p>
        </div>
        <div className="columns">
          <div className="column is-4">
            <button
              className="button is-danger is-fullwidth"
              onClick={handleClickSuma}
            >
              +
            </button>
          </div>
          <div className="column is-4">
            <button
              className="button is-danger is-fullwidth"
              onClick={handleClickResta}
            >
              -
            </button>
          </div>
          <div className="column is-6">
            <span>likes {count} 0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
