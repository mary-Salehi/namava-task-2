import { useGlobalStyles } from './styles/globals'
import Header from './components/layout/header/Header';

function App() {
  useGlobalStyles();

  return (
    <div>
      <Header/>
    </div>
  )
}

export default App
