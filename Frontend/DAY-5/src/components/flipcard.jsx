import React from 'react';
import '../assets/flipcard.css';

function    Events() {
  return (
    <section className="my-interests">
    <div className="card">
      <div className="card__content">
        <div className="card__front card__front-concerts">
          <h3 className="card__title">Concerts</h3>
          <p className="card__subtitle">Top 5</p>
        </div>
        <div className="card__back">
          <ul className="card__body">
            <li>🎤 Alanis Morissette</li>
            <li>✨ The Flaming Lips</li>
            <li>🪕 Steve Martin &amp; The Steep Canyon Rangers</li>
            <li>🥁 No Doubt</li>
            <li>🎸 CSNY</li>
          </ul>
          <br />
          <p></p>
          <center> Rock on! 🤘</center>
          <p />
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card__content">
        <div className="card__front card__front-shows">
          <h3 className="card__title">TV Shows</h3>
          <p className="card__subtitle">Top 5</p>
        </div>
        <div className="card__back">
          <ul className="card__body">
            <li>⚖️ Better Call Saul</li>
            <li>💰 Sucession</li>
            <li>🎒 Derry Girls</li>
            <li>📹 How To With John Wilson</li>
            <li>❄️ Fargo</li>
          </ul>
          <br />
          <p className="card__subtitle"></p>
          <center> Happy watching! 📺 </center>
          <p />
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card__content">
        <div className="card__front card__front-restaurant">
          <h3 className="card__title">Restaurants</h3>
          <p className="card__subtitle">Top 5</p>
        </div>
        <div className="card__back">
          <ul className="card__body">
            <li>
              🧄 Best hummus:{" "}
              <a
                href="https://www.tuskpdx.com/"
                target="top"
                className="about-link"
              >
                Tusk
              </a>
            </li>
            <li>
              🍷 Best wine:{" "}
              <a
                href="https://www.damerestaurant.com/"
                target="top"
                className="about-link"
              >
                Dame
              </a>
            </li>
            <li>
              🌮 Best tacos:{" "}
              <a
                href="https://littleconejo.com/"
                target="top"
                className="about-link"
              >
                Little Conejo
              </a>
            </li>
            <li>
              🥟 Best dumplings:{" "}
              <a
                href="https://www.tokipdx.com/"
                target="top"
                className="about-link"
              >
                Toki
              </a>
            </li>
            <li>
              🍳 Best brunch:{" "}
              <a
                href="https://www.tinshedgardencafe.com/"
                target="top"
                className="about-link"
              >
                Tin Shed
              </a>
            </li>
          </ul>
          <br />
          <p className="card__subtitle"></p>
          <center> Bon Appetite! 👩‍🍳</center>
          <p />
        </div>
      </div>
    </div>
  </section>
  

  );
}

export default Events;
