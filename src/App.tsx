import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Pricing from './components/Pricing';
import { Features } from './components/Features';
// import './App.css';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Pricing></Pricing>
      <Features></Features>
    </div>
  );
}

export default App;
