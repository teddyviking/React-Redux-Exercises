import React, { Component, PropTypes } from 'react';

class Character extends Component {
  render(){
    const { name, actor, seasons, alive } = this.props.item;
    /* TODO - pintar una fila de la tabla  DONE*/
    return (
      <tr>
        <td>{name}</td>
        <td>{actor}</td>
        <td className="center">{_formatSeasons(seasons)}</td>
        <td className="center">{alive?'Sí':'No'}</td>
      </tr>
    );
  }
}

function _formatSeasons(seasons) {
  return seasons.map(season => season + ' ');
}

Character.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    seasons: PropTypes.arrayOf(PropTypes.number).isRequired,
    alive: PropTypes.bool.isRequired
  }).isRequired
}

export default Character;
