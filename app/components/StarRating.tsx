interface StarRatingProps {
  rating: number
  maxRating?: number
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  const stars = []
  
  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= Math.floor(rating)
    const isHalfFilled = i === Math.ceil(rating) && rating % 1 !== 0
    
    stars.push(
      <span
        key={i}
        className={`star ${
          isFilled ? 'filled' : isHalfFilled ? 'half-filled' : ''
        }`}
      >
        {isFilled || isHalfFilled ? '★' : '☆'}
      </span>
    )
  }
  
  return (
    <div className="rating-stars">
      {stars}
    </div>
  )
}