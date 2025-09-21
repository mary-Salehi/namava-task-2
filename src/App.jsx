import { useGlobalStyles } from "./styles/globals";
import Header from "./components/layout/header/Header";
import Filters from "./components/filters/Filters";

function App() {
  useGlobalStyles();

  return (
    <div>
      <Header />
      <main className="container">
        <Filters />
      </main>
    </div>
  );
}

export default App;
