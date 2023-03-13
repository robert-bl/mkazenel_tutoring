import { Header } from "./components/header/Header";
import { Main } from "./components/pages/Main";
import { NavBar } from "./components/navigation/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
