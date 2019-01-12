import React from 'react';
import regeneratorRuntime, { async } from 'regenerator-runtime'; // eslint-disable-line 

function Hoc(PassedComponent, habitatName) {
  return class DataComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dataArr: [],
        dataArrOriginal: [],
        display: [],
      };
    }

    componentWillMount() {
      const dataRecieved = this.update;
      const saveData = this.saveData;
      const speciesArr = [];
      async function sortData(input) {
        if (input === null) {
          return dataRecieved(null);
        }
        const habitatsArrCpy = input.slice(0);
        if (habitatsArrCpy.length === 0) {
          dataRecieved(speciesArr);
          return saveData(speciesArr);
        }
        try {
          const request2 = await fetch(
            `https://pokeapi.co/api/v2/pokemon-form/${habitatsArrCpy[0]}/`,
          );
          const data2 = await request2.json();
          speciesArr.push({
            name: data2.name,
            sprite0: data2.sprites.front_default,
            sprite1: data2.sprites.back_default,
          });
        } catch (error) {
          sortData(null);
        }
        return sortData(habitatsArrCpy.slice(1));
      }
      async function getData() {
        try {
          const habitat = `https://pokeapi.co/api/v2/pokemon-habitat/${habitatName.toLowerCase()}/`;
          const request1 = await fetch(habitat);
          const data1 = await request1.json();
          const habitatsArr = data1.pokemon_species.map(item => item.name);
          sortData(habitatsArr);
        } catch (error) {
          sortData(null);
        }
      }
      getData();
    }

    update = input => {
      this.setState({
        dataArr: input,
        display:
          input === null ? null : (
            <ul id="pokemonContainer">
              {input.map(item => (
                <li className="pokemonList" key={item.name}>
                  <img
                    id={item.name}
                    alt=""
                    src={item.sprite0}
                    onMouseOver={this.hoverFunction}
                    onFocus={this.hoverFunction}
                    onMouseLeave={this.hoverFunction}
                    onBlur={this.hoverFunction}
                  />
                  <br />
                  <button id={item.name} onClick={this.infoFunction} type="button">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          ),
      });
    };

    saveData = input => {
      this.setState({
        dataArrOriginal: input,
      });
    };

    inputFunc = event => {
      const { ...originalData } = this.state;
      const testInput = event.target.value;
      const updateData = originalData.dataArrOriginal.filter(
        cVal => cVal.name.indexOf(testInput) !== -1,
      );
      this.update(updateData);
    };

    hoverFunction = event => {
      const { ...data } = this.state;
      const findPokemon = data.dataArr.filter(item => item.name === event.target.id);
      let changeImg = document.getElementsByTagName('img');
      changeImg = [...changeImg].filter(item => item.id === event.target.id);
      if (event.type === 'mouseover') {
        changeImg[0].src = findPokemon[0].sprite1;
      }
      if (event.type === 'mouseleave') {
        changeImg[0].src = findPokemon[0].sprite0;
      }
    };

    infoFunction = event => {
      let search = event.target.id;
      if (search === 'nidoran-f') {
        search = 'nidoran ♀';
      }
      if (search === 'nidoran-m') {
        search = 'nidoran ♂';
      }
      if (search === 'mr-mime') {
        search = 'mr. mime';
      }
      window.open(`https://bulbapedia.bulbagarden.net/wiki/${search}_(Pok%C3%A9mon)`);
    };

    render() {
      const { ...info } = this.state;
      return (
        <div>
          <h4>{habitatName}</h4>
          <div id="inputDiv">
            <input type="text" placeholder="Search for a Pokémon..." onChange={this.inputFunc} />
          </div>
          <PassedComponent {...this.props} display={info.display} />
        </div>
      );
    }
  };
}
export default Hoc;
