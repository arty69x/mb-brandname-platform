import { useState } from "react";
import { Button } from "../UI/Button";

export function AddToCart() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 400));
    } catch (error) {
      console.error("Add to cart error", error);
    } finally {
      setLoading(false);
    }
  };

  return <Button onClick={handleClick} loading={loading}>Quick Add</Button>;
}
