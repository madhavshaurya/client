// src/pages/Review.tsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ReviewCard from "../components/review/ReviewCard";

interface ReviewCardProps {
  id: number;
  userName: string;
  rating: number;
  comment: string;
}

const Reviews: React.FC = () => {
  // Dummy data for reviews
  const dummyReviews: ReviewCardProps[] = [
    { id: 1, userName: "Siddharta Kumar", rating: 4, comment: "Great service!" },
    { id: 2, userName: "Vinay Agarawal", rating: 5, comment: "Excellent experience!" },
    { id: 3, userName: "Rustam Prasad", rating: 4, comment: "Brilliant and Affordable" },
    { id: 4, userName: "Anish Manna", rating: 5, comment: "Excellent experience!" },
    { id: 5, userName: "Ashmit Sinha", rating: 4, comment: "Great service!" },
    { id: 6, userName: "Aditya Raj", rating: 5, comment: "Excellent experience!" },
  ];

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#fafafa">
        Reviews List
      </Typography>

      <List>
        {dummyReviews.map((review) => (
          <ListItem key={review.id}>
            <ReviewCard
              id={review.id}
              userName={review.userName}
              rating={review.rating}
              comment={review.comment}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Reviews;
