import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import PopularNow from "./components/popular-now/PopularNow";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Intro />
      <PopularNow />
    </div>
  );
}

export default App;
