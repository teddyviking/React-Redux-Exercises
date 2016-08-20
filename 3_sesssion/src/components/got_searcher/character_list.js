import React, { Component, PropTypes } from 'react';
import Character from './character';

class CharacterList extends Component {
  render(){
    const { items } = this.props;
    //TODO - generar los componentes CharacterItem DONE
    const characters = items.map(character => <Character key={character.name} item={character}/>);
    return (
      <div className="search-results">
        <table>
          <thead>
            <tr>
              <th>Personaje</th>
              <th>Actor</th>
              <th className="center">Temporadas</th>
              <th className="center">Vivo</th>
            </tr>
          </thead>
          <tbody>
            { characters }
          </tbody>
        </table>
    </div>
    )
  }
}

CharacterList.propTypes = {
  items: React.PropTypes.array
}

CharacterList.defaultProps = {
  items: []
}

export default CharacterList;
