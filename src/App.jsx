import Header from "./components/Header";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import SundayRoast from "./components/SundayRoast";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <Story />
        <Menu />
        <SundayRoast />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
