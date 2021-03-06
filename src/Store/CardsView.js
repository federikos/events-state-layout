import React from 'react';
import PropTypes from 'prop-types';

const CardsView = ({ cards }) => (
  <div className="cardsRoot">
    {
      cards.map((card, i) => {
        return (
          <div key={i} className='card'>
            <h2 className="header">{card.name}</h2>
            <span className="color">{card.color}</span>
            <div className="cardImgWrapper" style={{width: '100%', height: 160, backgroundImage:  `url(${card.img}`, backgroundSize: 'cover', backgroundPosition: 'center 70%'}}>
            </div>
            <div className="cardPurchase">
              <span className="price">{`$${card.price}`}</span>
              <button className="cartBtn">add to cart</button>
            </div>
          </div>
        )
      })
    }
  </div>
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