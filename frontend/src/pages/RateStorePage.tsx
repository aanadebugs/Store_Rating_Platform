import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  createRating,
  updateRating,
  getUserRating,
} from "../api/rating.api";

export function RateStorePage() {
  const { storeId } = useParams();

  const [rating, setRating] =
    useState(0);

  const [hasRated, setHasRated] =
    useState(false);

  useEffect(() => {
    async function loadRating() {
      try {
        const existingRating =
          await getUserRating(
            storeId!
          );

        if (existingRating) {
          setRating(
            existingRating
          );

          setHasRated(true);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadRating();
  }, [storeId]);

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    if (rating === 0) {
      alert(
        "Please select a rating"
      );

      return;
    }

    try {
      if (hasRated) {
        await updateRating(
          storeId!,
          rating
        );

        alert(
          "Rating updated successfully"
        );
      } else {
        await createRating({
          storeId: storeId!,
          rating,
        });

        setHasRated(true);

        alert(
          "Rating submitted successfully"
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Operation failed"
      );
    }
  }

  return (
    <div>
      <h1>Rate Store</h1>

      <form onSubmit={handleSubmit}>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map(
            (star) => (
              <span
                key={star}
                onClick={() =>
                  setRating(star)
                }
              >
                {star <= rating
                  ? "★"
                  : "☆"}
              </span>
            )
          )}
        </div>

        <br />

        <p>
          Your Rating: {rating}/5
        </p>

        <button type="submit">
          {hasRated
            ? "Update Rating"
            : "Submit Rating"}
        </button>
      </form>
    </div>
  );
}