import { COPYRIGHT_TEXT } from "../utils/constants";
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        textAlign: "center",
        padding: "15px",
        marginTop: "40px",
      }}
    >
      {COPYRIGHT_TEXT}
    </footer>
  );
}

export default Footer;