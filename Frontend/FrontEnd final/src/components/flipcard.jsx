import React from 'react';
import '../assets/flipcard.css';

function    Events() {
  return (
  
    <section className="my-interests">
          <h1>Yoga <br></br> Hasanas </h1>

    <div className="card">
      <div className="card__content">
        <div className="card__front card__front-concerts">
          <h3 className="card__title">PLANK POSE</h3>
        </div>
        <div className="card__back">
          <ul className="card__body">
          <p>Nurture your love-hate relationship with Plank Pose. A beginner's best friend, it's the perfect precursor to more challenging arm balances.</p>

          </ul>
          <br />

          <center> Work on🤘</center>
          <p />
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card__content">
        <div className="card__front card__front-shows">
          <h3 className="card__title">HERO POSE</h3>
        </div>
        <div className="card__back">
          <ul className="card__body">
           <p>Virasana is a balm for tired legs at the end of the day, as well as an alternative to Lotus for seated meditation.</p>
          </ul>
          <br />
          <p className="card__subtitle"></p>
          <center>Start working 📺 </center>
          <p />
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card__content">
        <div className="card__front card__front-restaurant">
          <h3 className="card__title">MOUNTAIN POSE</h3>
        </div>
        <div className="card__back">
          <ul className="card__body">
          <p>Virasana is a balm for tired legs at the end of the day, as well as an alternative to Lotus for seated meditation.</p>

          </ul>
          <br />
          <p className="card__subtitle"></p>
          <center> Work over it 👩‍🍳</center>
          <p />
        </div>
      </div>
    </div>
  </section>
  

  );
}

export default Events;
