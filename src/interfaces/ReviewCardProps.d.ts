// interfaces/ReviewCardProps.d.ts
import { ReactElement } from "react";

export interface ReviewCardProps {
    id: any;
    userName: any;
    rating: any;
    comment: any;
}

declare const ReviewCard: (props: ReviewCardProps) => ReactElement;

export default ReviewCard;
