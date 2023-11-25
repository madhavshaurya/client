// src/components/review/ReviewCard.jsx
import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ReviewCard = ({ id, userName, rating, comment }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" component="div">
        User: {userName}
      </Typography>
      <Typography color="text.secondary">Rating: {rating}/5</Typography>
      <Typography color="text.secondary">Comment: {comment}</Typography>
    </CardContent>
  </Card>
);

ReviewCard.propTypes = {
  id: PropTypes.any,
  userName: PropTypes.any,
  rating: PropTypes.any,
  comment: PropTypes.any,
};

export default ReviewCard;
