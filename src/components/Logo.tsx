import logo from "@/assets/logo.jpg";

/**
 * Brand mark. `logo.jpg` is a photo of the full logo lockup (badge + wordmark),
 * so we crop to just the circular badge via background-size/position — it stays
 * sharp at any size and avoids shipping a second asset.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="THE GILL EXIM logo"
      className={`block shrink-0 bg-white bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "204% 160%",
        backgroundPosition: "53.5% 32%",
      }}
    />
  );
}
