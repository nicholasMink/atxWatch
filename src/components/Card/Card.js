import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

function Card(props) {
  const { card, type } = props;
  const renderCardPlain = () => (
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
  const renderCardAnimated = () => (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card-header">
            <p className="card-title">
              {card.title}
            </p>
            <p className="card-date">
              {card.date}
            </p>
          </div>
          <div className="card-image" />
          <p className="card-content">
            {card.content}
          </p>
        </div>
        <div className="flip-card-back">
          <div className="card-header">
            <p className="card-title">
              {card.title}
            </p>
            <p className="card-date">
              {card.date}
            </p>
          </div>
          <div className="card-image" />
          <p className="card-content">{card.content}</p>
        </div>
      </div>
    </div>
  );
  const renderedCard = type === 'animated' ? renderCardAnimated() : renderCardPlain();
  return renderedCard;
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

