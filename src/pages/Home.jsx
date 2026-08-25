import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
      <Navbar />
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

      <CategoryCard title="Class 9" />
      <CategoryCard title="Class 10" />
      <CategoryCard title="Class 11" />
      <CategoryCard title="Class 12" />

      <h2
  style={{
    color: "#2563eb",
    marginBottom: "15px",
    marginTop: "30px",
  }}
>
  🎓 Diploma Education
</h2>

      <CategoryCard title="Diploma 1st Year" />
      <CategoryCard title="Diploma 2nd Year" />
      <CategoryCard title="Diploma 3rd Year" />
      <Footer />
    </div>
  );
}

export default Home;
