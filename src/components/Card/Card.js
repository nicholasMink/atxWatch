import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

function Card(props) {
  const { card } = props;
  const renderCard = () => (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="card-title">
          {card.title}
        </p>
        <p className="card-date">
          {card.date}
        </p>
      </div>
      <div className="card-content">
        {card.content}
      </div>
    </div>
  );
  const cardComponent = renderCard();
  return cardComponent;
}

Card.defaultProps = {
  card: {
    title: '',
    date: '',
    content: '',
  },
  type: '',
}

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
  }),
  type: PropTypes.string,
}

export default Card

