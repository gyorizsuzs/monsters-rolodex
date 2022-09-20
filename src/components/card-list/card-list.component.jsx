import { Component } from 'react';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <div className="card-container">
            <img
              alt={`monster ${monster.name}`}
              src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
