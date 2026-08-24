import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <h2>School Education</h2>

      <CategoryCard title="Class 9" />
      <CategoryCard title="Class 10" />
      <CategoryCard title="Class 11" />
      <CategoryCard title="Class 12" />

      <h2>Diploma Education</h2>

      <CategoryCard title="Diploma 1st Year" />
      <CategoryCard title="Diploma 2nd Year" />
      <CategoryCard title="Diploma 3rd Year" />
    </div>
  );
}

export default Home;
