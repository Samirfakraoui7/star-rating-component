import { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.string,
  messages: PropTypes.array,
  className: PropTypes.string,
  onSetRating: PropTypes.func,
};

const starRatingContainer = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  margin: "16px",
};
const starContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
};

export default function StarRating({
  color = "#ffff00",
  textColor = "#ffff00",
  size = "32",
  maxRating = 5,
  defaultRating = 1,
  messages = [],
  className = "",
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  function handleRating(ratingNum) {
    setRating(ratingNum);
    onSetRating(ratingNum);
  }
  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color: textColor || color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={starRatingContainer} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => {
          return (
            <Star
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              color={color}
              key={i}
              size={size}
              onRate={() => handleRating(i + 1)}
              onMouseIn={() => setTempRating(i + 1)}
              onMouseOut={() => setTempRating(0)}
            />
          );
        })}
      </div>
      <p style={textStyle}>
        {maxRating === messages.length
          ? messages[rating - 1]
          : rating || tempRating}
      </p>
    </div>
  );
}
