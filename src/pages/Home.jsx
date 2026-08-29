import {
  schoolCategories,
  diplomaCategories,
} from "../data/categories";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Hero />

    <h2
  style={{
    color: "#2563eb",
    marginBottom: "15px",
    marginTop: "20px",
  }}
>
  📖 School Education
</h2>
{schoolCategories.map((item, index) => (
  <CategoryCard key={index} title={item} />
))}
      <h2
  style={{
    color: "#2563eb",
    marginBottom: "15px",
    marginTop: "30px",
  }}
>
  🎓 Diploma Education
</h2>

  {diplomaCategories.map((item, index) => (
  <CategoryCard key={index} title={item} />
))} 
    </div>
  );
}

export default Home;
