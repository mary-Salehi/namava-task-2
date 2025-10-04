import { useGlobalStyles } from "./styles/globals";
import { useEffect } from "react";
import Header from "./components/layout/header/index";
import Search from "./pages/search";

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
        <Search />
      </main>
    </div>
  );
}

export default App;
