import { useGlobalStyles } from "./styles/globals";
// import BrowseSection from "./pages/browseSection";
import { useEffect } from "react";
import Header from "./components/layout/header/index";
import BrowseSection from "./pages/browseSection";

function App() {
  useGlobalStyles();

  useEffect(() => {
    document.title = 'جستجو';
  }, []);

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
