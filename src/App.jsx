import Hero from "./Component/hero";
import Navber from "./Component/navber";
import "./App.css";
import Card from "./Component/Card";
import Hero2 from "./Hero2";

function App() {
  return (
    <>
      <header className="w-full bg-emerald-200">
        <Navber />
      </header>
      <main className="w-full">
        <Hero />
        <Hero2/>
        
        <Card/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
