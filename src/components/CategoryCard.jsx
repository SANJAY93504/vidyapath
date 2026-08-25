function CategoryCard({ title }) {
  return (
    <button
      style={{
        padding: "15px 25px",
        margin: "10px",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "#2563eb",
        color: "white",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {title}
    </button>
  );
}

export default CategoryCard;