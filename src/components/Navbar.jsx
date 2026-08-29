import { theme } from "../styles/theme";
import { SITE_NAME } from "../utils/constants";
function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: theme.primary,
        color: "white",
        padding: "15px 30px",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      {SITE_NAME}
    </nav>
  );
}

export default Navbar;