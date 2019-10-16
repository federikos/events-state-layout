import React from 'react';
import PropTypes from 'prop-types';

const CardsView = ({ cards }) => (
  <ul className="cardsRoot">
    {
      cards.map((card, i) => {
        return (
          <li key={i} className='li'>
            <div className="liImgWrapper" style={{backgroundImage:  `url(${card.img}`}}>
            </div>
            <h2 className="header">{card.name}</h2>
            <span className="color">{card.color}</span>
            <span className="price">{`$${card.price}`}</span>
            <button className="cartBtn">add to cart</button>
          </li>
        )
      })
    }
  </ul>
);

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  )
}

export default CardsView;