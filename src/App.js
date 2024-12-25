// Hooks

// Components
import MobileOverLayNavigation from "./components/MobileOverLayNavigation";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
// Style
import "./style/all.css";

// Icons

function App() {
  return (
    <div className="App">
      <MobileOverLayNavigation />
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
