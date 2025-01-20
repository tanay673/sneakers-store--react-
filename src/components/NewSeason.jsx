import React from 'react';
import '../styles/NewSeason.css';

const NewSeason = () => {
  return (
    <div className="newSeason">
      <div className="newSeasonItem">
        <img src="https://c.static-nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg" alt="shoes image" className="newSeasonImage" />
      </div>
      <div className="newSeasonItem">
        <h3 className="newSeasonTitleSm">Sports Collection</h3>
        <h1 className="newSeasonTitle">Build to Last</h1>
        <a href="#navbar">
          <button className="newSeasonButton">Check out Styles</button>
        </a>
      </div>
      <div className="newSeasonItem">
        <img src="https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=L725fuzFTnm6qEaqE7Urc5q6IR80EgYQEjBn_qtBIQg=" alt="shoes image" className="newSeasonImage" />
      </div>
    </div>
  );
};

export default NewSeason;