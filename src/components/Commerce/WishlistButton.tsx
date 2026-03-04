import { Heart } from "lucide-react";

export function WishlistButton() {
  return (
    <button
      className="rounded-full border border-[#e5e5e5] bg-white p-2 text-[#666666] transition hover:text-[#d40000] focus-visible:ring-2 focus-visible:ring-[#111111]"
      aria-label="Add to wishlist"
      type="button"
    >
      <Heart size={16} />
    </button>
  );
}
