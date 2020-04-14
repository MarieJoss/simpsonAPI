import React from 'react';

function QuoteCard ({ simps }) {
    return (
      <div className="QuoteCard">
        <img 
          src={simps.image}
          alt={simps.character} 
        />
        <figcaption>
          <blockquote>{simps.quote}</blockquote>
          <p>
            <cite>{simps.character}</cite>
          </p>
        </figcaption>
      </div>
    );
  }

export default QuoteCard;