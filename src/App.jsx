import { useGlobalStyles } from "./styles/globals";
import Header from "./components/layout/header/Header";
import BrowseSection from "./pages/browseSection/BrowseSection";
import { useEffect } from "react";

function App() {
  useGlobalStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
