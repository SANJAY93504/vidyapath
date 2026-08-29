import { theme } from "../styles/theme";
import { SITE_NAME, TAGLINE } from "../utils/constants";
function Hero() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: theme.primary,
        }}
      >
        📚 {SITE_NAME}
      </h1>

      <p
        style={{
          fontSize: "22px",
          marginTop: "10px",
        }}
      >
        {TAGLINE}
      </p>
    </div>
  );
}

export default Hero;