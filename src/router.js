import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Cave from './habitatFiles/cave';
import Forest from './habitatFiles/forest';
import Grassland from './habitatFiles/grassland';
import Mountain from './habitatFiles/mountain';
// import Rare from './habitatFiles/rare';
import RoughTerrain from './habitatFiles/rough-terrain';
import Sea from './habitatFiles/sea';
import Urban from './habitatFiles/urban';
import WatersEdge from './habitatFiles/waters-edge';

const Home = () => (
  <div id="homeDiv">
    <div id="homeText">
      <h3>Click on one of the habitats above to see which Pokémon live there!</h3>
    </div>
    <div id="pokeImgDiv">
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
        id="pokeballImg"
      />
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
        id="pokeballImg"
      />
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
        id="pokeballImg"
      />
    </div>
  </div>
);

function ReactRouter() {
  return (
    /*
      <li className="routerLi"><Link to="/rare/">Rare</Link></li>
      <Route path="/rare/" component={Rare} />
    */
    <Router>
      <div>
        <ul id="routerUl">
          <li className="routerLi">
            <Link to="/">Home</Link>
          </li>
          <li className="routerLi">
            <Link to="/cave/">Cave</Link>
          </li>
          <li className="routerLi">
            <Link to="/forest/">Forest</Link>
          </li>
          <li className="routerLi">
            <Link to="/grassland/">Grassland</Link>
          </li>
          <li className="routerLi">
            <Link to="/mountain/">Mountain</Link>
          </li>

          <li className="routerLi">
            <Link to="/rough-terrain/">Rough-Terrain</Link>
          </li>
          <li className="routerLi">
            <Link to="/sea/">Sea</Link>
          </li>
          <li className="routerLi">
            <Link to="/urban/">Urban</Link>
          </li>
          <li className="routerLi">
            <Link to="/waters-edge/">Waters-Edge</Link>
          </li>
        </ul>

        <Route path="/" exact component={Home} />
        <Route path="/cave/" component={Cave} />
        <Route path="/forest/" component={Forest} />
        <Route path="/grassland/" component={Grassland} />
        <Route path="/mountain/" component={Mountain} />

        <Route path="/rough-terrain/" component={RoughTerrain} />
        <Route path="/sea/" component={Sea} />
        <Route path="/urban/" component={Urban} />
        <Route path="/waters-edge/" component={WatersEdge} />
      </div>
    </Router>
  );
}
export default ReactRouter;
