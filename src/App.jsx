import { useGlobalStyles } from "./styles/globals";
import Header from "./components/layout/header/Header";
import BrowseSection from "./pages/browseSection/BrowseSection";

function App() {
  useGlobalStyles();

  return (
    <div>
      <Header />
      <main className="container">
        <BrowseSection />
      </main>
    </div>
  );
}

export default App;
